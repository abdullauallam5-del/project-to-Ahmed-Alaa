import React from 'react';

const placeholderImg = (width: number, height: number) => `https://picsum.photos/${width}/${height}?grayscale&blur=2`;

export const BonusSessionsSection = () => {
    const bonuses = [
        { title: 'CRO', speakerImg: placeholderImg(160, 160) },
        { title: 'Scaling', speakerImg: placeholderImg(161, 161) },
        { title: 'Google Ads', speakerImg: placeholderImg(162, 162) },
        { title: 'Mindset', speakerImg: placeholderImg(163, 163) },
        { title: 'Affiliate Marketing', speakerImg: placeholderImg(164, 164) },
    ];
    return (
        <section className="py-20 bg-slate-50" dir="rtl">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">بونص سيشنز حصرية من خبراء المجال</h2>
                <p className="max-w-2xl mx-auto mt-4 text-lg text-slate-600">جلسات إضافية مسجلة لتطوير مهاراتك في جوانب متقدمة من البزنس.</p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-12">
                    {bonuses.map(bonus => (
                        <div key={bonus.title} className="bg-white rounded-xl shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                            <img src={bonus.speakerImg} alt={bonus.title} className="w-full h-40 object-cover" />
                            <div className="p-4">
                                <h3 className="text-lg font-bold text-slate-800">{bonus.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
