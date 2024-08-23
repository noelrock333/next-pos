import React, { useEffect, useState } from 'react'
import { User } from '../types'

const Home = () => {
  const [users, setUsers] = useState<User[]>([])
  
  const fetchUsers = async () => {
    console.log(process.env.NEXT_PUBLIC_API_BASE_URL)
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/users`)
    const users = await response.json()
    setUsers(users)
  }
  
  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <div>
      <h1>This is a Point of sale</h1>
      <p>This is a simple home component.</p>
      {users?.map((user: User) => (
        <div key={user.id}>
          <h2>{user.firstName}</h2>
          <p>{user.lastName}</p>
        </div>
      ))}
    </div>
  )
}

export default Home