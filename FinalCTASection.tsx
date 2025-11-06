import React from 'react';

export const FinalCTASection = () => (
    <section className="py-20 bg-slate-900 text-white" dir="rtl">
        <div className="container mx-auto px-4 text-center">
             <h2 className="text-4xl md:text-5xl font-extrabold">ابدأ رحلتك دلوقتي.</h2>
             <p className="max-w-2xl mx-auto mt-4 text-lg text-slate-300">
                حقق أول أرباحك بخطة مجربة من خبراء حقيقيين. لا تضيع فرصة تغيير مستقبلك المالي.
             </p>
             <a href="#pricing" className="scroll-smooth mt-8 inline-block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-xl py-4 px-10 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                سجل الآن – العرض ينتهي قريبًا
             </a>
        </div>
    </section>
);
