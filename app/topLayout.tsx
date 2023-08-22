'use client';

import { RecoilRoot } from 'recoil';

import { Alert, PushNotification } from '@/features';
import { Suspense } from 'react';

function TopLayout({ children }: { children: React.ReactNode }) {
  return (
    <RecoilRoot>
      {children}
      <Suspense
        fallback={
          <div className="bg-red-600 w-screen h-screen">loading...</div>
        }
      >
        <PushNotification />
      </Suspense>
      <Suspense
        fallback={
          <div className="bg-red-600 w-screen h-screen">loading...</div>
        }
      >
        <Alert />
      </Suspense>
    </RecoilRoot>
  );
}

export default TopLayout;
