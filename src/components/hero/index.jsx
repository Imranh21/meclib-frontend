import React from 'react'
import SearchForm from '../search/SearchForm'

const Hero = () => {
  return (
    <div className='w-[100%] z-auto py-[6rem] relative '>
      <img className='w-[300px] absolute bottom-0 left-0' src="/images/blright.svg" alt="" />
      <img className='w-[300px] absolute bottom-0 right-0' src="/images/brright.svg" alt="" />
        <div className='w-[90%] m-auto sm:w-[80%] grid place-items-center'>
            <h1 className='text-[2rem] mb-[2rem] font-black text-[#002A14]'>Welcome to MECLIB</h1>
            <SearchForm />
        </div>
    </div>
  )
}

export default Hero