/*
 * This file contains a single React component: Survey.
 *
 * Survey is a functional component that returns an AuthCheck component that wraps a main element.
 * The main element contains a Questions component and a style element.
 * The Questions component is imported from another file and manages a form for a series of questions.
 * The style element contains CSS for the main element, setting the background color and aligning its contents in the center of the viewport.
 */
import Questions from "@/components/Questions";
import AuthCheck from "@/components/AuthCheck";

export default function Survey() {
    return (
        <AuthCheck>
            <main className="vh-100 d-flex flex-column justify-content-center align-items-center p-2">
                <Questions />
                <style jsx>{`
                    main {
                        background-color: var(--primary);
                    }
                `}</style>
            </main>
        </AuthCheck>
    );
}