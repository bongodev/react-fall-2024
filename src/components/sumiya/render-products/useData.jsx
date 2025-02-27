import { useEffect } from 'react';
import { useState } from 'react';

function useData() {
    const url = 'https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json';
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(()=>{
        const fetchData = async ()=>{
          setLoading(true);
          try{
            const response = await fetch(url)
            const data = await response.json()
            setProducts(data)
          }catch(error){
            setError(error)
          }finally{
            setLoading(false)
          }
        }
        fetchData()
    }, [])
    
    return {loading, products, error}

}






  


export default useData