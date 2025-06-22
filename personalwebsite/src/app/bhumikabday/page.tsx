'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const AutoDirect = () => {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push('https://www.youtube.com/watch?v=dyzMIh715m0');
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="h-screen w-screen bg-gray-950 flex flex-col justify-center items-center text-white font-mono text-center px-4">
      <div className="flex flex-col items-center gap-5">
        <div className="w-14 h-14 border-4 border-pink-400 border-t-transparent rounded-full animate-spin"></div>
        <h1 className="text-3xl font-bold text-orange-400">🎉 Happy Birthday! 🎉</h1>
        <p className="text-lg text-gray-300">
          Hang tight Bhumika -- I'm taking you to something special!
        </p>
      </div>
    </div>
  );
};

export default AutoDirect;
