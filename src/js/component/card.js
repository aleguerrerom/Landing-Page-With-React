import React from "react";
import ReactDOM from "react-dom";
import rigoImage from "../../img/rigo-baby.jpg";
import PropType from "prop-types";

export const Card = props => {
	return (
		<div className="col-md-3">
			<div className="card">
				<img
					className="card-img-top w-100"
					src={props.image}
					alt="Card image cap"
				/>
				<div className="card-body">
					<h5 className="card-title">{props.title}</h5>
					<p className="card-text">{props.description}</p>
					<a href="#" className="btn btn-primary">
						{props.buttonLabel}
					</a>
				</div>
			</div>
		</div>
	);
};
Card.propTypes = {
	title: PropType.string,
	description: PropType.string,
	buttonLabel: PropType.string,
	image: PropType.string
};
