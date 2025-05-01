import React, { useEffect, useState } from 'react'
import tours from '../assets/data/tours'

const useFetch = (url) => {
  const [apiData, setApiData] = useState();
    const [error, setError] = useState()
  
    useEffect(() => {
    // For local data, we'll use the tours array directly
    if (url.includes('/tour')) {
      // Handle different tour endpoints
      if (url.includes('/featured')) {
        setApiData(tours.filter(tour => tour.featured))
      } else if (url.includes('/search')) {
        const searchParams = new URLSearchParams(url.split('?')[1])
        const searchTerm = searchParams.get('search')
        const minPrice = searchParams.get('minPrice')
        const maxPrice = searchParams.get('maxPrice')
        
        const filteredTours = tours.filter(tour => {
          const matchesSearch = tour.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                              tour.city.toLowerCase().includes(searchTerm.toLowerCase())
          const matchesPrice = (!minPrice || tour.price >= parseInt(minPrice)) && 
                             (!maxPrice || tour.price <= parseInt(maxPrice))
          return matchesSearch && matchesPrice
        })
        
        setApiData(filteredTours)
      } else {
        // Default case - return all tours
        setApiData(tours)
            }
    } else {
      setError('Invalid endpoint')
    }
    }, [url])
  
    return {apiData, error}
}

export default useFetch
