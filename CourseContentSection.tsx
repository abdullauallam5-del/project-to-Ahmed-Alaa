import React from 'react';
import { AccordionItem } from '../AccordionItem.tsx';

export const CourseContentSection = () => {
    const courseContent = [
        { title: 'قسم 1 – اختيار المنتج والتسعير', content: ['تحليل السوق والمنافسين', 'إيجاد منتجات عليها طلب عالي', 'استراتيجيات تسعير تضمن لك الربح'] },
        { title: 'قسم 2 – ما قبل الإعلان', content: ['تجهيز المتجر الإلكتروني (Landing Page)', 'إعداد بيكسل الإعلانات (Pixel Setup)', 'كتابة محتوى إعلاني جذاب'] },
        { title: 'قسم 3 – الإعلانات على ميتا وتيك توك', content: ['بناء استراتيجية إعلانية متكاملة', 'استهداف الجمهور الصحيح بدقة', 'تحليل الحملات وتحسينها (Optimization)'] },
        { title: 'قسم 4 – التشغيل والشحن', content: ['التعامل مع شركات الشحن', 'متابعة الطلبات وتأكيدها', 'تحسين تجربة العميل (Customer Experience)'] },
        { title: 'قسم 5 – الحسابات والمهارات', content: ['حساب تكلفة المنتج والأرباح', 'إدارة الميزانية الإعلانية', 'مهارات التفاوض مع الموردين'] },
    ];

    return (
        <section className="py-20 bg-white" dir="rtl">
            <div className="container mx-auto px-4">
                <h2 className="text-center text-3xl md:text-4xl font-extrabold text-slate-900 mb-12">محتويات الكورس بالتفصيل</h2>
                <div className="max-w-4xl mx-auto space-y-4">
                    {courseContent.map((item, index) => (
                         <AccordionItem key={index} title={item.title}>
                            <ul className="space-y-3 pt-4 pr-4">
                                {item.content.map((point, i) => (
                                    <li key={i} className="flex items-start">
                                        <svg className="w-5 h-5 text-orange-500 mt-1 ml-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                        </svg>
                                        <span className="text-slate-600">{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </AccordionItem>
                    ))}
                </div>
            </div>
        </section>
    );
};