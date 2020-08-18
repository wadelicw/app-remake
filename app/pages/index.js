import Head from "next/head";
import React from "react";


class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {


		}
	}

	render() {


		return (
			<div className="container-md">
				<Head>
					<title>App Store listing</title>
					{/* <link rel="icon" href="/favicon.ico" /> */}
				</Head>

				<main >
				<button type="button" className="btn btn-outline-danger">Danger</button>
					<div>


					</div>

				</main>
			</div>
		)
	}

}

export default Home;