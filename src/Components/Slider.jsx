import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import styled from "styled-components";

import { sliderItems } from "../data";
import { mobile, tablet } from "../responsive";

const Container = styled.div`
	width: 100%;
	height: calc(100vh - 90px);
	display: flex;
	// background-color: coral;
	position: relative;
	overflow: hidden;

	/* ${tablet({ zoom: "90%" })} */
	${tablet({ height: "60vh", marginBottom: "10px" })}
	${mobile({ display: "none" })}
`;
const Arrow = styled.div`
	width: 50px;
	height: 50px;
	background-color: #fff7f7;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 0;
	bottom: 0;
	left: ${(props) => props.direction === "left" && "10px"};
	right: ${(props) => props.direction === "right" && "10px"};
	margin: auto;
	cursor: pointer;
	opacity: 0.5;
	z-index: 2;
`;

const Wrapper = styled.div`
	height: 100%;
	display: flex;
	transition: all 1.5s ease;
	transform: translateX(${(props) => props.slideIndex * -100}vw);
	${tablet({ alignItems: "center" })}
`;
const Slide = styled.div`
	display: flex;
	align-items: center;
	width: 100vw;
	height: 100vh;
	background-color: #${(props) => props.bg};
	/* ${tablet({ alignItems: "top" })} */
`;
const ImgContainer = styled.div`
	flex: 1;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;
const Image = styled.img`
	height: 80%;
	/* width: 50%; */
	object-fit: cover;
	${tablet({ width: "100%" })}
`;
const InfoContainer = styled.div`
	flex: 1;
	padding: 50px;
	${tablet({ paddingLeft: "13px", paddingRight: "5px" })}
`;
const Title = styled.h1`
	text-transform: uppercase;
	font-size: 70px;
	${tablet({ fontSize: "26px" })}
`;
const Desc = styled.p`
	text-transform: uppercase;
	margin: 50px 0;
	font-size: 20px;
	font-weight: 500;
	letter-spacing: 2px;
	${tablet({ fontSize: "13px", margin: "20px 0" })}
`;
const Button = styled.button`
	text-transform: uppercase;
	color: palevioletred;
	font-size: 1em;
	font-weight: 500;
	padding: 0.25em 1em;
	border: 2px solid palevioletred;
	border-radius: 3px;
	background-color: transparent;
	${tablet({ fontSize: "14px" })}
`;
const Slider = () => {
	const [slideIndex, setSlideIndex] = useState(0);
	const handleClick = (direction) => {
		if (sliderItems) {
			if (direction === "left") {
				setSlideIndex((sIndex) =>
					sIndex > 0 ? sIndex - 1 : sliderItems.length - 1
				);
			} else {
				setSlideIndex((sIndex) =>
					sIndex < sliderItems.length - 1 ? sIndex + 1 : 0
				);
			}
		}
	};
	return (
		<Container>
			<Arrow direction="left" onClick={() => handleClick("left")}>
				<ArrowLeftOutlined />
			</Arrow>
			<Wrapper slideIndex={slideIndex}>
				{sliderItems.map((item) => (
					<Slide key={item.id} bg={item.bg}>
						<ImgContainer>
							<Image src={item.img}></Image>
						</ImgContainer>
						<InfoContainer>
							<Title>{item.title}</Title>
							<Desc>{item.desc}</Desc>
							<Button>shop now</Button>
						</InfoContainer>
					</Slide>
				))}
			</Wrapper>
			<Arrow direction="right" onClick={() => handleClick("right")}>
				<ArrowRightOutlined />
			</Arrow>
		</Container>
	);
};

export default Slider;
