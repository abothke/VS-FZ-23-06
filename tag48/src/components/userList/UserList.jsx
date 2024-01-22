import { useState } from "react";
import users from "../../data/user.json"
import Nav from "../nav/Nav";
import UserCard from "../userCard/UserCard";

const UserList = () => {
    let [userData, setUserData] = useState(users);

    return ( 
        <>
        <Nav />
        <h2>Userlist</h2>
        {userData.map((user, index) => {
            return(
                <div key={index}>
                    <UserCard
                        user={user}
                        id={user.id}
                />
            </div>
            )
        })}
        </>
    );
}
 
export default UserList;