import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { NavBar } from "./navbar.js";
import { Card } from "./card.js";
import { Jumbotron } from "./jumbotron.js";
//create your first component
export function Home() {
	return (
		<div>
			<NavBar />
			<div className="text-center mt-5">
				<div className="container">
					<div className="row" w-100>
						<Jumbotron />
					</div>
					<div className="row" w-100>
						<Card />
					</div>
				</div>
			</div>
		</div>
	);
}
