import React from 'react';

const placeholderImg = (width: number, height: number) => `https://picsum.photos/${width}/${height}?grayscale&blur=2`;

export const InstructorsSection = () => {
    const instructors = [
        { name: 'محمد شمس', img: placeholderImg(150, 150) },
        { name: 'أسامة جمال', img: placeholderImg(151, 151) },
        { name: 'نور صبري', img: placeholderImg(152, 152) },
        { name: 'أحمد جمعة', img: placeholderImg(153, 153) },
        { name: 'وغيرهم', img: placeholderImg(154, 154) },
    ];
    return (
        <section className="py-20 bg-slate-50" dir="rtl">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">تعلم من خبراء التجارة الإلكترونية في الوطن العربي</h2>
                <div className="flex justify-center flex-wrap gap-8 md:gap-12 mt-12">
                    {instructors.map(inst => (
                        <div key={inst.name} className="flex flex-col items-center">
                            <img src={inst.img} alt={inst.name} className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-lg border-4 border-white" />
                            <h3 className="mt-4 text-xl font-bold text-slate-800">{inst.name}</h3>
                        </div>
                    ))}
                </div>
                <p className="max-w-2xl mx-auto mt-10 text-xl text-slate-700 font-medium">
                    كل خبير هيشاركك خلاصة خبرته الحقيقية خطوة بخطوة.
                </p>
            </div>
        </section>
    );
};
