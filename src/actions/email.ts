'use server';

import prisma from '@/lib/prisma';
import sgMail from '@sendgrid/mail';

if (!process.env.SENDGRID_API_KEY) {
  throw new Error('SENDGRID_API_KEY environment variable is not set');
}

if (!process.env.EMAIL_FROM) {
  throw new Error('EMAIL_FROM environment variable is not set');
}

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function sendEmail({
  to,
  subject,
  text,
  html
}: {
  to: string;
  subject: string;
  text?: string;
  html?: string;
}) {
  if (!text && !html) {
    throw new Error('Either text or html content must be provided to send an email.');
  }

  try {
    // Create the email message
    const msg = {
      to: to.toLowerCase().trim(),
      from: process.env.EMAIL_FROM!,
      subject: subject.trim(),
      text: text?.trim() || 'Please view this email in an HTML-compatible email client.',
      html: html || undefined
    };

    await sgMail.send(msg);
    return { success: true };
  } catch (error: unknown) {
    console.error('Error sending email:', error instanceof Error ? error.message : error);
    throw new Error(
      `Failed to send email: ${error instanceof Error ? error.message : String(error)}`
    );
  }
}

export async function resendVerificationEmail(email: string) {
  'use server';

  try {
    if (!email) {
      throw new Error('Email address is required');
    }

    // Check if user exists
    const user = await prisma.user.findUnique({
      where: { email }
    });

    if (!user) {
      throw new Error('User not found');
    }

    if (user.emailVerified) {
      throw new Error('Email is already verified');
    }

    // Generate a verification token
    const token = Buffer.from(`${email}:${Date.now()}`).toString('base64');

    // Store the token in the database using the Verification model
    await prisma.verification.upsert({
      where: {
        id: `email-verification-${email}`
      },
      update: {
        value: token,
        expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000) // 24 hours from now
      },
      create: {
        id: `email-verification-${email}`,
        identifier: email,
        value: token,
        expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000) // 24 hours from now
      }
    });

    // Create verification URL
    const appUrl = process.env.NEXT_PUBLIC_APP_URL;
    const verificationUrl = `${appUrl}/api/auth/verify-email?token=${token}&callbackURL=${process.env.EMAIL_VERIFICATION_CALLBACK_URL || '/dashboard'}`;

    // Send verification email
    await sendEmail({
      to: email,
      subject: 'Verify your email address',
      html: await generateVerificationEmailHtml(verificationUrl, user.name || undefined),
      text: `Click the link to verify your email: ${verificationUrl}`
    });

    return { success: true };
  } catch (error: unknown) {
    console.error('Error resending verification email:', error);
    throw new Error(
      `Failed to resend verification email: ${error instanceof Error ? error.message : String(error)}`
    );
  }
}

export async function generateVerificationEmailHtml(
  verificationUrl: string,
  userName: string = 'there'
) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Verify Your Email</title>
</head>
<body style="margin: 0; padding: 0; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; color: #1a1a1a; background-color: #f9fafb;">
  <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#f9fafb">
    <tr>
      <td align="center" style="padding: 40px 0;">
                <table width="600" border="0" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); max-width: 100%;">          <!-- Header -->          <tr>            <td style="background-color: #7e22ce; padding: 24px 40px; text-align: center;">              <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600;">Auto Brief</h1>            </td>          </tr>          <!-- Content -->          <tr>            <td style="padding: 40px;">              <h2 style="color: #1a1a1a; font-size: 20px; font-weight: 600; margin-top: 0; margin-bottom: 16px;">Verify your email address</h2>              <p style="color: #666666; font-size: 16px; line-height: 1.6; margin-bottom: 24px;">Hello ${userName},</p>              <p style="color: #666666; font-size: 16px; line-height: 1.6; margin-bottom: 24px;">Thanks for signing up! Please verify your email address to complete your registration and secure your account.</p>              <table width="100%" border="0" cellspacing="0" cellpadding="0">                <tr>                  <td>                    <a href="${verificationUrl}" target="_blank" style="display: inline-block; background-color: #7e22ce; color: #ffffff; font-size: 16px; font-weight: 500; text-decoration: none; padding: 12px 24px; border-radius: 6px; text-align: center;">Verify Email Address</a>
                  </td>
                </tr>
              </table>
              <p style="color: #666666; font-size: 16px; line-height: 1.6; margin-top: 24px; margin-bottom: 0;">If you didn't create an account, you can safely ignore this email.</p>
              <p style="color: #666666; font-size: 14px; line-height: 1.6; margin-top: 24px;">Button not working? Copy and paste this link into your browser:</p>
              <p style="color: #0070f3; font-size: 14px; line-height: 1.6; word-break: break-all;">${verificationUrl}</p>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="background-color: #f3f4f6; padding: 24px 40px; text-align: center;">
              <p style="color: #6b7280; font-size: 14px; margin: 0;">© ${new Date().getFullYear()} Auto Brief. All rights reserved.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

