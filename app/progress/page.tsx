import Link from 'next/link';

export default function ProgressPage() {
  const badges = [
    { title: 'مبدئِة', icon: '🌟', desc: 'بدأت رحلتك التعليمية' },
    { title: 'متعلم جيد', icon: '⭐', desc: 'حصلت على 3 نجوم' },
    { title: 'خبير الحروف', icon: '🎓', desc: 'تعلمت 8 أحرف' },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-sky-50 px-6 py-10">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm font-bold text-emerald-600">تقدم الطفل</p>
            <h1 className="mt-2 text-4xl font-black text-slate-900">لوحة الإنجاز</h1>
          </div>
          <Link href="/" className="rounded-full bg-emerald-500 px-5 py-2 font-bold text-white">
            العودة للرئيسية
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            { label: 'الحروف المكتسبة', value: '8', color: 'bg-pink-100 text-pink-700' },
            { label: 'الأرقام المكتسبة', value: '10', color: 'bg-sky-100 text-sky-700' },
            { label: 'نقاطك', value: '840', color: 'bg-amber-100 text-amber-700' }
          ].map((item) => (
            <div key={item.label} className={`rounded-[2rem] p-6 shadow-soft ${item.color}`}>
              <p className="text-sm font-bold">{item.label}</p>
              <p className="mt-3 text-4xl font-black">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {badges.map((badge) => (
            <div key={badge.title} className="rounded-[2rem] bg-white p-6 shadow-soft">
              <div className="text-5xl">{badge.icon}</div>
              <h3 className="mt-4 text-xl font-black text-slate-900">{badge.title}</h3>
              <p className="mt-2 text-slate-600">{badge.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
