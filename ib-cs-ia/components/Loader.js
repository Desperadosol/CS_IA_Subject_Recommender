/*
 * This file contains a single React component: Loader.
 *
 * Loader is a functional component that takes one prop: show.
 * It returns a div that covers the entire viewport and contains a loading icon.
 * The div is only displayed if the show prop is true.
 * The loading icon is represented by a div with a custom class.
 */
export default function Loader({show}) {
    return (
        <>
        {show ?
            <div className="d-flex justify-content-center align-items-center vh-100 vw-100 bg-white position-fixed" style={{zIndex: "9999", top: 0}}>
                <div className="custom-loader-icon"></div>
            </div>
            :
            null}
        </>
    );
}