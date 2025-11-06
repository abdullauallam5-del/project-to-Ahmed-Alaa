import React from 'react';

const placeholderImg = (width: number, height: number) => `https://picsum.photos/${width}/${height}?grayscale&blur=2`;

export const CommunitySection = () => (
     <section className="py-20 bg-white" dir="rtl">
        <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                <div>
                     <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">انضم لمجتمع متكامل من المسوقين</h2>
                     <p className="mt-4 text-lg text-slate-600">
                        بعد التسجيل، هتنضم إلى كوميونيتي خاص فيه متابعة مستمرة ودعم مدى الحياة. لن تكون وحدك في هذه الرحلة، ستجد دائمًا من يساعدك ويشاركك الخبرات.
                     </p>
                </div>
                <div>
                    <img src={placeholderImg(600, 400)} alt="Community Chat" className="rounded-xl shadow-lg w-full"/>
                </div>
            </div>
        </div>
     </section>
);
