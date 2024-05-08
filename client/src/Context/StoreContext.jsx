import { createContext, useEffect, useState } from "react";
import axios from 'axios';

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const serverURL = "http://localhost:4000";
    
    const [token, setToken] = useState("");
    const [productList, setProductList] = useState([]);
    const [cartItems, setCartItems] = useState({});

    const fetchProductList = async () => {
        const response = await axios.get(`${serverURL}/api/product/list`);
        setProductList(response.data.data);
    };

    const addToCart = async (itemId) => {
        if(!cartItems[itemId]){
            setCartItems(prevCartData => (
                {
                    ...prevCartData,
                    [itemId]: 1
                }
            ));
        } else {
            setCartItems(prevCartData => (
                {
                    ...prevCartData,
                    [itemId]: prevCartData[itemId] + 1
                }
            ));
        }

        if(token){
            await axios.put(`${serverURL}/api/cart/add`, {itemId}, {headers: {token}});
        }
    };

    const removeFromCart = async (itemId) => {
        setCartItems(prevCartData => (
            {
                ...prevCartData,
                [itemId]: prevCartData[itemId] - 1
            }
        ));

        if(token) {
            await axios.put(`${serverURL}/api/cart/remove`, {itemId}, {headers: {token}});
        }
    };

    const loadCartData = async (token) => {
        try {
            const response = await axios.get(`${serverURL}/api/cart/get`,{headers: {token}});

            if(response.data.success){
                setCartItems(prevCartItems => ({
                    ...prevCartItems,
                    ...response.data.cartData
                }));

            }

        } catch (error) {
            console.log(error);
        }
    }

    const getTotalAmount = () => {
        let totalAmount = 0;
        let itemInfo;
        let itemPrice;

        for(const item in cartItems){
            if(cartItems[item] > 0){
                itemInfo = productList.find(product => product._id = item);
                itemPrice = itemInfo.price;
                totalAmount += cartItems[item] * itemPrice;
            }
        }
        return totalAmount
    };
    
    useEffect(() => {
        async function loadData() {
            fetchProductList();

            // To make token stored in localstorage persistant when component is reloaded
            if(localStorage.getItem('token')){
                setToken(localStorage.getItem("token"));

                await loadCartData(localStorage.getItem("token"));
 
            }
        }
        loadData();

    }, []);

    const contextValue = {
        productList,
        serverURL,
        setToken,
        token,
        addToCart,
        removeFromCart,
        cartItems,
        getTotalAmount
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
}

export default StoreContextProvider;