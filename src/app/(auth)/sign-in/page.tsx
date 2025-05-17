'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { signInSchema } from '@/lib/zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

import { authClient } from '@/auth-client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ErrorContext } from '@better-fetch/fetch';
import { Eye, EyeOff, Loader2 } from 'lucide-react';

export default function SignIn() {
  const router = useRouter();
  const [pendingCredentials, setPendingCredentials] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [pendingGithub, setPendingGithub] = useState(false);
  const [pendingGoogle, setPendingGoogle] = useState(false);

  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const handleCredentialsSignIn = async (values: z.infer<typeof signInSchema>) => {
    await authClient.signIn.email(
      {
        email: values.email,
        password: values.password
      },
      {
        onRequest: () => {
          setPendingCredentials(true);
        },
        onSuccess: async () => {
          router.push('/');
          router.refresh();
        },
        onError: (ctx: ErrorContext) => {
          console.log(ctx);
          toast.error(ctx.error.message ?? 'Something went wrong.');
        }
      }
    );
    setPendingCredentials(false);
  };

  const handleSignInWithGithub = async () => {
    await authClient.signIn.social(
      {
        provider: 'github'
      },
      {
        onRequest: () => {
          setPendingGithub(true);
        },
        onSuccess: async () => {
          router.push('/');
          router.refresh();
        },
        onError: (ctx: ErrorContext) => {
          toast.error(ctx.error.message ?? 'Something went wrong.');
        }
      }
    );
    setPendingGithub(false);
  };

  const handleSignInWithGoogle = async () => {
    await authClient.signIn.social(
      {
        provider: 'google'
      },
      {
        onRequest: () => {
          setPendingGoogle(true);
        },
        onSuccess: async () => {
          router.push('/');
          router.refresh();
        },
        onError: (ctx: ErrorContext) => {
          toast.error(ctx.error.message ?? 'Something went wrong.');
        }
      }
    );
    setPendingGoogle(false);
  };

  return (
    <Card className="w-full max-w-md mx-auto bg-neutral-50 rounded-md shadow-md mt-20 md:mt-0">
      <CardHeader>
        <CardTitle className="text-xl font-medium">
          Welcome back to{' '}
          <span className="bg-gradient-to-r from-blue-600 to-red-400 text-transparent bg-clip-text font-bold">
            Auto Brief
          </span>
        </CardTitle>
        <CardDescription className="font-medium text-gray-700">
          Sign in to continue to your workspace
        </CardDescription>
      </CardHeader>
      <div className="px-8">
        <Separator />
      </div>

      <div className="px-6">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Button
            variant="outline"
            className="flex-1 flex justify-center items-center gap-2 border-gray-300 hover:bg-gray-100 bg-gray-50"
            onClick={handleSignInWithGoogle}
            disabled={pendingGoogle}>
            <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
              <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                <path
                  fill="#4285F4"
                  d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"
                />
                <path
                  fill="#34A853"
                  d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"
                />
                <path
                  fill="#FBBC05"
                  d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"
                />
                <path
                  fill="#EA4335"
                  d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"
                />
              </g>
            </svg>
          </Button>

          <Button
            variant="outline"
            className="flex-1 flex justify-center items-center gap-2 border-gray-300 hover:bg-gray-100 bg-gray-50"
            onClick={handleSignInWithGithub}
            disabled={pendingGithub}>
            <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="currentColor"
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              />
            </svg>
          </Button>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t"></span>
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-neutral-100 px-2 text-gray-500">or continue with</span>
          </div>
        </div>
      </div>

      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleCredentialsSignIn)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="john@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="********"
                        {...field}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                        onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? (
                          <EyeOff className="h-4 w-4 text-gray-500" />
                        ) : (
                          <Eye className="h-4 w-4 text-gray-500" />
                        )}
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="text-right">
              <Link href="/forgot-password" className="text-sm text-purple-700 hover:underline">
                Forgot password?
              </Link>
            </div>
            <Button type="submit" className="w-full" disabled={pendingCredentials}>
              {pendingCredentials ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : null}
              Sign In
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex flex-col space-y-4">
        <div className="text-sm text-center">
          Don&apos;t have an account?{' '}
          <Link href="/sign-up" className="text-purple-600 hover:underline">
            Sign Up
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
