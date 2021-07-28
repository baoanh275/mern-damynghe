import React from 'react';
import PrivateRoute from './component/routes/PrivateRoute';
import {BrowserRouter as Router } from 'react-router-dom'
import {DataProvider} from './GlobalState'
import Footer from './component/footer/Footer'
import Header  from './component/header/Header'
function App() {
  return (
    <DataProvider>
      <Router>
        <Header/>
        <PrivateRoute/>
        <Footer/>
        
      </Router>
    </DataProvider>
  );
}

export default App;
