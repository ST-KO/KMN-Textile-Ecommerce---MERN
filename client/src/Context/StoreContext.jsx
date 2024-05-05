import { createContext, useState } from "react";

import product_list  from "../assets/data";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    // const [productList, setProductList] = useState([]);

    const productList = [
        {
          name: "Bright Pink Chate Lone G",
          price: "40,000",
          image: "image/products/p1.JPG",
        },
        {
          name: "Bright Pink Chate Lone G",
          price: "40,000",
          image: "image/products/p2.JPG",
        },
        {
          name: "Bright Pink Chate Lone G",
          price: "40,000",
          image: "image/products/p3.JPG",
        },
        {
          name: "Bright Pink Chate Lone G",
          price: "40,000",
          image: "image/products/p4.JPG",
        },
        {
          name: "Bright Pink Chate Lone G",
          price: "40,000",
          image: "image/products/p5.JPG",
        },
        {
          name: "Bright Pink Chate Lone G",
          price: "40,000",
          image: "image/products/p6.JPG",
        },
        {
          name: "Bright Pink Chate Lone G",
          price: "40,000",
          image: "image/products/p7.JPG",
        },
        {
          name: "Bright Pink Chate Lone G",
          price: "40,000",
          image: "image/products/p8.JPG",
        },
      ];

    const contextValue = {
        productList
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
}

export default StoreContextProvider;