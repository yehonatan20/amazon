import { createContext, useReducer } from "react";
import PropTypes from 'prop-types';
import storeReducer from "./reducers/storeReducer";

const Store = createContext();

//כל המשתנים הגלובלאים יהיו פה
const initialState = {
    userInfo: localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null
}

const StoreProvider = ({children}) => {
    const [state, dispatch] = useReducer(storeReducer, initialState);
    return (
        <>
            <Store.Provider value={{state, dispatch}}>{children}</Store.Provider>
        </>
    )
}

export {StoreProvider, Store};

StoreProvider.propTypes = {
    children: PropTypes.node
}