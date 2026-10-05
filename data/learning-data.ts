export type LetterItem = {
  letter: string;
  word: string;
  emoji: string;
  theme: string;
  example: string;
};

export type NumberItem = {
  value: number;
  label: string;
  emoji: string;
  color: string;
};

export type GameQuestion = {
  id: number;
  question: string;
  options: string[];
  answer: string;
  emoji: string;
};

export const letters: LetterItem[] = [
  { letter: 'أ', word: 'أرنب', emoji: '🐇', theme: 'from-pink-400 to-rose-500', example: 'أرنب يقفز في الحقل' },
  { letter: 'ب', word: 'بطة', emoji: '🦆', theme: 'from-amber-400 to-yellow-500', example: 'بطة تسبح في البركة' },
  { letter: 'ت', word: 'توتة', emoji: '🍓', theme: 'from-green-400 to-emerald-500', example: 'توتة لذيذة ومشرقة' },
  { letter: 'ث', word: 'ثلج', emoji: '❄️', theme: 'from-cyan-400 to-sky-500', example: 'ثلج يغطّي الجبل' },
  { letter: 'ج', word: 'جرس', emoji: '🔔', theme: 'from-violet-400 to-purple-500', example: 'جرس يصدر نغمة لطيفة' },
  { letter: 'د', word: 'دراجة', emoji: '🚲', theme: 'from-orange-400 to-red-500', example: 'دراجة تسير بسرعة' },
  { letter: 'س', word: 'شمس', emoji: '☀️', theme: 'from-yellow-400 to-orange-500', example: 'الشمس تضيء السماء' },
  { letter: 'م', word: 'موز', emoji: '🍌', theme: 'from-lime-400 to-green-500', example: 'موز طازج ومغذي' }
];

export const numbers: NumberItem[] = [
  { value: 1, label: 'واحد', emoji: '🍏', color: 'bg-pink-200 text-pink-900' },
  { value: 2, label: 'اثنان', emoji: '🍊', color: 'bg-amber-200 text-amber-900' },
  { value: 3, label: 'ثلاثة', emoji: '🍇', color: 'bg-green-200 text-green-900' },
  { value: 4, label: 'أربعة', emoji: '🍋', color: 'bg-cyan-200 text-cyan-900' },
  { value: 5, label: 'خمسة', emoji: '🍉', color: 'bg-violet-200 text-violet-900' },
  { value: 6, label: 'ستة', emoji: '🍒', color: 'bg-orange-200 text-orange-900' },
  { value: 7, label: 'سبعة', emoji: '🥝', color: 'bg-emerald-200 text-emerald-900' },
  { value: 8, label: 'ثمانية', emoji: '🍍', color: 'bg-red-200 text-red-900' },
  { value: 9, label: 'تسعة', emoji: '🥭', color: 'bg-yellow-200 text-yellow-900' },
  { value: 10, label: 'عشرة', emoji: '🍎', color: 'bg-sky-200 text-sky-900' }
];

export const gameQuestions: GameQuestion[] = [
  {
    id: 1,
    question: 'ما الحرف الذي يبدأ بكلمة أرنب؟',
    options: ['أ', 'ب', 'ت', 'م'],
    answer: 'أ',
    emoji: '🐇'
  },
  {
    id: 2,
    question: 'كم عدد التفاحات في الصورة؟',
    options: ['3', '5', '4', '6'],
    answer: '4',
    emoji: '🍏'
  },
  {
    id: 3,
    question: 'ما الرقم الذي يأتي بعد 5؟',
    options: ['6', '7', '4', '8'],
    answer: '6',
    emoji: '🎯'
  },
  {
    id: 4,
    question: 'أي حرف يوافق كلمة موز؟',
    options: ['م', 'س', 'د', 'ج'],
    answer: 'م',
    emoji: '🍌'
  }
];
