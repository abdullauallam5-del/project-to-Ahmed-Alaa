import React from 'react';
import { AccordionItem } from '../AccordionItem.tsx';

export const FAQSection = () => {
    const faqs = [
        { q: 'هل الكورس مناسب للمبتدئين؟', a: 'نعم، الكورس مصمم ليبدأ معك من الصفر تمامًا وحتى مستوى الاحتراف، ولا يتطلب أي خبرة سابقة.' },
        { q: 'هل الجلسات مسجلة؟', a: 'بالتأكيد، جميع الجلسات تكون مباشرة ومسجلة ويمكنك الوصول إليها مدى الحياة لمراجعتها في أي وقت.' },
        { q: 'كيف يتم الدفع بالتقسيط؟', a: 'يمكنك دفع نصف المبلغ الآن لحجز مكانك، والنصف الآخر بعد أسبوعين من بداية الكورس. تواصل معنا على واتساب لمزيد من التفاصيل.' },
        { q: 'متى يبدأ الكورس؟', a: 'يبدأ الكورس في الأسبوع الأول من الشهر القادم. سيتم إرسال جدول المواعيد كاملاً لك بعد التسجيل مباشرة.' },
        { q: 'هل يوجد دعم بعد الكورس؟', a: 'نعم، ستحصل على دعم مدى الحياة من خلال مجتمعنا الخاص على تليجرام، حيث يمكنك طرح أسئلتك في أي وقت.' },
    ];
    return (
        <section className="py-20 bg-slate-50" dir="rtl">
            <div className="container mx-auto px-4">
                 <h2 className="text-center text-3xl md:text-4xl font-extrabold text-slate-900 mb-12">أسئلة شائعة</h2>
                 <div className="max-w-4xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} title={faq.q}>
                            <p className="text-slate-600 pt-2 pr-4">{faq.a}</p>
                        </AccordionItem>
                    ))}
                 </div>
            </div>
        </section>
    );
};