import Star from "react-star-ratings"

const AppsTop100 = props => {

    const iconUrl = props.icon;

    return (
        <div className="apps-top100__box">
            <p>{props.number}</p>
            <img src={iconUrl}></img>
            <ul>
                <li>{props.name}</li>
                <li>{props.genre}</li>
                <li>
                    <Star
                        rating={props.rating}
                        starRatedColor="orange"
                        numberOfStars={5}
                        name={props.number}
                        starDimension="10px"
                        starSpacing="1px"
                    />
                </li>
                <li>({props.counts})</li>
            </ul>
        </div>
    );
}

export default AppsTop100;