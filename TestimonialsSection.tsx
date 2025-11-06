import React, { useState, useEffect, useCallback } from 'react';

const placeholderImg = (width: number, height: number) => `https://picsum.photos/${width}/${height}?grayscale&blur=2`;

export const TestimonialsSection = () => {
    const testimonials = [
        { name: 'أحمد علي', quote: 'بدأت أحقق أول مبيعاتي خلال أسابيع قليلة!', videoThumb: placeholderImg(800, 450) },
        { name: 'فاطمة محمد', quote: 'الكورس عملي جدًا ومباشر، أفضل استثمار عملته في نفسي.', videoThumb: placeholderImg(801, 451) },
        { name: 'يوسف خالد', quote: 'الدعم من المحاضرين والمجتمع كان فوق الممتاز.', videoThumb: placeholderImg(802, 452) },
        { name: 'مريم سعيد', quote: 'اتعلمت أسرار عن الإعلانات مكنتش هلاقيها في أي مكان تاني.', videoThumb: placeholderImg(803, 453) },
    ];
    const [current, setCurrent] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
    }, [current, testimonials.length]);

    const prevSlide = () => {
        setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
    };
    
    useEffect(() => {
      const slideInterval = setInterval(nextSlide, 5000);
      return () => clearInterval(slideInterval);
    }, [nextSlide]);


    return (
        <section className="py-20 bg-slate-50" dir="rtl">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">نتائج حقيقية من متدربين حقيقيين</h2>
                <div className="relative max-w-4xl mx-auto mt-12">
                    <div className="overflow-hidden rounded-xl shadow-2xl bg-white">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className={`transition-opacity duration-700 ease-in-out ${index === current ? 'opacity-100' : 'opacity-0 absolute inset-0'}`}>
                                <div className="aspect-w-16 aspect-h-9">
                                  <img src={testimonial.videoThumb} alt={`Testimonial from ${testimonial.name}`} className="w-full h-full object-cover" />
                                </div>
                                <div className="p-8">
                                    <blockquote className="text-xl font-medium text-slate-700">“{testimonial.quote}”</blockquote>
                                    <cite className="block mt-4 font-bold text-slate-900 not-italic">- {testimonial.name}</cite>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button onClick={prevSlide} className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-16 transform bg-white/50 hover:bg-white rounded-full p-3 shadow-md transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-800" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                    </button>
                    <button onClick={nextSlide} className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-16 transform bg-white/50 hover:bg-white rounded-full p-3 shadow-md transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-800" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                    </button>
                </div>
            </div>
        </section>
    );
};
