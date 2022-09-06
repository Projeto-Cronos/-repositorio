import axios from "axios";

const ApiNews = axios.create({
  baseURL: "https://free-news.p.rapidapi.com/v1/search?q=Tecnologia&lang=pt",
  timeout: 5000,
});

export default ApiNews;
