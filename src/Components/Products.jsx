import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { publicRequest } from "../requestMethod";
import Product from "./Product";

const Container = styled.div`
	padding: 20px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;
const Products = ({ cat, filters, sort }) => {
	const [products, setProducts] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);
	useEffect(() => {
		const getProduct = async () => {
			try {
				const res = await publicRequest.get(
					cat ? `/products?category=${cat}` : "/products/"
				);
				setProducts(res.data);
			} catch (error) {}
		};
		getProduct();
	}, [cat]);

	useEffect(() => {
		cat &&
			setFilteredProducts(
				products.filter((item) =>
					Object.entries(filters).every(([key, value]) =>
						item[key].includes(value.toLowerCase())
					)
				)
			);
	}, [cat, filters, products]);

	useEffect(() => {
		if (sort === "newest") {
			setFilteredProducts((prev) =>
				[...prev].sort((a, b) => a.createdAt - b.createdAt)
			);
		} else if (sort === "asc") {
			setFilteredProducts((prev) =>
				[...prev].sort((a, b) => a.price - b.price)
			);
		} else {
			setFilteredProducts((prev) =>
				[...prev].sort((a, b) => b.price - a.price)
			);
		}
	}, [sort]);
	return (
		<Container>
			{cat
				? filteredProducts.map((item, a) => (
						<Product item={item} key={a} />
				  ))
				: products
						.slice(0, 8)
						.map((item, a) => <Product item={item} key={a} />)}
		</Container>
	);
};

export default Products;
