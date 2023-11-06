import './App.css'
import FormUser from './components/FormUser'
import UserCard from './components/UserCard'
import usefetch from './hook/usefetch'
import { useEffect } from 'react'
import { useState } from 'react'
function App() {

  const [infoUpdate, setInfoUpdate] = useState()
  const baseUrl = `https://users-crud.academlo.tech`
  const [ users, getUsers, createUser, deleteUser, updateUser ] = usefetch(baseUrl) 

  useEffect(() => {
    getUsers(`/users`)
  }, [])
  
  console.log(users);

  return (
    <>
      <div>
        <h1>Users Crud</h1>
        <FormUser 
        createUser={createUser}
        infoUpdate={infoUpdate}
        updateUser={updateUser}
        setInfoUpdate={setInfoUpdate}
        />
        <div>
          {
            users?.map(user =>(
              <UserCard
              key={user.id}
              user={user}
              deleteUser={deleteUser}
              setInfoUpdate={setInfoUpdate}
              />
            ))
          }
        </div>
      </div>
      
    </>
  )
}

export default App
