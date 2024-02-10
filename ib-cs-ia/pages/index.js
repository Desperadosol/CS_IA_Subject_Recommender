/*
 * This file contains a single React component: Home.
 *
 * Home is a functional component that returns a main element for the landing page of the website.
 * The main element contains several sections: HomeSection, FeatureSection, HowItWorks, and TechnologiesSection.
 * Each section is represented by a separate component that is imported from another file.
 */
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