import UserProfile from "@/components/UserProfile";
import Subjects from "@/components/Subjects";
import { getUserWithUsername } from "@/lib/firestore_interface";
import AuthCheck from "@/components/AuthCheck";

export async function getServerSideProps({ query }) {
    const { username } = query;
    const userDoc = await getUserWithUsername(username);

    // If no user, short circuit to 404 page
    if (!userDoc) {
        return {
            notFound: true,
        };
    }

    let userData = userDoc.data();
    return {
        props: { userData }, // will be passed to the page component as props
    };

}
export default function UserProfilePage({ userData }) {
    return (
        <AuthCheck>
            <main>
                <UserProfile userData={userData}/>
                <Subjects subjects={userData.sample}/>
            </main>
        </AuthCheck>
    );
}