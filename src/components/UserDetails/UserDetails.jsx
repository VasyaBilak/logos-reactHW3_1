const UserDetails = (props) => {
    const { user } = props;

    console.log(user)
    return (
        <div>
            <h1>{user.title}</h1>
            <h1>{user.id}</h1>
            <h2 style={{textAlign: 'start'}}>{user.name}</h2> 
            <p>{user.username}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.website}</p>
        </div>
    )
}

export default UserDetails;