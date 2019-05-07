import React from 'react';
import { withBookstoreService } from '../hoc';
import './app.css';

const App = ({ bookStoreService }) => {
  console.log(bookStoreService.getBooks());
  return <div>App</div>
};

export default withBookstoreService()(App);
