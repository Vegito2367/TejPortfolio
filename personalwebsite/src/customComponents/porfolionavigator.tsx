"use client"
import { useRouter } from 'next/navigation';

export default function PortfolioNavButton() {
  const router = useRouter();

  return (
    <div className="mt-10">
      <button
        onClick={() => router.push('/internship')}
        className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg px-6 py-3 rounded-lg shadow-md transition-all duration-200"
      >
        View Internship Portfolio
      </button>
    </div>
  );
}
