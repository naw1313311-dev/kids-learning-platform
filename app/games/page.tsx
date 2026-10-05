'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { gameQuestions } from '@/data/learning-data';

export default function GamesPage() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const current = gameQuestions[index];
  const progress = useMemo(() => ((index + 1) / gameQuestions.length) * 100, [index]);

  const handleAnswer = (option: string) => {
    if (selected) return;

    setSelected(option);

    if (option === current.answer) {
      setScore((prev) => prev + 1);
    }

    setTimeout(() => {
      if (index === gameQuestions.length - 1) {
        setShowResult(true);
        return;
      }

      setIndex((prev) => prev + 1);
      setSelected(null);
    }, 900);
  };

  const restart = () => {
    setIndex(0);
    setScore(0);
    setSelected(null);
    setShowResult(false);
  };

  if (showResult) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-violet-50 to-pink-50 px-6 py-10">
        <div className="mx-auto max-w-3xl rounded-[2rem] bg-white p-8 text-center shadow-soft">
          <div className="text-6xl">🎉</div>
          <h1 className="mt-4 text-4xl font-black text-slate-900">أحسنت!</h1>
          <p className="mt-3 text-xl text-slate-600">
            نتيجتك النهائية: <span className="font-black text-violet-600">{score}</span> من {gameQuestions.length}
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <button onClick={restart} className="rounded-full bg-violet-500 px-6 py-3 font-bold text-white">
              لعب مرة أخرى
            </button>
            <Link href="/" className="rounded-full border border-violet-300 bg-white px-6 py-3 font-bold text-violet-600">
              العودة للرئيسية
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50 to-pink-50 px-6 py-10">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm font-bold text-violet-600">لعبة التعلم</p>
            <h1 className="mt-2 text-4xl font-black text-slate-900">اختَر الإجابة الصحيحة</h1>
          </div>
          <Link href="/" className="rounded-full bg-sky-500 px-5 py-2 font-bold text-white">
            الرئيسية
          </Link>
        </div>

        <div className="rounded-[2rem] bg-white p-6 shadow-soft">
          <div className="mb-4 flex items-center justify-between text-sm font-bold text-slate-600">
            <span>السؤال {index + 1}</span>
            <span>{Math.round(progress)}%</span>
          </div>

          <div className="h-3 w-full rounded-full bg-slate-200">
            <div className="h-3 rounded-full bg-gradient-to-r from-violet-500 to-pink-500" style={{ width: `${progress}%` }} />
          </div>

          <div className="mt-8 rounded-[1.5rem] bg-gradient-to-br from-violet-100 to-pink-100 p-6 text-center">
            <div className="text-6xl">{current.emoji}</div>
            <h2 className="mt-4 text-2xl font-black text-slate-900">{current.question}</h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {current.options.map((option) => {
              const isCorrect = option === current.answer;
              const isSelected = selected === option;
              let className = 'rounded-2xl border border-slate-200 bg-slate-50 p-4 text-lg font-bold text-slate-700';

              if (selected) {
                if (isCorrect) className = 'rounded-2xl border border-green-300 bg-green-100 p-4 text-lg font-bold text-green-700';
                else if (isSelected) className = 'rounded-2xl border border-red-300 bg-red-100 p-4 text-lg font-bold text-red-700';
              }

              return (
                <button
                  key={option}
                  onClick={() => handleAnswer(option)}
                  className={className}
                  disabled={Boolean(selected)}
                >
                  {option}
                </button>
              );
            })}
          </div>

          <div className="mt-8 text-center text-lg font-bold text-slate-700">
            النتيجة الحالية: <span className="text-violet-600">{score}</span>
          </div>
        </div>
      </div>
    </main>
  );
}
