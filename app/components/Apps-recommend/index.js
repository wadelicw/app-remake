const AppsRecommend = props => {

    const iconUrl =  props.icon;

    return (
        <div className="apps-recommend__box">
            <img src={iconUrl}></img>
            <ul>
                <li>{props.name}</li>
                <li>{props.genre}</li>
            </ul>
        </div>
    );
}

export default AppsRecommend;