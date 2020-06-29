import React from 'react';
import { NavigationBar } from './Navigation';
import { Jumbotron, Container, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import waves from '../images/ocean.jpg';
import styled from 'styled-components';

const Styles = styled.div`
	.nav {
		margin-top: 0px;
	}
	.content {
		text-align: center;
		padding: 225px;
	}
	.jumbo {
		background: url(${waves}) no-repeat fixed bottom;
		background-size: cover;
		color: #efefef;
		height: 800px;
		width: 100%;
		position: relative;
		margin-top: 0px;
		margin-bottom: 0px;
	}

	.icons {
		text-align: center;
	}
	.icon {
		font-size: 30px;
		margin-left: 15px;
		text-align: center;
		z-index: 1;
		transition: 0.5s;
	}

	.icon:hover {
		font-size: 40px;
		color: black;
	}

	a {
		color: inherit;
	}
`;

export const Background = () => {
	return (
		<Styles>
			<Jumbotron fluid className='jumbo'>
				<div className='overlay'></div>
				<Container>
					<div className='text'>
						<div className='content'>
							<h1>I'm Emiliano Lafarga</h1>
							<p>
								I'm a Los Angeles based software engineer. I like to work on the
								frontend and enjoy creating interactive applications for people
								to use!
							</p>
							<a href='https://github.com/elafarga10' target='_blank'>
								<FontAwesomeIcon className='icon' icon={['fab', 'github']} />
							</a>
							<a
								href='https://www.linkedin.com/in/emilianolafarga/'
								target='_blank'>
								<FontAwesomeIcon className='icon' icon={['fab', 'linkedin']} />
							</a>
							<a href='mailto: elafarga10@gmail.com' target='_blank'>
								<FontAwesomeIcon className='icon' icon={['fab', 'google']} />
							</a>
						</div>
					</div>
				</Container>
			</Jumbotron>
		</Styles>
	);
};
