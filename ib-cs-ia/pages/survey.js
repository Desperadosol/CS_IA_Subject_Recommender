import { UserContext } from "@/lib/context";
import { useContext } from 'react';
import Questions from "@/components/Questions";

export default function Survey() {
    return (
        <main>
            <Questions />
        </main>
    );
}