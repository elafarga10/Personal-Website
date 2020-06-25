import React from 'react';
import styled from 'styled-components';
import { Image } from 'react-bootstrap';
import boy from '../images/man-wearing-white-crew-neck-long-sleeved-top-3474629 (1).jpg';

const Styles = styled.div`
	.info-wrapper {
        display: flex;
        justify-content: center;
		color: #efefef;
		background-color: #2b2b2b;
		margin-top: 0px;
		padding-top: 0px;
		height: 500px;
	}

	.image {
		margin-top: 80px;
		margin-left: 235px;
		margin-right: 0px;
		width: 150px;
		height: 150px;
	}

	.info {
        margin-left: 50px;
        margin-right: 500px;
	}
	.contact-title {
		margin-top: 45px;
		font-size: 28px;
		margin-bottom: 25px;
	}
	.about-title {
		font-size: 28px;
		padding-top: 50px;
		margin-bottom: 25px;
	}

	.info-content {
		font-size: 16px;
	}
`;

export const About = () => {
	return (
		<Styles>
			<div className='info-wrapper'>
				<Image className='image' src={boy} rounded />
				<div className='info'>
					<h1 className='about-title'>About Me</h1>
					<p className='info-content'>
						I am an athlete at heart, with an entrepreneurial spirit, a knack
						for frontend development, and a passion for coding. After going to
						community college for a year I found that going to a traditional
						four year school was not for me. I attended a coding boot camp and
						quickly fell in love with the field. I am constantly learning and my
						curiosity keeps me on a constant path towards new discovery. I enjoy
						using frontend frameworks such as React and Angular and I am most
						proficient at Javascript.
					</p>
					<h2 className='contact-title'>Contact Information</h2>
					<p className='info-content'>Los Angeles, CA</p>
					<p>(562)328-4190</p>
					<p>elafarga10@gmail.com</p>
				</div>
			</div>
		</Styles>
	);
};
