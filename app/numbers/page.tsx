'use client';

import Link from 'next/link';
import { FaVolumeUp } from 'react-icons/fa';
import { numbers } from '@/data/learning-data';

const speak = (text: string) => {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'ar-SA';
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
};

export default function NumbersPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-sky-50 px-6 py-10 text-slate-800">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm font-bold text-amber-600">الأرقام</p>
            <h1 className="mt-2 text-4xl font-black text-slate-900">تعلم الأرقام</h1>
          </div>
          <Link href="/" className="rounded-full bg-violet-500 px-5 py-2 font-bold text-white shadow-md hover:bg-violet-600">
            العودة للرئيسية
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {numbers.map((item) => (
            <div key={item.value} className={`rounded-[2rem] ${item.color} p-[1px] shadow-lg`}>
              <div className="rounded-[1.9rem] bg-white/80 p-5 text-center">
                <button
                  onClick={() => speak(`${item.value} ${item.label}`)}
                  className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-violet-600 shadow-sm"
                  aria-label={`استماع إلى الرقم ${item.value}`}
                >
                  <FaVolumeUp />
                </button>
                <div className="mt-4 text-5xl font-black text-slate-900">{item.value}</div>
                <div className="mt-2 text-2xl">{item.emoji}</div>
                <div className="mt-3 text-sm font-bold text-slate-700">{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
