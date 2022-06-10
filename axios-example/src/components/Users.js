import { useEffect,useState} from 'react'
import axios from "axnpmios";
function Users() {
const[users, setUsers] = useState([]);
const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/users')
            .then((res) => setUsers(res.data))
            .catch((e)=> console.log(e))
            .finally(()=>setIsLoading(false));
    }, []);
    return (
        <>
        <h1>Users</h1>
        {
            isLoading && <div>Loading...</div>
        }
        {
            users.map((user)=>(
                <div key={user.id}>
                    {user.name}
                </div>
            ))
        }
        </>
    )
}

export default Users;