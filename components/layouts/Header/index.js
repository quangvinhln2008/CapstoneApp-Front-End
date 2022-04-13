import Link from 'next/link';
import React from 'react';

function Header() {
	return (
		<div className="header">
			<div className="header__title">
				<h1>CAPSTONE APP</h1>
			</div>
			<div className="header__link">
				<Link href="#">
					<a>Wellcome, Kenshin</a>
				</Link>
				<a>Log out</a>
			</div>
		</div>
	);
}

export default Header;
