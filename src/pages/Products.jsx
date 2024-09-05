import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import CategoryChip from '../components/CategoryChip';
import PriceFilter from '../components/PriceFilter';

function Products() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [chosenCategory, setChosenCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 1000]);

  
  useEffect(() => {
    const url = chosenCategory === 'All'
      ? 'https://dummyjson.com/products'
      : `https://dummyjson.com/products/category/${chosenCategory}`;

    axios.get(url)
      .then((res) => {
        const productsData = res.data.products;
        setProducts(productsData);

        const filtered = productsData.filter(
          (product) => product.price >= priceRange[0] && product.price <= priceRange[1]
        );
        setFilteredProducts(filtered);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [chosenCategory, priceRange]); 
  useEffect(() => {
    axios.get('https://dummyjson.com/products/categories')
      .then((res) => {
        setCategories(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  
  const handlePriceChange = (priceRange) => {
    setPriceRange(priceRange);

  
    const filtered = products.filter(
      (product) => product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="container mx-auto">
      {loading ? (
        <h1 className="text-center text-3xl">Loading....</h1>
      ) : (
        <div>
          <div className="flex gap-3 flex-wrap">
            <CategoryChip
              onClick={() => setChosenCategory("All")}
              isChosen={chosenCategory === "All"}
              category={{ slug: "All", name: "All" }}
            />
            {categories.map((category) => (
              <CategoryChip
                onClick={() => setChosenCategory(category.slug)}
                isChosen={category.slug === chosenCategory}
                category={category}
                key={category.slug}
              />
            ))}
          </div>

          <PriceFilter onPriceChange={handlePriceChange} />

          <div className="flex flex-wrap -m-4 my-4">
            {filteredProducts.map((item) => (
              <ProductCard item={item} key={item.id} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Products;
