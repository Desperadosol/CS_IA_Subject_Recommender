export default function Buttons() {
    return (
        <div className="container">
            <div className="row justify-content-between">
                <div className="col-auto">
                    <button className="btn btn-primary btn-lg" onClick={() => client.updateUserRecommendations(user.uid)}>Predictions</button>
                </div>
                <div className="col-auto">
                    <button className="btn btn-primary btn-lg" onClick={() => client.trainModelWithUserChoice(user.uid)}>Train</button>
                </div>
            </div>   
        </div>
    );
}