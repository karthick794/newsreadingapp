import { create } from 'apisauce'

// define the api
const api = create({
  baseURL: 'https://newsapi.org/v2',
})
const apikey="apiKey=5f3b0927a73d45d19e5201e3f779da4f"
const getheadlinetopic=api.get('/everything?q=tesla&from=2024-08-04&sortBy=publishedAt&'+apikey)
const getcategory=(category)=>api.get('/everything?q='+category+'&'+apikey)

export default{
    getheadlinetopic,getcategory
}