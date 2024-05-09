import { useState,useEffect } from "react"
import { getAllUsers } from "../../api"

function Users(){

    const[users,setUsers]=useState([])

    useEffect(() => {
        getAllUsers().then((usernames) => {
            console.log(usernames)
          setUsers(usernames);
        });
      }, []);
    
      return (
        <div className="available-usernames">
          <h3>Available Usernames:</h3>
          <ul>
            {users.map((user) => (
              <li key={user.id}>{user.username}</li>
            ))}
          </ul>
        </div>
      );
    }





export default Users