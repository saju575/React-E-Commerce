import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../Components/Announcement";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Newsletter from "../Components/Newsletter";
import { mobile, tabletB, tabletC } from "../responsive";

const Container = styled.div`
	${tabletB({ zoom: "95%" })}
`;
const Wrapper = styled.div`
	padding: 50px;
	display: flex;

	${tabletB({ flexDirection: "column", padding: "10px" })}
	${mobile({ flexDirection: "column", padding: "10px" })}
`;
const ImgContainer = styled.div`
	flex: 1;
	${tabletC({ flex: "1.7" })}
`;
const Image = styled.img`
	width: 100%;
	height: 90vh;
	object-fit: cover;
	${tabletC({ flex: "1.3", height: "85vh" })}
	${tabletB({ height: "52vh" })}
	${mobile({ height: "40vh" })}
`;
const InfoContainer = styled.div`
	flex: 1;
	padding: 0px 40px;
	${tabletC({ paddingLeft: "15px", paddingRight: "5px" })}
	${tabletB({ padding: "10px" })}
	${mobile({ padding: "10px" })}
`;
const Desc = styled.p`
	margin: 20px 0;

	${tabletB({ letterSpacing: "1px" })}
`;
const Title = styled.h1`
	font-weight: 200;
`;
const Price = styled.span`
	font-weight: 100;
	font-size: 40px;
`;

const FilterContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 50%;
	margin: 30px 0;
	${tabletB({ width: "100%" })}
	${mobile({ width: "100%" })}
`;
const Filter = styled.div`
	display: flex;
	align-items: center;
`;
const FilterTitle = styled.span`
	font-size: 20px;
	font-weight: 200;
`;
const FilterColor = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background-color: ${(props) => props.color};
	margin: 0 5px;
	cursor: pointer;
`;
const FilterSize = styled.select`
	margin-left: 10px;
	padding: 5px;
`;
const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
	display: flex;
	align-items: center;
	width: 50%;
	justify-content: space-between;
	${tabletB({ width: "100%" })}
	${tabletC({ width: "100%" })}
	${mobile({ width: "100%" })}
`;
const AmountContainer = styled.div`
	display: flex;
	align-items: center;
	font-weight: 700;
`;
const Amount = styled.span`
	width: 30px;
	height: 30px;
	border-radius: 10px;
	border: 1px solid teal;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 5px;
`;
const Button = styled.button`
	text-transform: uppercase;
	color: teal;

	font-weight: 500;
	padding: 15px;
	border: 2px solid palevioletred;
	border-radius: 3px;
	background-color: transparent;
	cursor: pointer;
	transition: all 0.5s ease;
	&:hover {
		background-color: teal;
		color: white;
	}
`;

const Product = () => {
	return (
		<Container>
			<Navbar />
			<Announcement />
			<Wrapper>
				<ImgContainer>
					<Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
				</ImgContainer>
				<InfoContainer>
					<Title>Denim Jumpsuit</Title>
					<Desc>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Rem, saepe tempora repellat a nulla unde quam aliquam
						reprehenderit placeat vel officia ipsam dolores
						excepturi distinctio reiciendis alias eos veritatis nemo
						impedit maiores earum! Quibusdam, omnis?
					</Desc>
					<Price>$ 20</Price>
					<FilterContainer>
						<Filter>
							<FilterTitle>Color</FilterTitle>
							<FilterColor color="black" />
							<FilterColor color="darkblue" />
							<FilterColor color="gray" />
						</Filter>
						<Filter>
							<FilterTitle>Size</FilterTitle>
							<FilterSize>
								<FilterSizeOption>XS</FilterSizeOption>
								<FilterSizeOption>S</FilterSizeOption>
								<FilterSizeOption>M</FilterSizeOption>
								<FilterSizeOption>L</FilterSizeOption>
								<FilterSizeOption>XL</FilterSizeOption>
							</FilterSize>
						</Filter>
					</FilterContainer>
					<AddContainer>
						<AmountContainer>
							<Remove />
							<Amount>1</Amount>
							<Add />
						</AmountContainer>
						<Button>ADD TO CART</Button>
					</AddContainer>
				</InfoContainer>
			</Wrapper>
			<Newsletter />
			<Footer />
		</Container>
	);
};

export default Product;
