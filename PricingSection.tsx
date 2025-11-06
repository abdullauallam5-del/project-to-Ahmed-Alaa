import React, { useState, useEffect } from 'react';

export const PricingSection = () => {
    const calculateTimeLeft = () => {
        const difference = +new Date().setHours(24, 0, 0, 0) - +new Date();
        let timeLeft: { [key: string]: number } = {};

        if (difference > 0) {
            timeLeft = {
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section id="pricing" className="py-20 bg-white" dir="rtl">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto bg-slate-900 text-white p-8 md:p-12 rounded-2xl shadow-2xl text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold">عرض خاص لمدة 24 ساعة أو 20 مقعد فقط</h2>
                    <div className="flex justify-center gap-4 md:gap-8 my-8 text-4xl md:text-6xl font-bold">
                        <div>{String(timeLeft.hours || '00').padStart(2, '0')}<span className="block text-sm font-normal">ساعة</span></div>
                        <div>:</div>
                        <div>{String(timeLeft.minutes || '00').padStart(2, '0')}<span className="block text-sm font-normal">دقيقة</span></div>
                        <div>:</div>
                        <div>{String(timeLeft.seconds || '00').padStart(2, '0')}<span className="block text-sm font-normal">ثانية</span></div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6 my-10 text-lg">
                        <div className="bg-slate-800 p-6 rounded-lg">السعر الحالي: <span className="font-bold text-2xl">4200 جنيه</span></div>
                        <div className="bg-slate-800 p-6 rounded-lg">السعر بعد العرض: <span className="font-bold text-2xl text-slate-400">5200 جنيه</span></div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-center gap-4">
                        <a href="#" className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg py-4 px-8 rounded-lg transition-colors w-full md:w-auto">ادفع كامل المبلغ واحصل على هدية إضافية</a>
                        <a href="#" className="bg-slate-700 hover:bg-slate-600 text-white font-bold text-lg py-4 px-8 rounded-lg transition-colors w-full md:w-auto">ادفع نصف المبلغ الآن</a>
                    </div>
                </div>
            </div>
        </section>
    );
};