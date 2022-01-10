import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer } from 'miragejs'

//Create fake server Migagejs
createServer({
  routes(){
    this.namespace = 'api';


    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'transactions 1',
          amount: 400,
          type: 'outcome',
          category: 'Food',
          date: '08/02/2022'
        },
        {
          id: 2,
          title: 'transactions 2',
          amount: 400,
          type: 'income',
          category: 'Salary',
          date: '02/01/2022'
        }
      ]
    })


    
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

