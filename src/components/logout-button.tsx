'use client';

import { authClient } from '@/auth-client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Button } from './ui/button';

const LogoutButton = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogout = async () => {
    try {
      setIsLoading(true);
      await authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            router.push('/sign-in');
            router.refresh();
          }
        }
      });
    } catch (error) {
      console.error('Error logging out:', error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Button disabled={isLoading} onClick={handleLogout}>
      Logout
    </Button>
  );
};

export default LogoutButton;
