import React from 'react';
import { WhatsappIcon } from '../icons/WhatsappIcon.tsx';

const placeholderImg = (width: number, height: number) => `https://picsum.photos/${width}/${height}?grayscale&blur=2`;

export const HeroSection = () => (
    <section className="relative min-h-screen flex items-center justify-center text-white text-center p-4 overflow-hidden" dir="rtl">
        <div className="absolute inset-0 bg-slate-900 z-0">
            <img src={placeholderImg(1920, 1080)} alt="Live Session background" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="relative z-10 flex flex-col items-center">
            <h1 className="text-4xl md:text-6xl font-black leading-tight drop-shadow-lg">
                Ecommerce End Game V2.0
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold text-slate-200 mt-2 mb-4 drop-shadow-md">
                النسخة اللي غيرت مستقبل مئات المتدربين
            </h2>
            <p className="max-w-3xl text-lg md:text-xl text-slate-300 mt-4 mb-8">
                رحلة عملية لتعلم التجارة الإلكترونية من اختيار المنتج حتى تشغيل الإعلانات والحسابات.
            </p>
            <div className="flex items-center gap-4 mb-8">
                <span className="text-5xl font-bold text-white">4200 EGP</span>
                <span className="text-3xl font-medium text-slate-400 line-through">9000 EGP</span>
            </div>
            <a href="#pricing" className="scroll-smooth bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-xl py-4 px-10 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                سجل الآن واحجز مكانك بخصم 50%
            </a>
            <a href="#" className="mt-6 flex items-center gap-2 text-slate-200 hover:text-white transition-colors">
                <WhatsappIcon className="w-6 h-6" />
                <span>تحدث معنا عبر واتساب</span>
            </a>
        </div>
    </section>
);