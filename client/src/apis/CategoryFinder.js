import axios from "axios";

// Incorrect syntax here
// const default axios.create({
// Corrected syntax

const instance = axios.create({
    baseURL: "http://localhost:3005/api/v1/category",
});

export default instance;
