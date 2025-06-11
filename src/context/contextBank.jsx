import axios from 'axios';
import { createContext, useContext, useState, useEffect } from 'react';

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [productsData, setProductsData] = useState([]);


  useEffect(() => {
    const getData = async()=>{
    fetch('http://localhost:3005/results')
            .then(res=>res.json())
            .then(json=>setProductsData(json))
    }
    getData() 
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