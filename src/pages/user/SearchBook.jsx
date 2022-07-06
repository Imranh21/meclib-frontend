import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { Axios } from '../../axios/axios'
import BookCard from '../../components/book/BookCard'

const SearchBook = () => {
    const [books, setBooks] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [search] = useSearchParams()
    const term = search.get('key')

    const getSearchBooks = async () => {
        setIsLoading(true)
        const {data: {data}} = await Axios.get(`/search/${term}`)
        setBooks(data)
        setIsLoading(true)
        
    }
    useEffect(() => {
        getSearchBooks()
    }, [term])

    
  return (
    <div className='w-[100%] py-[2rem]'>
        <div className='w-[90%] m-auto grid grid-cols-2 sm:grid-cols-4 sm:w-[80%]'>
          
          {books.map(book => (
            <BookCard {...{book}}/>
          ))}
        </div>
    </div>
  )
}

export default SearchBook