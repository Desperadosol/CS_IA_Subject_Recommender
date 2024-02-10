/*
 * This file contains a single React component: Enter.
 * It also contains several helper components: SignInButton, UsernameForm, and UsernameMessage.
 *
 * Enter is a functional component that manages the user's sign-in state.
 * It uses the UserContext to get the current user and username.
 * It returns a main element that contains a SignInButton component if the user is not signed in, a UsernameForm component if the user is signed in but does not have a username, or an AlertCard component if the user is signed in and has a username.
 *
 * SignInButton is a functional component that returns a button for signing in with Google.
 * When the button is clicked, it calls the signInWithGoogle function, which signs in the user with Google using Firebase's signInWithPopup function.
 *
 * UsernameForm is a functional component that manages a form for choosing a username.
 * It maintains state for the form value, whether the username is valid, and a loading state.
 * It uses the UserContext to get the current user and username.
 * It uses the useEffect hook to check the username whenever the form value changes.
 * It provides functions to handle form submission, form value changes, and username checking.
 * When the form is submitted, it creates a batch write to the Firestore database to set the user's document and a document in the usernames collection.
 * It returns a section element that contains the form.
 *
 * UsernameMessage is a functional component that takes several props: username, isValid, and loading.
 * It returns a message based on the username, isValid, and loading props.
 */
import { auth, firestore, googleAuthProvider } from '../lib/firebase';
import { useEffect, useState, useCallback, useContext } from 'react';
import { UserContext } from "@/lib/context";
import debounce from 'lodash.debounce';
import * as template from '@/templates/userTemplate'
import AlertCard from '@/components/AlertCard';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Enter(props) {
    const { user, username } = useContext(UserContext);

    return (
        <main>
            {user ? 
                !username ? <UsernameForm /> 
                : 
                <AlertCard>
                    <div className="card-body d-flex flex-column justify-content-center align-items-center">
                        <h2 className="card-title mb-3">You are signed in</h2>
                        <Link href="/" className="fs-5 link-underline-white link-offset-1" style={{color: "white"}}>Go to the starting page&rarr;</Link>
                    </div>
                </AlertCard> 
                : 
                <AlertCard>
                    <div className='text-center mb-2'>
                        <h5 className="card-title fs-3">Log in to Picker</h5>
                    </div>
                    <SignInButton />
                </AlertCard>
            }
        </main>
    );
}

//sign in with google button
function SignInButton() {
    const signInWithGoogle = async () => {
        await auth.signInWithPopup(googleAuthProvider); 
    };

    return (
        <div className='mt-3 d-flex align-items-center justify-content-center'>
          <button className='btn btn-outline-light d-flex align-items-center' onClick={signInWithGoogle}>
            Continue with Google
            <img src='/google.png' alt="Google" style={{ maxWidth: '32px', maxHeight: '32px', marginLeft: "4px"}} />
          </button>
        </div>
    );
}

//sign-out button


// Username form
function UsernameForm() {
    const [formValue, setFormValue] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [loading, setLoading] = useState(false);

    const { user, username } = useContext(UserContext);

    const router = useRouter();

    useEffect(() => {
        checkUsername(formValue);
    }, [formValue])
    
    const onSubmit = async (e) => {
        e.preventDefault();

        //create refs for both documents
        const userDoc = firestore.doc(`users/${user.uid}`)
        const usernameDoc = firestore.doc(`usernames/${formValue}`)

        // Commit both docs together as a batch write.
        const batch = firestore.batch();
        batch.set(userDoc, { username: formValue,
                             photoURL: user.photoURL,
                             displayName: user.displayName, 
                             email: user.email, 
                             recommendations: template.defaultRecommendations,
                             answers: template.defaultAnswers,
                             subjects: template.defaultSubjects,
                             sample: template.defaultSample,
                             targets: template.defaultTargets });
        batch.set(usernameDoc, { uid: user.uid });

        await batch.commit();
        router.push('/');
    };

    const onChange = (e) => {
        const val = e.target.value.toLowerCase();
        const re = /^(?=[a-zA-Z0-9._]{3,15}$)(?!.*[_.]{2})[^_.].*[^_.]$/;

        if (val.length < 3) {
            setFormValue(val);
            setLoading(false);
            setIsValid(false);
        }

        if (re.test(val)) {
            setFormValue(val);
            setLoading(true);
            setIsValid(false);
        }
    };

    const checkUsername = useCallback(
        debounce( async (username) => {
            if (username.length >= 3) {
                const ref = firestore.doc(`usernames/${username}`);
                const { exists } = await ref.get();
                console.log('Firestore read executed!');
                setIsValid(!exists);
                setLoading(false);
            }
        }, 500),
        []
    );

    return (
        !username && (
            <section className="d-flex justify-content-center align-items-center vh-100" style={{backgroundColor: "var(--primary)"}}>
                <div className="card" style={{width: "24rem"}}>
                    <div className="card-body">
                        <h3 className="card-title mb-3">Choose a username</h3>
                        <form onSubmit={onSubmit} className="d-flex flex-column">
                            <div className="form-group">
                                <label className="mb-3 h5" htmlFor="username">Username</label>
                                <input type="text" className="form-control" id="username" placeholder="username" value={formValue} onChange={onChange} />
                            </div>
                            <UsernameMessage username={formValue} isValid={isValid} loading={loading} />
                            <button type="submit" className="btn btn-primary mt-3" disabled={!isValid}>
                                Choose
                            </button>
                            <h3 className="mt-3">Debug State</h3>
                            <div>
                                <p>Username: {formValue}</p>
                                <p>Loading: {loading.toString()}</p>
                                <p>Username Valid: {isValid.toString()}</p>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        )
    );
}

function UsernameMessage({ username, isValid, loading }) {
    if (loading)  {
        return <p>Checking...</p>
    } else if (isValid) {
        return <p className='text-success'>{username} is available!</p>
    } else if (username && !isValid) {
        return <p className='text-danger'>{username} is already taken!</p>
    } else {
        return <p></p>
    }
}