import { authClient } from '@/auth-client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import LogoutButton from './logout-button';
import { Logo } from './ui/logo';

const Navbar = async () => {
  const session = await authClient.getSession();
  return (
    <div className="flex justify-between items-center p-3 mx-auto border border-gray-50 shadow-sm mb-8">
      <div>
        <Link href="/">
          <Logo width={150} height={40} />
        </Link>
      </div>
      <div>
        {session?.data?.user ? (
          <LogoutButton />
        ) : (
          <div className="flex gap-2">
            <Link href="/sign-in">
              <Button variant="secondary">Login</Button>
            </Link>
            <Link href="/sign-up">
              <Button>Signup</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
