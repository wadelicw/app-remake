import Head from "next/head";
import React from "react";
import AppsRecommend from "../components/Apps-recommend/index.js"


class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {


		}
	}

	render() {


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

						<p>推介</p>


						<AppsRecommend/>

					</div>

				</main>
			</div>
		)
	}

}

export default Home;