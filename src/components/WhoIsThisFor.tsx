import React from "react";

interface Props {}

const WhoIsThisFor = (props: Props) => {
	return (
		<div className='who-is-this-for'>
			<h1>Who This is For</h1>
			<div className='card-container'>
				<div className='card'>
					<p>
						<b>
							<em>Entrepreneurs</em>
						</b>{" "}
						who want to share their story to enhance the brand
					</p>
				</div>
				<div className='card'>
					<p>
						<b>
							<em>Experts</em>
						</b>{" "}
						who want to produce a book with important content that can help others
					</p>
				</div>
				<div className='card'>
					<p>
						<b>
							<em>Aspiring</em>
						</b>{" "}
						authors who want to understand the book process so they don't have a sh***y book
					</p>
				</div>
			</div>
		</div>
	);
};

export default WhoIsThisFor;
