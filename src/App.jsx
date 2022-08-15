import styled from "styled-components";
// import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
// import Login from "./Pages/Login";
import { mobileXS } from "./responsive";
// import Register from "./Pages/Register";

// import Product from "./Pages/Product";

// import ProductList from "./Pages/ProductList";
const Container = styled.div`
	${mobileXS({ zoom: "75%" })}
`;

const App = () => {
	return (
		<Container>
			{/* <Home /> */}
			{/* <ProductList /> */}
			{/* <Product /> */}
			{/* <Register /> */}
			{/* <Login /> */}
			<Cart />
		</Container>
	);
};

export default App;
