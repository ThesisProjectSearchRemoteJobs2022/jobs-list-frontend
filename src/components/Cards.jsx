import React from "react";

const Cards = ({ info, indice }) => {
	// const { image, title, description } = props;
	const {  image, company, description } = info;
	return (
		<>
			<div className="card" style={{ width: "18rem" }}>
				{/* <img src={image} className="card-img-top" alt="..." /> */}
				<div className="card-body">
					<h5 className="card-title">{company}</h5>
					<p className="card-text">{description}</p>
					<a href="#" className="btn btn-primary">
						Ir
					</a>
				</div>
			</div>
		</>
	);
};

export default Cards;
