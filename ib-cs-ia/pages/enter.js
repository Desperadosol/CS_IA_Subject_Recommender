import { auth, firestore, googleAuthProvider } from '../lib/firebase';
import { useEffect, useState, useCallback, useContext } from 'react';
import { UserContext } from "@/lib/context";
import debounce from 'lodash.debounce';
import * as template from '@/templates/userTemplate'
import SignUpSection from '@/components/SignUpSection';
import { useRouter } from 'next/router';

export default function Enter(props) {
    const { user, username } = useContext(UserContext);

    return (
        <main>
            {user ? 
                !username ? <UsernameForm /> : <Successful /> 
                : 
                <SignUpSection>
                    <SignInButton />
                </SignUpSection>
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
        <div className='mt-3 d-flex align-items-center'>
          <button className='btn btn-outline-primary d-flex align-items-center' onClick={signInWithGoogle}>
            Sign in with Google
          </button>
          <img src='/google.png' alt="Google" style={{ maxWidth: '32px', maxHeight: '32px' }} />
        </div>
    );
}

//sign-out button
function Successful() {
    return (
        <section className="d-flex justify-content-center align-items-center vh-100" style={{backgroundColor: "var(--primary)"}}>
            <div className="card" style={{width: "24rem", height: "12rem"}}>
                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                    <h2 className="card-title mb-3">You're signed in</h2>
                    <a href="/" className="fs-5 link-underline-dark link-offset-1 link-underline-opacity-0 link-underline-opacity-100-hover" style={{color: "black"}}>Go to the starting page&rarr;</a>
                </div>
            </div>
        </section>
    ); 
}

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