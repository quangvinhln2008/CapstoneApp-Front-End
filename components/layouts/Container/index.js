/* eslint-disable react/prop-types */
import React from 'react';

// eslint-disable-next-line react/prop-types
function Container(props) {
	return (
		// eslint-disable-next-line react/jsx-no-comment-textnodes
		<div className="wrap-container">{props.children}</div>
	);
}

export default Container;
