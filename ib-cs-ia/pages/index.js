import HomeSection from '@/components/landing page/HomeSection';
import FeatureSection from "@/components/landing page/FeatureSection";
import TechnologiesSection from "@/components/landing page/TechnologiesSection";
import HowItWorks from "@/components/landing page/HowItWorks";

export default function Home() {
    return (
        <main>
            <HomeSection />
            <FeatureSection />
            <HowItWorks />
            <TechnologiesSection />
        </main>
    );
}