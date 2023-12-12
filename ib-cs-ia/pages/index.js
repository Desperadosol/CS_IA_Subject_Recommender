import { UserContext } from "@/lib/context";
import { useContext } from 'react';
import Targets from '@/components/Targets'
import Questions from "@/components/Questions";
import HomeSection from '@/components/HomeSection';
import FeatureSection from "@/components/FeatureSection";
import TechnologiesSection from "@/components/TechnologiesSection";


import  * as client from '../lib/client'

export default function Home() {
    const { user, username } = useContext(UserContext);
    
    return (
        <main>
            <HomeSection />
            <FeatureSection />
            <TechnologiesSection />
        </main>
    );
}