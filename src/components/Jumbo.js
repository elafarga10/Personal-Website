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
		z-index: -2;
		margin-top: 0px;
		margin-bottom: 0px;
	}

	.icons {
		text-align: center;
	}
	.icon {
		font-size: 25px;
		margin-left: 15px;
		text-align: center;
	}
	.icon:hover {
		color: black;
	}
	.overlay {
		background-color: #000;
		opacity: 0.6;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		z-index: -1;
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
							<div className='icons'>
								<FontAwesomeIcon
									className='icon'
									icon={['fab', 'github']}
								/>

								<FontAwesomeIcon className='icon' icon={['fab', 'linkedin']} />
								<FontAwesomeIcon className='icon' icon={['fab', 'google']} />
							</div>
						</div>
					</div>
				</Container>
			</Jumbotron>
		</Styles>
	);
};
