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