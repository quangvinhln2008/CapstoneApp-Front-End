/* eslint-disable react/prop-types */
import React from 'react';

// eslint-disable-next-line react/prop-types
function Layout(props) {
	return (
		// eslint-disable-next-line react/jsx-no-comment-textnodes
		<div>
			<div className="wrap">{props.children}</div>
		</div>
	);
}

export default Layout;
