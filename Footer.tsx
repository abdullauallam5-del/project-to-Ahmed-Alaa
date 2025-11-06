import React from 'react';

export const Footer = () => (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-8" dir="rtl">
        <div className="container mx-auto px-4 text-center">
            <p>&copy; {new Date().getFullYear()} Ecommerce End Game. جميع الحقوق محفوظة.</p>
            <div className="flex justify-center items-center gap-4 mt-4">
                <a href="#" className="hover:text-white transition-colors">تحدث معنا عبر واتساب</a>
            </div>
        </div>
    </footer>
);
