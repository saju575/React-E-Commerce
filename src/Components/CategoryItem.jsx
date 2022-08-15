import React from "react";
import styled from "styled-components";
import { mobile, tablet } from "../responsive";

const Container = styled.div`
	flex: 1;
	margin: 3px;
	position: relative;
`;
const Image = styled.img`
	width: 100%;
	height: 70%;
	object-fit: cover;
	${tablet({ height: "50vh" })}
	${mobile({ height: "30vh" })}
`;
const Info = styled.div`
	position: absolute;
	width: 100%;
	height: 70%;
	flex-direction: column;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
`;
const Title = styled.h1`
	text-transform: uppercase;
	color: white;
	margin-bottom: 20px;
	${mobile({ fontSize: "24px" })}
`;
const Button = styled.button`
	border: none;
	padding: 10px;
	background: white;
	font-weight: 600;
	color: gray;
	cursor: pointer;
	${mobile({ fontSize: "11px", padding: "7px" })}
`;

const CategoryItem = ({ item }) => {
	return (
		<Container>
			<Image src={item.img} />
			<Info>
				<Title>{item.title}</Title>
				<Button>SHOP NOW</Button>
			</Info>
		</Container>
	);
};

export default CategoryItem;
