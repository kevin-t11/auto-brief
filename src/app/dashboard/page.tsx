import { auth } from '@/auth';
import { Navigation } from '@/components/hero-components/Navigation';
import { headers } from 'next/headers';
const Dashboard = async () => {
  const session = await auth.api.getSession({
    headers: await headers()
  });
  return (
    <div>
      <Navigation session={session} />
    </div>
  );
};

export default Dashboard;
