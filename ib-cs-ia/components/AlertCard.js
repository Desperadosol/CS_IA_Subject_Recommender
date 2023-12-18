export default function AlertCard({ children }) {
    return (
    <div className='d-flex justify-content-center align-items-center vh-100 px-2' style={{backgroundColor: "var(--primary)"}}>
        <div className="card" style={{width: "24rem", height: "12rem"}}>
          <div className="card-body d-flex flex-column justify-content-between">
              {children}
          </div>
        </div>
    </div>
    )
}