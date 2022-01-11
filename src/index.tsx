import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer, Model } from 'miragejs'

//Create fake server Migagejs
createServer({
  models: {
    transaction: Model,
  },


  seeds(server) {
    server.db.loadData({
      transactions:[
        {
          id: 1,
          title: 'Freelance',
          type: 'income',
          category: 'Dev',
          amount: 400,
          createAt: new Date('2022-02-01 08:00:00') 
        },
        {
          id: 2,
          title: 'Alugel',
          type: 'outcome',
          category: 'Movel',
          amount: 1000,
          createAt: new Date('2022-01-10 09:00:00') 
        }
      ], 
     })
  },


  routes(){
    this.namespace = 'api';


    this.get('/transactions', () => {
      return this.schema.all('transaction');
    })

    this.post('/transactions', (schema, request)=>{
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data)
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

