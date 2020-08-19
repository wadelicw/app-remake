const AppsTop100 = props => {

    const iconUrl =  props.icon;

    return (
        <div className="apps-top100__box">
            <p>{props.number}</p>
            <img src={iconUrl}></img>
            <ul>
                <li>{props.name}</li>
                <li>{props.genre}</li>
                <li>star rating</li>
            </ul>
        </div>
    );
}

export default AppsTop100;