import React from 'react';
import { HeroSection } from './components/sections/HeroSection.tsx';
import { AboutCourseSection } from './components/sections/AboutCourseSection.tsx';
import { InstructorsSection } from './components/sections/InstructorsSection.tsx';
import { CourseContentSection } from './components/sections/CourseContentSection.tsx';
import { BonusSessionsSection } from './components/sections/BonusSessionsSection.tsx';
import { ToolsSection } from './components/sections/ToolsSection.tsx';
import { TestimonialsSection } from './components/sections/TestimonialsSection.tsx';
import { PricingSection } from './components/sections/PricingSection.tsx';
import { GuaranteeSection } from './components/sections/GuaranteeSection.tsx';
import { CommunitySection } from './components/sections/CommunitySection.tsx';
import { FAQSection } from './components/sections/FAQSection.tsx';
import { FinalCTASection } from './components/sections/FinalCTASection.tsx';
import { Footer } from './components/sections/Footer.tsx';

const App: React.FC = () => {
    return (
        <div className="bg-white scroll-smooth">
            <main>
                <HeroSection />
                <AboutCourseSection />
                <InstructorsSection />
                <CourseContentSection />
                <BonusSessionsSection />
                <ToolsSection />
                <TestimonialsSection />
                <PricingSection />
                <GuaranteeSection />
                <CommunitySection />
                <FAQSection />
                <FinalCTASection />
            </main>
            <Footer />
        </div>
    );
}

export default App;