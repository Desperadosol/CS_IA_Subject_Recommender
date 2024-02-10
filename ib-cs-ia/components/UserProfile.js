/*
 * This file contains two React components: UserProfile and Buttons.
 *
 * UserProfile is a functional component that takes two props: user and showButton.
 * It returns a card that displays the user's profile picture, display name, and email.
 * The card also includes a Buttons component.
 * The user's profile picture is displayed using the Image component from Next.js.
 * The showButton prop determines whether the Update Predictions button is enabled.
 *
 * Buttons is a functional component that takes two props: user and showButton.
 * It returns a div that contains an Update Predictions button.
 * When the button is clicked, it calls the updateUserRecommendations function with the user's uid.
 * The button is disabled if the showButton prop is false.
 */
import Image from "next/image";
import { updateUserRecommendations } from "@/lib/client";

export default function UserProfile({ user, showButton }) {
  return (
    <div className="container pt-5">
      <div className="card bg-dark text-white ">
        <div
          className="card-header"
          style={{ borderBottom: "1px solid white" }}
        >
          <h3>User Profile</h3>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-4">
              <Image
                src={user.photoURL}
                alt="user profile"
                className="img-fluid rounded-circle"
                width={150}
                height={150}
              />
            </div>
            <div className="col-md-8">
              <h5 className="card-title">{user.displayName}</h5>
              <p className="card-text">Email: {user.email}</p>
              <Buttons user={user} showButton={showButton} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Buttons({ user, showButton }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-auto p-0">
          <button
            className="btn btn-light btn-lg"
            disabled={!showButton}
            onClick={() => updateUserRecommendations(user.uid)}
          >
            Update Predictions
          </button>
        </div>
      </div>
    </div>
  );
}
