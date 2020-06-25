import React from 'react';
import { Card, CardDeck, Container, ListGroup } from 'react-bootstrap';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

let Styles = styled.div`
	.card {
		margin-top: 80px;
		height: 450px;
		width: 150px;
		margin-bottom: 80px;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    
    h2 {
        text-align: center;
        margin-top: 55px;
    }

	.title {
		text-align: center;
		padding-top: 35px;
	}

	.body {
		padding-top: 0px;
		margin-top: 0px;
		text-align: center;
	}

	.card2 {
		margin-left: 50px;
		width: 150px;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	}

	.card1 {
		margin-right: 50px;
		width: 120px;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	}

	.card-deck {
		text-align: center;
	}
`;

export const Skills = () => {
	return (
		<Styles>
			<div>
				<Container>
                    <h2>Developer Skills</h2>
					<CardDeck>
						<Card className='card1'>
							<Card.Title className='title'>Front End</Card.Title>
							<Card.Body>
								{' '}
								<Card.Text className='body'>
									<ListGroup>
										<ListGroup.Item>✔️ HTML</ListGroup.Item>
										<ListGroup.Item>✔️ CSS</ListGroup.Item>
										<ListGroup.Item>✔️ Javascript</ListGroup.Item>
										<ListGroup.Item>✔️ React</ListGroup.Item>
										<ListGroup.Item>
											✔️ Bootstrap/React Bootstrap
										</ListGroup.Item>
									</ListGroup>
								</Card.Text>
							</Card.Body>
						</Card>
						<Card className='card2'>
							<Card.Title className='title'>
								<FontAwesomeIcon
									className='icon'
									icon={['fas', 'fa-chevron-right']}
								/>
								Backend
							</Card.Title>
							<Card.Body>
								<Card.Text className='body'>
									<ListGroup>
										<ListGroup.Item>✔️  Express</ListGroup.Item>
										<ListGroup.Item>✔️  Django</ListGroup.Item>
										<ListGroup.Item>✔️  Python</ListGroup.Item>
										<ListGroup.Item>✔️  NoSQL</ListGroup.Item>
										<ListGroup.Item>✔️  PostgreSQL</ListGroup.Item>
										<ListGroup.Item>✔️  Git</ListGroup.Item>
									</ListGroup>
								</Card.Text>
							</Card.Body>
						</Card>
					</CardDeck>
				</Container>
			</div>
		</Styles>
	);
};
