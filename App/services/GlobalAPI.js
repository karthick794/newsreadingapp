import { create } from 'apisauce'

// define the api
const api = create({
  baseURL: 'https://newsapi.org/v2',
})
const apikey="?sources=bbc-news&apiKey=5f3b0927a73d45d19e5201e3f779da4f"
const getheadlinetopic=api.get('/top-headlines'+apikey)

export default{
    getheadlinetopic
}