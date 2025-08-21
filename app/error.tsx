'use client';

import { useEffect } from 'react';

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className='flex justify-center'>
      <h1 className='font-2xl font-bold'>
        Hey! This shouldn&apos;t have happened.
      </h1>
      <h2 className='font-xl'>You are not supposed to see me!</h2>
      <h2 className='font-xl'>Please try again and leave me alone.</h2>
    </div>
  );
}
