import React from 'react';

const Project = (props) => {
	const { description } = props;
	return (
		<div className="Project">
			<h3>{description}</h3>
		</div>
	);
};

export default Project;