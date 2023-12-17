export default function SignUpSection({ children }) {
    return (
    <div className='d-flex justify-content-center align-items-center vh-100' style={{backgroundColor: "var(--primary)"}}>
        <div className="card" style={{width: "24rem", height: "12rem"}}>
          <div className="card-body d-flex flex-column justify-content-between">
            <div>
              <h5 className="card-title">Sign Up</h5>
              <p className="card-text">Please sign up using your Google account.</p>
            </div>
            <div className="mb-3">
              {children}
            </div>
          </div>
        </div>
    </div>
    )
}