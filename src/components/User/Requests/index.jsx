import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Axios } from '../../../axios/axios'
import { MeclibContext } from '../../../context/AppContext'
import LoadingSpinner from '../../loading'
import Card from './Card'

const UserRequests = () => {
  const {user} = useContext(MeclibContext)
  const [requests, setRequests] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const getAllRequests = async () => {
    setIsLoading(true)
    const {
      data: { data },
    } = await Axios.get(`/user-requests?userid=${user.id}`);
    setRequests(data);
    setIsLoading(false)

  };

  useEffect(() => {
    getAllRequests();
  }, []);

  console.log(requests)
    
  return (
    <div className='w-[100%]'>
        {isLoading && <LoadingSpinner />}
        {requests.map(request => (
            <Card key={request._id} {...{request}}/>
        ))}
    </div>
  )
}

export default UserRequests