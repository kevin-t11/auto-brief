import { auth } from '@/auth';
import { Navigation } from '@/components/hero-components/Navigation';
import { headers } from 'next/headers';

export default async function AuthLayout({ children }: { children: React.ReactNode }) {
  const session = await auth.api.getSession({
    headers: await headers()
  });
  return (
    <div>
      <Navigation session={session} isAuthRoute={true} />
      {children}
    </div>
  );
}
