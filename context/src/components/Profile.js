import { useState } from 'react'
import { useUser } from '../context/UserContext'

function Profile() {
    const { user, setUser } = useUser();

    const [loading, setLoading] = useState(false);

    const handleLogin = () => {
        setLoading(true);
        setTimeout(() => {
            setUser({ id: 1, username: 'mansinel', bio: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, aut?' });
            setLoading(false);
        }, 1500);
    }
    const handleLogout = () => {
        setLoading(true);
        setTimeout(() => {
            setUser(null);
            setLoading(false);
        }, 1500);
    }
    return (
        <div>
            {
                !user && (
                    <button onClick={handleLogin}>
                        {loading ? 'Loading...' : 'Login'}
                    </button>
                )
            }
            <br /><br />
            <code>{JSON.stringify(user)}</code>
            <br /><br />
            {
                user && (
                    <button onClick={handleLogout}>
                        {loading ? 'Loading...' : 'Logout'}
                    </button>
                )
            }
        </div>
    )
}

export default Profile