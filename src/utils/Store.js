/* eslint-disable react/react-in-jsx-scope */
// import Cookies from 'js-cookie';
import React, { useReducer } from 'react';

const Store = React.createContext();

const initialState = {
	testData: 'Hello Testing',
};

const reducer = (state, action) => {
	switch (action.type) {
		default:
			return state;
	}
};
export const StoreConsumer = Store.Consumer;

export function StoreProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState);
	const value = { state, dispatch };
	return <Store.Provider value={value}>{children}</Store.Provider>;
}

export default Store;
