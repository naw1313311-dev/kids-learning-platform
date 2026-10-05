'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBookOpen, FaGamepad, FaStar, FaVolumeUp } from 'react-icons/fa';

const alphabet = [
  { letter: 'أ', word: 'أرنب', theme: 'from-pink-400 to-rose-500' },
  { letter: 'ب', word: 'بطة', theme: 'from-amber-400 to-yellow-500' },
  { letter: 'ت', word: 'توتة', theme: 'from-green-400 to-emerald-500' },
  { letter: 'ث', word: 'ثلج', theme: 'from-cyan-400 to-sky-500' },
  { letter: 'ج', word: 'جرس', theme: 'from-violet-400 to-purple-500' },
  { letter: 'د', word: 'دراجة', theme: 'from-orange-400 to-red-500' },
];

const numbers = [
  { value: 1, label: 'واحد', color: 'bg-pink-200 text-pink-900' },
  { value: 2, label: 'اثنان', color: 'bg-amber-200 text-amber-900' },
  { value: 3, label: 'ثلاثة', color: 'bg-green-200 text-green-900' },
  { value: 4, label: 'أربعة', color: 'bg-cyan-200 text-cyan-900' },
  { value: 5, label: 'خمسة', color: 'bg-violet-200 text-violet-900' },
  { value: 6, label: 'ستة', color: 'bg-orange-200 text-orange-900' },
];

const activities = [
  { title: 'تعلم الحروف', text: 'اكتشف كل حرف مع صورة ومعلومة بسيطة.', icon: FaBookOpen },
  { title: 'تعلم الأرقام', text: 'عدّ الأرقام من 1 إلى 10 بسهولة.', icon: FaStar },
  { title: 'ألعاب ممتعة', text: 'ألعب، اختر، واستمتع بالتعلم.', icon: FaGamepad },
];

