import { UserContext } from "@/lib/context";
import { useContext } from 'react';
import Targets from '@/components/Targets'
import Questions from "@/components/Questions";
import HomeSection from '@/components/landing page/HomeSection';
import FeatureSection from "@/components/landing page/FeatureSection";
import TechnologiesSection from "@/components/landing page/TechnologiesSection";
import HowItWorks from "@/components/landing page/HowItWorks";

import  * as client from '../lib/client'

export default function Home() {
    const { user, username } = useContext(UserContext);
    
    return (
        <main>
            <HomeSection />
            <FeatureSection />
            <HowItWorks />
            <TechnologiesSection />
        </main>
    );
}