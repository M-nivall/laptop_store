import React, { useEffect, useState, useContext } from 'react';
import Banner from '../components/Banner';
import Products from '../components/Products';
import { useLoaderData } from 'react-router-dom';
import { CategoryContext } from '../components/CategoryContext';

const Home = () => {
  const data = useLoaderData();
  const [products, setProducts] = useState([]);
  const { selectedCategory } = useContext(CategoryContext); // 👈 use context

  useEffect(() => {
    setProducts(data);
  }, [data]);

  const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : products;

  return (
    <div>
      <Banner />
      <Products products={filteredProducts} />
    </div>
  );
};

export default Home;
