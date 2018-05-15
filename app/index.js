import React from 'react'
import ReactDOM from 'react-dom'
import 'bulma'
import 'font-awesome/css/font-awesome.css'
import './main.scss'
import { Container, Box, Title } from 'bloomer'
import App from './components/App'

import { createStore } from 'redux';
import { Provider } from 'react-redux';

function ble(state=[], action){
	if(action.type === 'ADD'){
		return [
			...state,
			action.payload
		]
	}
	return state;
}

const store = createStore(ble);

store.subscribe(()=>{
	console.log( 'Subscribe: ', store.getState());
});

store.dispatch({type: 'ADD', payload: 'Something'})
store.dispatch({type: 'ADD', payload: 'Something tes'})

ReactDOM.render(

    <Provider store={store}>
		<Container>
			<Title hasTextAlign="centered"> Vocabulary Trainer </Title>
			<Box className="main-wrap">
			  <App />
			</Box>
		</Container>
    </Provider>,
  document.getElementById('root')
);
