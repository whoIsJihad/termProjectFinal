import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./routes/Home";
import Product from "./routes/Product";
import Category from "./routes/Category";
import { EcomContextProvider } from "./context/ecomContext";

const App = () => (
  <EcomContextProvider>


    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Product" element={<Product />} />
          <Route exact path="/Category" element={<Category />} />
        </Routes>
      </Router>
    </div>

    
  </EcomContextProvider>
);

export default App;
