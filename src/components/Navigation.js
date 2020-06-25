import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
	.nav {
		height: 85px;
		background-color: white;
		text-align: center;
	}
	.nav-item {
		margin-top: 20px;
	}

	.navbar-brand {
	}

	a,
	.navbar-brand,
	.navbar-nav .nav-link {
		color: black;
		font-weight: bold;
		&:hover {
			color: black;
		}
	}
`;

export const NavigationBar = () => {
	return (
		<Styles>
			<Nav className='ml-auto justify-content-center'>
				<Nav.Item>
					<Nav.Link>Skills</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link>Resume</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link>Projects</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link>About</Nav.Link>
				</Nav.Item>
			</Nav>
		</Styles>
	);
};
