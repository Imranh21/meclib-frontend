import React from 'react'

const UserCard = ({user}) => {
  const {name, requestBooks} = user

  return (
    <div className='p-[20px] bg-white rounded'>
      <h1 className='text-[18px] font-bold'>
        {name}
      </h1>
      <p className='text-gray-400'>Requests: {requestBooks?.length}</p>
    </div>
  )
}

export default UserCard