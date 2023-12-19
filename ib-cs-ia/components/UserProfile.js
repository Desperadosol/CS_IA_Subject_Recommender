import Image from "next/image";
import * as client from '@/lib/client';

export default function UserProfile({ user, showButton }) {
  return (
    <div className="container my-4">
      <div className="card">
        <div className="card-header">
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
              <Buttons user={user} showButton={showButton}/>
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
          <div className="row justify-content-center">
              <div className="col-auto">
                  <button className="btn btn-primary btn-lg" disabled={!showButton} onClick={() => client.updateUserRecommendations(user.uid)}>Predictions</button>
              </div>
          </div>   
      </div>
  );
}
