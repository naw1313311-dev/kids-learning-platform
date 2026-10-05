import Link from 'next/link';

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-sky-100 via-white to-pink-100 px-6">
      <div className="w-full max-w-md rounded-[2rem] bg-white p-8 shadow-soft">
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-violet-500 text-3xl text-white">
            👦
          </div>
          <h1 className="mt-4 text-3xl font-black text-slate-900">تسجيل الدخول</h1>
          <p className="mt-2 text-slate-600">مرحبًا بك في منصة أبجد</p>
        </div>

        <form className="mt-8 space-y-4">
          <div>
            <label className="mb-2 block text-sm font-bold text-slate-700">اسم الطفل</label>
            <input
              type="text"
              placeholder="اكتب اسمك"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-sky-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-slate-700">العمر</label>
            <input
              type="number"
              placeholder="5"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:border-sky-500"
            />
          </div>

          <button type="submit" className="w-full rounded-full bg-gradient-to-r from-sky-500 to-cyan-500 px-5 py-3 font-bold text-white">
            دخول
          </button>
        </form>

        <div className="mt-5 text-center">
          <Link href="/" className="text-sm font-bold text-sky-600">
            العودة للرئيسية
          </Link>
        </div>
      </div>
    </main>
  );
}
