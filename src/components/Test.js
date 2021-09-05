import React, { useContext } from 'react';
import Store from '../utils/Store';

const Test = () => {
	const { state } = useContext(Store);
	const { testData } = state;
	return (
		<div>
			<h1>{testData}</h1>
		</div>
	);
};

export default Test;
