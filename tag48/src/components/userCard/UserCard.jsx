import { Link } from "react-router-dom";

const UserCard = ({user , id}) => {
    return ( 
        <>
        <h3>Last Name: {user.last_name}</h3>
        <Link to={`/userlist/${id}`}>More Info</Link>
        </>
     );
}
 
export default UserCard;