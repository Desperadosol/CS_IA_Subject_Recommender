import { UserContext } from "@/lib/context";
import { useContext } from 'react';
import Questions from "@/components/Questions";

export default function Survey() {
    return (
        <main className="vh-100 d-flex flex-column justify-content-center align-items-center p-2">
            <Questions />
            <style jsx>{`
                main {
                    background-color: var(--primary);
                }
            `}</style>
        </main>
    );
}