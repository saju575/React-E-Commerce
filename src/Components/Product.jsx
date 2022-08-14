import {
	FavoriteBorderOutlined,
	SearchOutlined,
	ShoppingCartOutlined,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Info = styled.div`
	opacity: 0;
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	background: rgba(0, 0, 0, 0.2);
	z-index: 3;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.8s ease;
	coursor: pointer;
`;
const MainContainer = styled.div`
	flex: 1;
	min-width: 286px;
	height: 405px;
	display: flex;
	flex-direction: column;

	// align-items: center;
	justify-content: center;
	margin: 5px;
`;
const Image = styled.img`
	height: 75%;
	z-index: 2;
	transition: all 0.5s ease;
`;
const Container = styled.div`
	background-color: #f5fbfd;
	// margin: 5px;
	// min-width: 280px;
	width: 100%;
	height: 350px;
	display: flex;
	align-items: center;
	justify-content: center;

	position: relative;

	&:hover ${Info} {
		opacity: 1;
	}
	&: hover ${Image} {
		transform: scale(1.2);
	}
`;
const Circle = styled.div`
	width: 200px;
	height: 200px;
	border-radius: 50%;
	background: white;
	position: absolute;
`;

const Icon = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background: white;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 10px;
	transition: all 0.5s ease;

	&:hover {
		background: #e9f5f5;
		transform: scale(1.1);
	}
`;
const Title = styled.h4`
	text-transform: capitalize;
	margin-bottom: 10px;
	margin-top: 3px;
`;
const Price = styled.span``;
const Product = ({ item }) => {
	return (
		<MainContainer>
			<Container>
				<Circle />
				<Image src={item.img} />
				<Info>
					<Icon>
						<ShoppingCartOutlined />
					</Icon>
					<Icon>
						<SearchOutlined />
					</Icon>
					<Icon>
						<FavoriteBorderOutlined />
					</Icon>
				</Info>
			</Container>
			<Title>t-shirt</Title>
			<Price>$15.0</Price>
		</MainContainer>
	);
};

export default Product;
