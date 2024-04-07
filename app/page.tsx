"use client"
import LoginPage from '@/components/login/LoginPage';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();

  if (session) {
    return router.push('./home');
  }

  return (
    <main className="">
      <>
        {/* component */}
        <LoginPage />
      </>
    </main>
  );
}
