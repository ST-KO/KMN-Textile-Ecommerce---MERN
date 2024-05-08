import { createContext, useEffect, useState } from "react";
import axios from 'axios';

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const serverURL = "http://localhost:4000";
    
    const [token, setToken] = useState("");
    const [productList, setProductList] = useState([]);

    const fetchProductList = async () => {
        const response = await axios.get(`${serverURL}/api/product/list`);
        setProductList(response.data.data);
    };
    
    useEffect(() => {
        async function loadData() {
            fetchProductList();

            // To make token stored in localstorage persistant when component is reloaded
            if(localStorage.getItem('token')){
                setToken(localStorage.getItem("token"));
            }
        }
        loadData();
    }, []);

    const contextValue = {
        productList,
        serverURL,
        setToken,
        token
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
}

export default StoreContextProvider;