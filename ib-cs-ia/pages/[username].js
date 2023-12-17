import UserProfile from "@/components/UserProfile";
import Subjects from "@/components/Subjects";
import { getUserWithUsername } from "@/lib/firestore_interface";

export async function getServerSideProps({ query }) {
    const { username } = query;
    const user = await getUserWithUsername(username);

    // If no user, short circuit to 404 page
    if (!user) {
        return {
            notFound: true,
        };
    }

    return {
        props: { user }, // will be passed to the page component as props
    };

}
export default function UserProfilePage({ user }) {
    return (
        <main>
            <UserProfile />
            <Subjects />
        </main>
    );
}