export async function generatePasswordResetEmailHtml(resetUrl: string, userName: string = 'there') {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reset Your Password</title>
</head>
<body style="margin: 0; padding: 0; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; color: #1a1a1a; background-color: #f9fafb;">
  <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#f9fafb">
    <tr>
      <td align="center" style="padding: 40px 0;">
                <table width="600" border="0" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); max-width: 100%;">          <!-- Header -->          <tr>            <td style="background-color: #7e22ce; padding: 24px 40px; text-align: center;">              <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600;">Auto Brief</h1>            </td>          </tr>          <!-- Content -->          <tr>            <td style="padding: 40px;">              <h2 style="color: #1a1a1a; font-size: 20px; font-weight: 600; margin-top: 0; margin-bottom: 16px;">Reset your password</h2>              <p style="color: #666666; font-size: 16px; line-height: 1.6; margin-bottom: 24px;">Hello ${userName},</p>              <p style="color: #666666; font-size: 16px; line-height: 1.6; margin-bottom: 24px;">We received a request to reset your password. Click the button below to create a new password:</p>              <table width="100%" border="0" cellspacing="0" cellpadding="0">                <tr>                  <td>                    <a href="${resetUrl}" target="_blank" style="display: inline-block; background-color: #7e22ce; color: #ffffff; font-size: 16px; font-weight: 500; text-decoration: none; padding: 12px 24px; border-radius: 6px; text-align: center;">Reset Password</a>
                  </td>
                </tr>
              </table>
              <p style="color: #666666; font-size: 16px; line-height: 1.6; margin-top: 24px; margin-bottom: 0;">If you didn't request a password reset, you can safely ignore this email.</p>
              <p style="color: #666666; font-size: 14px; line-height: 1.6; margin-top: 24px;">Button not working? Copy and paste this link into your browser:</p>
              <p style="color: #0070f3; font-size: 14px; line-height: 1.6; word-break: break-all;">${resetUrl}</p>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="background-color: #f3f4f6; padding: 24px 40px; text-align: center;">
                <p style="color: #6b7280; font-size: 14px; margin: 0;">© ${new Date().getFullYear()} Auto Brief. All rights reserved.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

export async function generateEmailChangeVerificationHtml(
  verificationUrl: string,
  userName: string = 'there'
) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Verify Email Change</title>
</head>
<body style="margin: 0; padding: 0; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; color: #1a1a1a; background-color: #f9fafb;">
  <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#f9fafb">
    <tr>
      <td align="center" style="padding: 40px 0;">
                <table width="600" border="0" cellspacing="0" cellpadding="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); max-width: 100%;">          <!-- Header -->          <tr>            <td style="background-color: #7e22ce; padding: 24px 40px; text-align: center;">              <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600;">Auto Brief</h1>            </td>          </tr>          <!-- Content -->          <tr>            <td style="padding: 40px;">              <h2 style="color: #1a1a1a; font-size: 20px; font-weight: 600; margin-top: 0; margin-bottom: 16px;">Verify your new email address</h2>              <p style="color: #666666; font-size: 16px; line-height: 1.6; margin-bottom: 24px;">Hello ${userName},</p>              <p style="color: #666666; font-size: 16px; line-height: 1.6; margin-bottom: 24px;">You recently requested to change your email address. Please click the button below to verify this new email address:</p>              <table width="100%" border="0" cellspacing="0" cellpadding="0">                <tr>                  <td>                    <a href="${verificationUrl}" target="_blank" style="display: inline-block; background-color: #7e22ce; color: #ffffff; font-size: 16px; font-weight: 500; text-decoration: none; padding: 12px 24px; border-radius: 6px; text-align: center;">Verify New Email</a>
                  </td>
                </tr>
              </table>
              <p style="color: #666666; font-size: 16px; line-height: 1.6; margin-top: 24px; margin-bottom: 0;">If you didn't request this change, please contact our support team immediately.</p>
              <p style="color: #666666; font-size: 14px; line-height: 1.6; margin-top: 24px;">Button not working? Copy and paste this link into your browser:</p>
              <p style="color: #0070f3; font-size: 14px; line-height: 1.6; word-break: break-all;">${verificationUrl}</p>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="background-color: #f3f4f6; padding: 24px 40px; text-align: center;">
                <p style="color: #6b7280; font-size: 14px; margin: 0;">© ${new Date().getFullYear()} Auto Brief. All rights reserved.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}
