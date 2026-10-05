'use client';

import Link from 'next/link';
import { FaVolumeUp } from 'react-icons/fa';
import { letters } from '@/data/learning-data';

const speak = (text: string) => {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'ar-SA';
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
};

export default function LettersPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50 to-amber-50 px-6 py-10 text-slate-800">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm font-bold text-pink-600">الحروف الهجائية</p>
            <h1 className="mt-2 text-4xl font-black text-slate-900">تعلم الحروف</h1>
          </div>
          <Link href="/" className="rounded-full bg-sky-500 px-5 py-2 font-bold text-white shadow-md hover:bg-sky-600">
            العودة للرئيسية
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {letters.map((item) => (
            <div key={item.letter} className={`rounded-[2rem] bg-gradient-to-br ${item.theme} p-[1px] shadow-lg`}>
              <div className="rounded-[1.9rem] bg-white/90 p-5">
                <div className="flex items-center justify-between">
                  <span className="text-6xl font-black text-slate-900">{item.letter}</span>
                  <button
                    onClick={() => speak(`${item.letter} ${item.word}`)}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-sky-600 hover:bg-slate-200"
                    aria-label={`استماع إلى حرف ${item.letter}`}
                  >
                    <FaVolumeUp />
                  </button>
                </div>
                <div className="mt-4 flex items-center justify-between text-sm font-bold text-slate-600">
                  <span>{item.emoji}</span>
                  <span>{item.word}</span>
                </div>
                <p className="mt-4 text-sm text-slate-600">{item.example}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
