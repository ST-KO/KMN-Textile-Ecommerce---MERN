import { createContext, useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    const serverURL = "http://localhost:4000";
    
    const [token, setToken] = useState("");

    const contextValue = {
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