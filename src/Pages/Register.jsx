import styled from "styled-components";
import { mobile, tablet, tabletB } from "../responsive";
const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background: linear-gradient(
			rgba(255, 255, 255, 0.5),
			rgba(255, 255, 255, 0.5)
		),
		url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
			center;
	background-size: cover;
	display: flex;
	align-items: center;
	justify-content: center;
`;
const Wrapper = styled.div`
	width: 40%;
	padding: 20px;
	background-color: white;
	${tablet({ width: "60%" })}
	${tabletB({ width: "80%" })}
	${mobile({ width: "76%" })}
`;
const Title = styled.h1`
	font-size: 24px;
	font-weight: 300;
	text-transform: uppercase;
`;
const Form = styled.form`
	display: flex;
	flex-wrap: wrap;
`;
const Input = styled.input`
	flex: 1;
	min-width: 40%;
	margin: 20px 10px 0px 0px;
	padding: 10px;
`;
const Agrement = styled.span`
	font-size: 12px;
	margin: 20px 0px;
`;
const Button = styled.button`
	width: 40%;
	border: none;
	padding: 15px 20px;
	background-color: teal;
	color: white;
	cursor: pointer;
`;

const Register = () => {
	return (
		<Container>
			<Wrapper>
				<Title>CREATE AN ACCOUNT</Title>
				<Form>
					<Input placeholder="Name"></Input>
					<Input placeholder="Last name"></Input>
					<Input placeholder="Username"></Input>
					<Input placeholder="Email"></Input>
					<Input placeholder="Password"></Input>
					<Input placeholder="Confirm password"></Input>
					<Agrement>
						By creating an account, I consent to the processing of
						my personal data in accordance with the{" "}
						<b>PRIVACY POLICY</b>
					</Agrement>
					<Button>CREATE</Button>
				</Form>
			</Wrapper>
		</Container>
	);
};

export default Register;
