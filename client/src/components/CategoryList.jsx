// CategoryList.js

import React, { useState, useEffect } from "react";
import instance from "../apis/CategoryFinder";
import "./CategoryList.css";

export default function CategoryList() {
  // State to store the fetched categories
  const [categories, setCategories] = useState([]);

  // useEffect to fetch category data when the component mounts
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await instance.get("/");
        console.log("Response from server:", response.data);

        // Assuming the response.data is an object with a 'data' property that contains the array
        setCategories(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    // Call the function to fetch categories
    fetchCategories();
  }, []); // Empty dependency array means the effect runs once after the initial render

  return (
    <div>
      <h2 className="category-heading">Product List</h2>
      <div className="category-container"> 
        {categories.map((category) => (
          <div
            key={category.categoryid}
            className="category-box" 
          >
            <h3>{category.name}</h3>
            <p>{category.description}</p>
            <p>Product ID: {category.productid}</p>
            <p>Product Category: {category.categoryname}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
