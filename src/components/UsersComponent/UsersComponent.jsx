import UserDetails from "../UserDetails/UserDetails";
import UserAddress from "../UserAddress/UserAddress";
import Company from "../Company/Company";

const UsersComponent = (props) => {
    
    return (
        <div style={{width: '45%'}}>
            <h1>Users List</h1>
            {props.users?.map((user) => <UserDetails key={user.id} user={user} />)}
            <h1>Address</h1>
            {props.users?.map((user) => <UserAddress key={user.id} user={user.address} />)}
            <h1>Company</h1>
            {props.users?.map((user) => <Company key={user.id} user={user.company} />)}
        </div>
    )
    
}

export default UsersComponent;