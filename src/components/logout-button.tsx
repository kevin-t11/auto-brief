'use client';

import { authClient } from '@/auth-client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';
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
          },
          onError: (error) => {
            console.error('Error logging out:', error);
            toast.error('Failed to log out. Please try again.');
          }
        }
      });
    } catch (error) {
      console.error('Exception during logout:', error);
      toast.error('An error occurred while logging out');
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
