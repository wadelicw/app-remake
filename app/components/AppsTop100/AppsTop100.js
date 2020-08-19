import React from "react";
import Star from "react-star-ratings";

class AppsTop100 extends React.Component {
    render() {
        const iconUrl = this.props.icon;
        return (
            <div className="apps-top100__box">
                <p>{this.props.number}</p>
                <img src={iconUrl}></img>
                <ul>
                    <li>{this.props.name}</li>
                    <li>{this.props.genre}</li>
                    <li>
                        <Star
                            rating={this.props.rating}
                            starRatedColor="orange"
                            numberOfStars={5}
                            starDimension="10px"
                            starSpacing="1px"
                        />
                    </li>
                    <li>({this.props.counts})</li>
                </ul>
            </div>
        );
    }
}

export default AppsTop100;