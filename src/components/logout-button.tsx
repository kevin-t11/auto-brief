'use client';

import { authClient } from '@/auth-client';
import { Loader2, LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';
import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from './ui/dialog';

const LogoutButton = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleLogout = async () => {
    try {
      setIsLoading(true);
      await authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            router.push('/sign-in');
            router.refresh();
            toast.success('You have been logged out successfully');
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
      setIsDialogOpen(false);
    }
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700">
          <LogOut className="w-4 h-4" /> Logout
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Confirm Logout</DialogTitle>
          <DialogDescription>Are you sure you want to logout from your account?</DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex gap-2 pt-4">
          <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
            Cancel
          </Button>
          <Button disabled={isLoading} onClick={handleLogout} className="">
            {isLoading ? (
              <>
                Logout <Loader2 className="w-4 h-4 ml-2 animate-spin" />
              </>
            ) : (
              'Logout'
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default LogoutButton;
