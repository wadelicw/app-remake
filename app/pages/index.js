import Head from "next/head";
import React from "react";

import api from "../api/index.js"
import AppsRecommend from "../components/Apps-recommend/index.js"


class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
			loaded: false,
			error: false,
			topApps: [],
			grossingApps: [],
			input: ""
		}
	}

	async componentDidMount() {
		try {

			const [topAppsData, grossingAppsData] = await Promise.all([api.getTopApps(), api.getGrossingApps()]);

			this.setState({
				isLoading: false,
				loaded: true,
				topApps: topAppsData,
				grossingApps: grossingAppsData
			});

			console.log(this.state.topApps);

		} catch (e) {
			console.error(e);
			this.setState({
				isLoading: false,
				error: true
			});
		}

	}


	render() {

		let {loading, loaded, err, topApp, topGross, input} = this.state;

		return (
			<div>
				<Head>
					<title>App Store listing</title>
					{/* <link rel="icon" href="/favicon.ico" /> */}
				</Head>

				<main className="main-container">
					<div className="input-bar__box">
						<input type="text" placeholder="&#x1F50D; 搜尋" />
					</div>

					<div>
						{
							loading && <div> Loading ... </div>
						}
						{
							loaded && console.log(topApp)
						}
						<p>推介</p>


								<AppsRecommend />

							</div>

				</main>
			</div>
		)
	}

}

export default Home;