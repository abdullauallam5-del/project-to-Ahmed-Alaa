import React from 'react';
import { ShieldIcon } from '../icons/ShieldIcon.tsx';

export const GuaranteeSection = () => (
    <section className="py-16 bg-slate-50" dir="rtl">
        <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md border border-slate-200">
                <ShieldIcon className="w-20 h-20 text-orange-500 flex-shrink-0"/>
                <p className="text-lg text-slate-700 text-center md:text-right font-medium">
                    ضمان استرداد كامل المبلغ: تقدر تسترد كامل المبلغ خلال أول محاضرتين بدون أي أسئلة أو خصومات. رضاك هو أولويتنا.
                </p>
            </div>
        </div>
    </section>
);