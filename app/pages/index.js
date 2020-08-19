import Head from "next/head";
import React from "react";
import { BoxLoading } from 'react-loadingg';
import api from "../api/index.js"
import AppsTop100 from "../components/Apps-top100/index.js"
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

		this.inputChangeHandler = this.inputChangeHandler.bind(this);

	}

	async componentDidMount() {
		try {

			const [topAppsData, grossingAppsData] = await Promise.all([api.getTopApps(), api.getGrossingApps()]);

			this.setState({
				isLoading: false,
				loaded: true,
				topApps: topAppsData.feed.results,
				grossingApps: grossingAppsData.feed.results
			});


		} catch (e) {
			console.error(e);
			this.setState({
				isLoading: false,
				error: true
			});
		}

	}

	inputChangeHandler(event) {
		this.setState({ input: event.target.value });
	}


	render() {

		let { isLoading, loaded, error, topApps, grossingApps, input } = this.state;

		if (input.trim() != "") {
			var pattern = new RegExp(input)

			topApps = topApps.filter(item => {
				return (item.name.toLowerCase()).match(pattern);
			});
			

			grossingApps = grossingApps.filter(item => {
				return (item.name.toLowerCase()).match(pattern);
			});
		}

		return (
			<div>
				<Head>
					<title>App Store listing</title>
					{/* <link rel="icon" href="/favicon.ico" /> */}
				</Head>

				{
					isLoading && <BoxLoading />
				}


				<main className="main-container">
					<div className="input-bar__box">
						<input
							type="text"
							placeholder="&#x1F50D; 搜尋"
							value={this.state.input}
							onChange={this.inputChangeHandler}
						/>
						{console.log(this.state.input)}
					</div>

					<div className="scroll-horizontal">
						{
							loaded && <p>推介</p>
						}

						{
							grossingApps.map((cur, index) => {
								return (
									<AppsRecommend
										key={index}
										icon={cur.artworkUrl100}
										name={cur.name}
										genre={cur.genres[0].name}
									/>
								)
							})
						}
					</div>

					<div className="scroll-vertical">

						{
							topApps.map((cur, index) => {
								return (
									<AppsTop100
										key={index}
										number={index + 1}
										icon={cur.artworkUrl100}
										name={cur.name}
										genre={cur.genres[0].name}
										rating={cur.rating.usersRating}
										counts={cur.rating.countOfRating}
									/>
								)
							})
						}


					</div>

				</main>
			</div>
		)
	}

}

export default Home;