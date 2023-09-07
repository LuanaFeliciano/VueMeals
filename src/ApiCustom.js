// Set config defaults when creating the instance
import axios from "axios";

const ApiBase = axios.create({
    baseURL: 'https://www.themealdb.com/api/json/v1/1/',
});

export default ApiBase;