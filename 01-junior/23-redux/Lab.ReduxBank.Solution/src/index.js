import { createStore, applyMiddleware } from "redux";
import reduxLogger from 'redux-logger';

//type constants
const DEPOSIT = 'DEPOSIT';
const WITHDRAW = 'WITHDRAW';

//action creators

const deposit = amount => {
  return {
    type: DEPOSIT,
    amount
  }
}

const withdraw = amount => ({type: WITHDRAW, amount })

const deposit5 = document.getElementById("deposit5");
const deposit25 = document.getElementById("deposit25");
const withdraw5 = document.getElementById("withdraw5");
const withdraw25 = document.getElementById("withdraw25");

deposit5.onclick = () => store.dispatch(deposit(5))
deposit25.onclick = () => store.dispatch(deposit(25))
withdraw5.onclick = () => store.dispatch(withdraw(5))
withdraw25.onclick = () => store.dispatch(withdraw(25));



const store = createStore((state = { balance: 0 }, action) => {
  switch (action.type) {
    case DEPOSIT:
      return { balance: state.balance + action.amount }
    case WITHDRAW:
      return { balance: state.balance - action.amount }
    default:
      return state;
  }
}, applyMiddleware(reduxLogger))

// const someMiddleware = store => next => action => {
//   // your code here
//   return next(action);
// }

// function someMiddleware (store) {
//   return function(next) {
//     return function(action) {
//       console.log('Type: ', action.type);
//       next(action);
//     }
//   }
// }


const balanceField = document.getElementById("balance");
store.subscribe(() => {
  console.log("The store state changed. Here is the new state:", store.getState());
  balanceField.innerText = `$ ${store.getState().balance}`
})
