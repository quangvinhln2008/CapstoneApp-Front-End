import Link from 'next/link';
import React from 'react';
import { Nav, NavItem } from 'reactstrap';
import {
	FaFolderOpen,
	FaServer,
	FaShieldVirus,
	FaPeriscope,
	FaWatchmanMonitoring,
	FaUserAlt,
	FaTh,
	FaMoneyBillAlt,
	FaRegFileImage,
	FaTasks,
} from 'react-icons/fa';

function Navigation() {
	return (
		<div className="navigation">
			<div className="nav-group">
				<p>Setting</p>
				<Nav>
					<NavItem>
						<FaFolderOpen />
						<Link href="/configuration">Configuration</Link>
					</NavItem>
					<NavItem>
						<FaUserAlt />
						<Link href="/users">User</Link>
					</NavItem>
				</Nav>
			</div>
			<div className="nav-group">
				<p>Mange</p>
				<Nav>
					<NavItem>
						<FaTh />
						<Link href="/accounts/SignIn">Project</Link>
					</NavItem>
					<NavItem>
						<FaPeriscope />
						<Link href="/droplets">Droplets</Link>
					</NavItem>
					<NavItem>
						<FaRegFileImage />
						<Link href="/images">Images</Link>
					</NavItem>
					<NavItem>
						<FaMoneyBillAlt />
						<Link href="/billing">Bilings</Link>
					</NavItem>
					<NavItem>
						<FaTasks />
						<Link href="/firewalls">Firewalls</Link>
					</NavItem>
					<NavItem>
						<FaWatchmanMonitoring />
						<Link href="/monitoring">Monitoring</Link>
					</NavItem>
				</Nav>
			</div>
			<div className="nav-group">
				<p>List</p>
				<Nav>
					<NavItem>
						<FaShieldVirus />
						<Link href="/regions">Regions</Link>
					</NavItem>
					<NavItem>
						<FaServer />
						<Link href="/sizes">Sizes</Link>
					</NavItem>
				</Nav>
			</div>
		</div>
	);
}

export default Navigation;
