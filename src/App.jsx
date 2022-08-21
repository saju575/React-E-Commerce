import { Navigate, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { mobileXS } from "./responsive";

import Product from "./Pages/Product";

import { useSelector } from "react-redux";
import ProductList from "./Pages/ProductList";
import Success from "./Pages/Success";
const Container = styled.div`
	${mobileXS({ zoom: "75%" })}
`;
//path
const HOME_PATH = "/";
const PRODUCTS_PATH = "/products/:category";
const PRODUCT_PATH = "/product/:id";
const CART_PATH = "/cart";
const REGISTER_PATH = "/register";
const LOGIN_PATH = "/login";
const SUCCESS_PATH = "/success";

const App = () => {
	const user = useSelector((state) => state.user.currentUser);
	return (
		<Container>
			<Routes>
				<Route path={HOME_PATH} element={<Home />} />
				<Route path={PRODUCTS_PATH} element={<ProductList />} />
				<Route path={PRODUCT_PATH} element={<Product />} />
				<Route path={CART_PATH} element={<Cart />} />
				<Route path={SUCCESS_PATH} element={<Success />} />
				<Route
					path={REGISTER_PATH}
					element={user ? <Navigate to="/" /> : <Register />}
				/>
				<Route
					path={LOGIN_PATH}
					element={user ? <Navigate to="/" /> : <Login />}
				/>
			</Routes>
		</Container>
	);
};

export default App;
