import {
  generateEmailChangeVerificationHtml,
  generatePasswordResetEmailHtml,
  generateVerificationEmailHtml,
  sendEmail
} from '@/actions/email';
import prisma from '@/lib/prisma';
import { betterAuth, BetterAuthOptions } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { admin, openAPI } from 'better-auth/plugins';

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: 'mongodb'
  }),
  session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 days
    updateAge: 60 * 60 * 24 * 1, // 1 day (every 7 days the session expiration is updated)
    cookieCache: {
      enabled: true,
      maxAge: 5 * 60 // Cache duration in seconds
    }
  },
  user: {
    additionalFields: {
      premium: {
        type: 'boolean',
        required: false
      }
    },
    changeEmail: {
      enabled: true,
      sendChangeEmailVerification: async ({ newEmail, url }) => {
        await sendEmail({
          to: newEmail,
          subject: 'Verify your email change',
          html: await generateEmailChangeVerificationHtml(url),
          text: `Click the link to verify: ${url}`
        });
      }
    }
  },
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string
    },
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    }
  },
  plugins: [
    openAPI(),
    admin({
      impersonationSessionDuration: 60 * 60 * 24 * 7 // 7 days
    })
  ], // api/auth/reference
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
    sendResetPassword: async ({ user, url }) => {
      await sendEmail({
        to: user.email,
        subject: 'Reset your password',
        html: await generatePasswordResetEmailHtml(url, user.name),
        text: `Click the link to reset your password: ${url}`
      });
    }
  },
  emailVerification: {
    sendOnSignUp: true,
    autoSignInAfterVerification: true,
    sendVerificationEmail: async ({
      user,
      token
    }: {
      user: { email: string; name?: string };
      token: string;
    }) => {
      const verificationUrl = `${process.env.BETTER_AUTH_URL}/api/auth/verify-email?token=${token}&callbackURL=${process.env.EMAIL_VERIFICATION_CALLBACK_URL}`;
      await sendEmail({
        to: user.email,
        subject: 'Verify your email address',
        html: await generateVerificationEmailHtml(verificationUrl, user.name),
        text: `Click the link to verify your email: ${verificationUrl}`
      });
    }
  }
} satisfies BetterAuthOptions);

export type Session = typeof auth.$Infer.Session;
