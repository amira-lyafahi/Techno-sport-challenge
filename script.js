// قائمة التحديات
const challenges = [
    "قفز الحبل الافتراضي: تخيلي أنك تمسكين بحبل قفز، واقفزي في مكانك 10 مرات متتالية",
    "تحدي التوازن: قفي على ساق واحدة لمدة 10 ثوانٍ",
    "تمارين الضغط البسيط: قومي بأداء 5 تمارين ضغط على الحائط",
    "القفز جانبيًا: اقفزي إلى اليمين ثم إلى اليسار 10 مرات",
    " الجري في المكان: اركضي في مكانك لمدة 15 ثانية",
    "تصفيق تحت الركبة: اقفزي وصفقي تحت ركبتيك أثناء القفز 5 مرات",
    " تمرين اللمس: انحني ولمسي أطراف أصابع قدميك 10 مرات",
    "تصفيق فوق الرأس: قفي في مكانك وصفقي فوق رأسك 10 مرات",
    "الوقوف والقرفصاء: قومي بـ 5 حركات من الوقوف والقرفصاء (سكوات)",
    "شد الجسم: قفي بشكل مستقيم وارفعي ذراعيك إلى الأعلى ثم انحني ببطء لتلامسي أطراف أصابعك. كرري التمرين 5 مرات"
];

// قائمة الأسئلة
const questions = [
    "ما هي الرياضة التي تُلعب باستخدام الكرة والشبكة على البحر أو الرمل؟",
    "كم عدد الألوان في الحلقات الأولمبية؟",
    "ما هو اسم الرياضة التي تُلعب بالكرة والعصا على الجليد؟",
    "كم شوطًا في مباراة كرة القدم؟",
    "ما هي الرياضة التي تتضمن الجري، القفز، والرمي؟",
    "في أي رياضة تُستخدم اليد فقط لتحريك الكرة؟",
    "كم عدد لاعبي كرة السلة؟",
    "ما هو اسم الرياضة التي تُلعب باستخدام القوس والسهام؟",
    "ما هي الرياضة التي تُلعب على ملعب مغطى بالعشب مع مضرب وكرة صغيرة؟ ",
    "ما هي الرياضة التي يكون فيها الهدف هو تسجيل الكرة في سلة مرتفعة؟"
];

// دالة اختيار التحدي
function pickChallenge() {
    const randomChallenge = challenges[Math.floor(Math.random() * challenges.length)];
    const display = document.getElementById('challengeDisplay');
    display.textContent = randomChallenge;
    display.classList.add('output');
}

// دالة اختيار السؤال
function pickQuestion() {
    const randomQuestion = questions[Math.floor(Math.random() * questions.length)];
    const display = document.getElementById('questionDisplay');
    display.textContent = randomQuestion;
    display.classList.add('output');
}