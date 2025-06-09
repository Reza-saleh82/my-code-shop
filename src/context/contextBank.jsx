import axios from 'axios';
import { createContext, useContext, useState, useEffect } from 'react';

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3005/product")
      .then((result) => {
        setProductsData(Array.isArray(result.data) ? result.data : []);
      })
      .catch((error) => {
        console.error("Error fetching products data:", error);
        setProductsData([]);
      });
  }, []);

  return (
    <ProductContext.Provider
      value={{
        productsData,
        setProductsData,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;

export const useProductContext = () => useContext(ProductContext);