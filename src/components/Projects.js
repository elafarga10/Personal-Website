import React from 'react';
import styled from 'styled-components';
import { Image, Card, Container, CardDeck } from 'react-bootstrap';
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
	}

	h2 {
		text-align: center;
		padding-top: 55px;
		color: #efefef;
	}
	.overlay {
		display: none;
		background-color: #000;
		opacity: 0.6;
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		z-index: 1;
	}

	.card:hover {
		.overlay {
			display: block;
		}
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
							<div className='overlay'></div>
							<Card.Img className='img' src={walker} />
						</Card>
						<Card>
							<div className='overlay'></div>
							<Card.Img className='img' src={food} />
						</Card>
					</CardDeck>
					<CardDeck>
						<Card>
							<div className='overlay'></div>
							<Card.Img className='img' src={cv} />
						</Card>
						<Card>
							<div className='overlay'></div>
							<Card.Img className='img' src={trivia} />
						</Card>
					</CardDeck>
				</Container>
			</div>
		</Styles>
	);
};
