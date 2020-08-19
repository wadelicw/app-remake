import React from "react";

class AppsRecommend extends React.Component {
    render() {
        const iconUrl = this.props.icon;
        return (
            <div className="apps-recommend__box">
                <img src={iconUrl}></img>
                <ul>
                    <li>{this.props.name}</li>
                    <li>{this.props.genre}</li>
                </ul>
            </div>
        );
    }
}

export default AppsRecommend;