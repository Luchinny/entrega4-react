const UserCard = ({ user, deleteUser, setInfoUpdate }) => {
    const hanledDelete = () =>{
        deleteUser(`/users`, user.id)

    }

    const hanledEdit = () => {
        setInfoUpdate(user)
    }

  return (
    <div>
      <article>
      <h3>#{`${user.id} ${user.first_name} ${user.last_name}`}</h3>
      <ul>
        <li><span>Email: </span><span>{user.email}</span></li>
        <li><span>Birthday: </span><span>{user.birthday}</span></li>
      </ul>
      <button onClick={hanledDelete}>Delete</button>
      <button onClick={hanledEdit}>Edit</button>
    </article>
    </div>
  )
}

export default UserCard
