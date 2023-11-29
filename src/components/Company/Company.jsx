const Company = (props) => {
    const { user } = props;

    return (
        <div>
            <p>{user.name}</p>
            <p>{user.catchPhrase}</p>
            <p>{user.bs}</p>
        </div>
    )
}

export default Company;