export function LearningApp() {
  const [selectedLetter, setSelectedLetter] = useState(alphabet[0]);
  const [selectedNumber, setSelectedNumber] = useState(numbers[0]);

  const speak = (text: string) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ar-SA';
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-100 via-white to-amber-100 text-slate-800">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-400 to-violet-500 text-2xl shadow-soft">
            🎓
          </div>
          <div>
            <p className="text-xl font-black text-sky-700">أبجد</p>
            <p className="text-xs text-slate-500">منصة الأطفال التعليمية</p>
          </div>
        </div>

        <nav className="hidden gap-6 text-sm font-medium text-slate-700 md:flex">
          <a href="#home">الرئيسية</a>
          <a href="#letters">الحروف</a>
          <a href="#numbers">الأرقام</a>
          <a href="#games">الألعاب</a>
        </nav>

        <button className="rounded-full bg-gradient-to-r from-pink-500 to-violet-500 px-5 py-2 text-sm font-bold text-white shadow-lg transition hover:scale-105">
          ابدأ الآن
        </button>
      </header>

      <section id="home" className="mx-auto max-w-7xl px-6 pb-16 pt-8 lg:pt-16">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <span className="inline-flex rounded-full bg-pink-100 px-4 py-2 text-sm font-bold text-pink-700">
              تعلم ممتع وآمن
            </span>
            <h1 className="mt-5 text-4xl font-black leading-tight text-slate-900 md:text-6xl">
              الحروف والأرقام تبدأ هنا!
            </h1>
            <p className="mt-5 max-w-xl text-lg text-slate-600">
              منصة تعليمية تفاعلية للأطفال تساعدهم على تعلم الحروف الهجائية والأرقام من خلال ألوان جذابة، أصوات ممتعة، وألعاب سهلة.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-full bg-gradient-to-r from-sky-500 to-cyan-500 px-6 py-3 font-bold text-white shadow-lg transition hover:scale-105">
                ابدأ التعلم
              </button>
              <button className="rounded-full border-2 border-sky-300 bg-white px-6 py-3 font-bold text-sky-700 transition hover:bg-sky-50">
                مشاهدة الدروس
              </button>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-600">
              <div>
                <p className="text-2xl font-black text-slate-900">300+</p>
                <p>تمرين</p>
              </div>
              <div>
                <p className="text-2xl font-black text-slate-900">12</p>
                <p>حرف جديد</p>
              </div>
              <div>
                <p className="text-2xl font-black text-slate-900">10</p>
                <p>أرقام</p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute -left-12 top-8 h-24 w-24 rounded-full bg-amber-200 blur-2xl" />
            <div className="absolute -right-10 bottom-6 h-28 w-28 rounded-full bg-pink-200 blur-2xl" />
            <div className="relative rounded-[2rem] border border-white/60 bg-white/70 p-6 shadow-soft backdrop-blur">
              <div className="rounded-[1.5rem] bg-gradient-to-br from-sky-400 via-cyan-400 to-blue-500 p-6 text-white shadow-xl">
                <div className="flex items-center justify-between">
                  <p className="text-lg font-bold">درس اليوم</p>
                  <span className="rounded-full bg-white/20 px-3 py-1 text-xs">10 دقيقة</span>
                </div>
                <div className="mt-8 flex items-center justify-between">
                  <div>
                    <p className="text-7xl font-black">أ</p>
                    <p className="mt-2 text-xl font-bold">أرنب</p>
                  </div>
                  <button
                    onClick={() => speak('أرنب')}
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 text-2xl transition hover:bg-white/30"
                    aria-label="استماع للحرف"
                  >
                    <FaVolumeUp />
                  </button>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                {['أ', 'ب', '١', '٢'].map((item) => (
                  <div key={item} className="rounded-2xl bg-slate-50 px-4 py-3 text-center text-lg font-black text-slate-700">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="letters" className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm font-bold text-pink-600">أحدث الدروس</p>
            <h2 className="mt-2 text-3xl font-black text-slate-900">تعلم الحروف</h2>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {alphabet.map((item) => (
            <button
              key={item.letter}
              onClick={() => {
                setSelectedLetter(item);
                speak(`${item.letter} ${item.word}`);
              }}
              className={`rounded-[1.75rem] bg-gradient-to-br ${item.theme} p-[1px] text-right shadow-lg transition hover:-translate-y-1`}
            >
              <div className="rounded-[1.65rem] bg-white/90 p-5 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <span className="text-5xl font-black text-slate-900">{item.letter}</span>
                  <FaVolumeUp className="text-slate-500" />
                </div>
                <p className="mt-4 text-xl font-bold text-slate-800">{item.word}</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section id="numbers" className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-6">
          <p className="text-sm font-bold text-amber-600">للأرقام</p>
          <h2 className="mt-2 text-3xl font-black text-slate-900">تعلم الأرقام</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-6">
          {numbers.map((item) => (
            <button
              key={item.value}
              onClick={() => {
                setSelectedNumber(item);
                speak(`${item.value} ${item.label}`);
              }}
              className={`rounded-3xl p-4 text-center shadow-md transition hover:-translate-y-1 ${item.color}`}
            >
              <div className="text-4xl font-black">{item.value}</div>
              <div className="mt-2 text-sm font-bold">{item.label}</div>
            </button>
          ))}
        </div>
      </section>

      <section id="games" className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[2rem] bg-gradient-to-br from-violet-500 to-pink-500 p-6 text-white shadow-soft">
            <p className="text-sm font-bold text-white/80">لعبة اليوم</p>
            <h3 className="mt-2 text-3xl font-black">ما الحرف المختار؟</h3>
            <div className="mt-6 flex items-center justify-center rounded-[1.5rem] bg-white/15 p-8">
              <span className="text-8xl font-black">{selectedLetter.letter}</span>
            </div>
            <div className="mt-6 flex gap-3">
              <button
                onClick={() => speak(selectedLetter.word)}
                className="flex items-center gap-2 rounded-full bg-white px-5 py-3 font-bold text-violet-600"
              >
                <FaVolumeUp /> استمع
              </button>
              <button className="rounded-full border border-white/50 px-5 py-3 font-bold text-white">
                إجابة صحيحة
              </button>
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-6 shadow-soft">
            <p className="text-sm font-bold text-sky-600">نشاط سريع</p>
            <h3 className="mt-2 text-3xl font-black text-slate-900">اختر الرقم الصحيح</h3>
            <div className="mt-6 rounded-3xl bg-sky-50 p-5">
              <p className="text-sm text-slate-500">كم عدد التفاحات؟</p>
              <div className="mt-4 flex items-center justify-center gap-3 text-5xl font-black text-sky-700">
                <span>{selectedNumber.value}</span>
                <span>🍏</span>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {[1, 2, 3, 4, 5].map((count) => (
                <button
                  key={count}
                  className="rounded-full border border-sky-200 bg-sky-50 px-4 py-2 font-bold text-sky-700 transition hover:bg-sky-100"
                >
                  {count}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-6">
        <div className="grid gap-5 md:grid-cols-3">
          {activities.map(({ title, text, icon: Icon }) => (
            <div key={title} className="rounded-[2rem] border border-white/60 bg-white/75 p-6 shadow-soft backdrop-blur-sm">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 to-violet-500 text-xl text-white">
                <Icon />
              </div>
              <h3 className="text-xl font-black text-slate-900">{title}</h3>
              <p className="mt-3 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
