// import Home from "./Pages/Home";

import styled from "styled-components";
import Cart from "./Pages/Cart";
import { mobileXS } from "./responsive";
// import Login from "./Pages/Login";
// import Register from "./Pages/Register";

// import Product from "./Pages/Product";

// import ProductList from "./Pages/ProductList";
const Container = styled.div`
	${mobileXS({ zoom: "75%" })}
`;

const App = () => {
	// return <Home />;
	// return <ProductList />;
	// return <Product />;
	// return <Register />;
	// return <Login />;
	return (
		<Container>
			<Cart />
		</Container>
	);
};

export default App;
