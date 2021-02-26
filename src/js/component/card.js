import React from "react";
import ReactDOM from "react-dom";
import rigoImage from "../../img/rigo-baby.jpg";
import PropType from "prop-types";

export const Card = props => {
	return (
		<div className="row">
			<div className="col-3">
				<div className="card" style={{ width: "18rem" }}>
					<img
						className="card-img-top"
						src={rigoImage}
						alt="Card image cap"
					/>
					<div className="card-body">
						<h5 className="card-title">{props.title}</h5>
						<p className="card-text">
							Some quick example text to build on the card title
							and make up the bulk of the cards content.
						</p>
						<a href="#" className="btn btn-primary">
							Go somewhere
						</a>
					</div>
				</div>
			</div>
			<div className="col-3">
				<div className="card" style={{ width: "18rem" }}>
					<img
						className="card-img-top"
						src={rigoImage}
						alt="Card image cap"
					/>
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">
							Some quick example text to build on the card title
							and make up the bulk of the cards content.
						</p>
						<a href="#" className="btn btn-primary">
							Go somewhere
						</a>
					</div>
				</div>
			</div>
			<div className="col-3">
				<div className="card" style={{ width: "18rem" }}>
					<img
						className="card-img-top"
						src={rigoImage}
						alt="Card image cap"
					/>
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">
							Some quick example text to build on the card title
							and make up the bulk of the cards content.
						</p>
						<a href="#" className="btn btn-primary">
							Go somewhere
						</a>
					</div>
				</div>
			</div>
			<div className="col-3">
				<div className="card" style={{ width: "18rem" }}>
					<img
						className="card-img-top"
						src={rigoImage}
						alt="Card image cap"
					/>
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">
							Some quick example text to build on the card title
							and make up the bulk of the cards content.
						</p>
						<a href="#" className="btn btn-primary">
							Go somewhere
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
Card.propTypes = {
	title: PropType.string
};

ReactDOM.render(<Card title="Real Madrid" />, document.querySelector("#app"));
