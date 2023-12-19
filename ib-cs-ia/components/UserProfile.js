import Image from "next/image";

export default function UserProfile({ userData }) {
  console.log(userData);
  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header">
          <h3>User Profile</h3>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-4">
              <Image
                src={userData.photoURL}
                alt="user profile"
                className="img-fluid rounded-circle"
                width={150}
                height={150}
              />
            </div>
            <div className="col-md-8">
              <h5 className="card-title">{userData.displayName}</h5>
              <p className="card-text">Email: {userData.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
