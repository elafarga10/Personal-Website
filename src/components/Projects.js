import React from 'react';
import styled from 'styled-components';
import { Card, Container, CardDeck, Button } from 'react-bootstrap';
import walker from '../images/walker.jpg';
import food from '../images/food-chat.jpg';
import cv from '../images/List.jpg';
import trivia from '../images/Trivia-Game-Preview.jpg';

let Styles = styled.div`
	div {
		background-color: #2b2b2b;
	}

	.img {
		width: 100%;
		height: 300px;
	}
	.card {
		margin-top: 55px;
		margin-bottom: 55px;
		z-index: 0;
		transition: 0.5s;
	}

	h2 {
		text-align: center;
		padding-top: 55px;
		color: #efefef;
	}
	.overlay {
		display: none;
		background-color: #000;
		opacity: 0.9;
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		z-index: 1;
		text-align: center;
		transition: 0.5s;
	}

	.card:hover {
		.overlay {
			display: block;
		}
	}

	.project-name {
		color: #efefef;
		text-align: center;
		padding-top: 40px;
		opacity: 1;
	}

	.btn {
		margin-top: 25px;
	}

	.website-btn {
		margin-top: 20px;
	}
`;

export const Projects = () => {
	return (
		<Styles>
			<div>
				<Container>
					<h2>Projects</h2>
					<CardDeck>
						<Card>
							<div className='overlay'>
								<h3 className='project-name'>Walker</h3>
								<Button
									className='code-btn'
									variant='dark'
									href='https://github.com/elafarga10/Walker-FrontEnd'
									target='_blank'>
									Go to Code
								</Button>{' '}
								<br />
								<Button
									className='website-btn'
									variant='dark'
									href='https://walker-323.herokuapp.com/'
									target='_blank'>
									Go to Website
								</Button>
							</div>
							<Card.Img className='img' src={walker} />
						</Card>
						<Card>
							<div className='overlay'>
								<h3 className='project-name'>Food-Chat</h3>
								<Button
									className='code-btn'
									variant='dark'
									href='https://github.com/elafarga10/Project-3-Front-End'
									target='_blank'>
									Go to Code
								</Button>{' '}
								<br />
								<Button
									className='website-btn'
									variant='dark'
									href='https://food-chat323.herokuapp.com/'
									target='_blank'>
									Go to Website
								</Button>
							</div>
							<Card.Img className='img' src={food} />
						</Card>
					</CardDeck>
					<CardDeck>
						<Card>
							<div className='overlay'>
								<h3 className='project-name'>CV-Tracker</h3>
								<Button
									className='code-btn'
									variant='dark'
									href='https://github.com/elafarga10/Project-2-CV-Tracker'
									target='_blank'>
									Go to Code
								</Button>{' '}
								<br />
								<Button
									className='website-btn'
									variant='dark'
									href='https://cv-tracker19.herokuapp.com/'
									target='_blank'>
									Go to Website
								</Button>
							</div>
							<Card.Img className='img' src={cv} />
						</Card>
						<Card>
							<div className='overlay'>
								<h3 className='project-name'>Trivia Game</h3>
								<Button
									className='code-btn'
									variant='dark'
									href='https://github.com/elafarga10/Project1-Trivia-Game'
									target='_blank'>
									Go to Code
								</Button>{' '}
								<br />
								<Button
									className='website-btn'
									variant='dark'
									href='https://elafarga10.github.io/Project1-Trivia-Game/'
									target='_blank'>
									Go to Website
								</Button>
							</div>
							<Card.Img className='img' src={trivia} />
						</Card>
					</CardDeck>
				</Container>
			</div>
		</Styles>
	);
};
