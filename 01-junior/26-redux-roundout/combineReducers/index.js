// //import {createStore} from 'redux';
// const {createStore} = require('redux');

// //---action types---
// const ADD_PRODUCT = 'ADD_PRODUCT';
// const ADD_PUPPIES = 'ADD_PUPPIES';


// //---action creators---
// const addProduct = (product) => ({
// 	type: ADD_PRODUCT,
// 	product
// });
// const addPuppies = (puppy) => ({
// 	type: ADD_PUPPIES,
// 	puppy
// });

// //---reducer---
// let initialState = {
// 	products: [],
// 	puppies: []
// };
// const reducer = (state = initialState, action) => {
// 	switch (action.type) {
// 		case ADD_PRODUCT:
// 			return {
// 				products: [...state.products, action.product],
// 				puppies: state.puppies
// 			};
// 		case ADD_PUPPIES:
// 			return {
// 				products: state.products,
// 				puppies: [...state.puppies, action.puppy]
// 			};
// 		default:
// 			return state;
// 	}
// };

// const store = createStore(reducer);

// console.log('---initial---');
// console.log(store.getState());

// store.dispatch(addProduct({id: 1, name: 'nail polish'}));
// store.dispatch(addProduct({id: 2, name: 'ice cream'}));
// console.log('---added products---');
// console.log(store.getState());

// store.dispatch(addPuppies({id: 1, name: 'Cody'}));
// console.log('---added puppies---');
// console.log(store.getState());









//import {createStore} from 'redux';
const {createStore, combineReducers} = require('redux');

/*
 * FILE: PRODUCTS.JS ----------------------------------------------
 */
//export: action creators, reducer
const ADD_PRODUCT = 'ADD_PRODUCT';
const addProduct = (product) => ({
	type: ADD_PRODUCT,
	product
});

//---reducer---
let initialProductState = [];
const productReducer = (state = initialProductState, action) => {
	switch (action.type) {
		case ADD_PRODUCT:
			return [...state, action.product];
		default:
			return state;
	}
};


/*
 * FILE: PUPPIES.JS ----------------------------------------------
 */
//export: action creators, reducer
const ADD_PUPPIES = 'ADD_PUPPIES';
const addPuppies = (puppy) => ({
	type: ADD_PUPPIES,
	puppy
});

//---reducer---
let initialPuppyState = [];
const puppyReducer = (state = initialPuppyState, action) => {
	switch (action.type) {
		case ADD_PUPPIES:
			return [...state, action.puppy];
		default:
			return state;
	}
};

/*
 * FILE: INDEX.JS --------------------------------------------------
 */
//import {productReducer, addProduct} from './products';
const megaReducer = combineReducers({
	products: productReducer,
	puppies: puppyReducer
});
const store = createStore(megaReducer);





console.log('---initial---');
console.log(store.getState());

store.dispatch(addProduct({id: 1, name: 'nail polish'}));
store.dispatch(addProduct({id: 2, name: 'ice cream'}));
console.log('---added products---');
console.log(store.getState());

store.dispatch(addPuppies({id: 1, name: 'Cody'}));
console.log('---added puppies---');
console.log(store.getState());
