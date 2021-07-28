import {useState, useEffect} from 'react'
import axios from 'axios'


function ProductsAPI() {
    const [products, setProducts] = useState([])
    const [allProducts, setAllProducts] = useState([])
    const [productHome, setProductHome] = useState([])
    const [productSearch, setProductSearch] = useState([])
    const [callback, setCallback] = useState(false)
    const [category, setCategory] = useState('')
    const [sort, setSort] = useState('')
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(1)
    const [result, setResult] = useState(0)

    useEffect(() =>{
        const getProducts = async () => {
            const res = await axios.get(`/api/products?limit=${page*9}&${category}&${sort}&title[regex]=${search}`)
            setProducts(res.data.products)
            setResult(res.data.result)
        }
        getProducts()
    },[callback, category, sort, page])

    useEffect(() =>{
        const getProducts = async () => {
            const res = await axios.get(`/api/search?title=${search}`)
            
            setProductSearch(res.data.products)
          
        }
        getProducts()
    },[ callback,search])

    useEffect( ()=>{
        const getProduct = async () => {
            const res = await axios.get(`/api/homeproducts`)
            setProductHome(res.data)
          
        } 

        getProduct()

        const getAllProducts = async () => {
            const res = await axios.get('/api/allproducts')
            setAllProducts(res.data.products)
        }
        getAllProducts()
        
    },[])
    
    return {
        products: [products, setProducts],
        productHome:  [productHome, setProductHome],
        productSearch:  [productSearch, setProductSearch],
        allProducts:  [allProducts, setAllProducts],
        callback: [callback, setCallback],
        category: [category, setCategory],
        sort: [sort, setSort],
        search: [search, setSearch],
        page: [page, setPage],
        result: [result, setResult]
    }
}

export default ProductsAPI
