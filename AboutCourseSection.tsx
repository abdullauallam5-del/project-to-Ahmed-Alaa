import React from 'react';
import { GreenCheckIcon } from '../icons/GreenCheckIcon.tsx';

export const AboutCourseSection = () => (
    <section className="py-20 bg-white" dir="rtl">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">ماذا ستتعلم في هذه الرحلة؟</h2>
            <p className="max-w-3xl mx-auto mt-4 text-lg text-slate-600">
                هذا الكورس ليس مجرد معلومات نظرية، بل هو تطبيق عملي خطوة بخطوة من خبراء واجهوا نفس تحدياتك. ستتعلم استراتيجيات حقيقية أثبتت نجاحها على أرض الواقع.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-12 max-w-6xl mx-auto">
                {['اختيار المنتج الرابح', 'تسعير ذكي ومربح', 'إطلاق حملات ناجحة', 'إدارة التشغيل بكفاءة', 'حساب الأرباح بدقة'].map(benefit => (
                    <div key={benefit} className="flex flex-col items-center p-6 bg-slate-50 rounded-xl shadow-sm">
                        <GreenCheckIcon className="w-12 h-12 text-green-500 mb-4" />
                        <h3 className="text-lg font-bold text-slate-800">{benefit}</h3>
                    </div>
                ))}
            </div>
        </div>
    </section>
);