const UserAddress = (props) => {
    const { user } = props;

    return (
        <div>
            <p>{user.street}</p>
            <p>{user.suite}</p>
            <p>{user.city}</p>
        </div>
    )
}

export default UserAddress;