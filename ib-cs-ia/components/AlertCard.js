/*
 * This file contains a single React component: AlertCard.
 *
 * AlertCard is a functional component that takes one prop: children.
 * It returns a div that is styled to be a centered card with a dark background.
 * The children prop is rendered inside the card body, allowing this component to be used with various content.
 */
export default function AlertCard({ children }) {
    return (
    <div className='d-flex justify-content-center align-items-center vh-100 px-2' style={{backgroundColor: "var(--primary)"}}>
        <div className="card bg-dark" style={{width: "36rem", height: "16rem", borderRadius: "16px"}}>
          <div className="card-body d-flex flex-column justify-content-center text-white">
              {children}
          </div>
        </div>
    </div>
    )
}