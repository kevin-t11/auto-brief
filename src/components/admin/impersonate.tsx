'use client';

import { authClient } from '@/auth-client';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

import { useRouter } from 'next/navigation';
interface ImpersonateUserProps {
  userId: string;
}

export default function ImpersonateUser({ userId }: ImpersonateUserProps) {
  const router = useRouter();

  const handleImpersonateUser = async () => {
    try {
      await authClient.admin.impersonateUser({
        userId: userId
      });
      router.push('/');
      toast.success('Impersonated user, you are now logged in as this user');
      router.refresh();
    } catch (error) {
      console.error('Failed to impersonate user:', error);
    }
  };

  return (
    <Button onClick={handleImpersonateUser} variant="outline" size="sm">
      Impersonate
    </Button>
  );
}
