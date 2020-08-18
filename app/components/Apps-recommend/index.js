const AppsRecommend = props => {

    const iconUrl =  "https://is5-ssl.mzstatic.com/image/thumb/Purple114/v4/31/fd/a3/31fda3e4-3e1d-063a-7bd6-7c0376476203/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/200x200bb.png";

    return (
        <div className="apps-recommend__box">
            <img src={iconUrl}></img>
            <ul>
                <li>name</li>
                <li>genre</li>
            </ul>
        </div>
    );
}

export default AppsRecommend;