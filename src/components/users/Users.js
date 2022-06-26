import {useEffect, useState} from "react";

import {User} from "../user/User";
import {UserDetails} from "../userDetails/userDetails";

function Users() {

    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(value => setUsers(value))
    }, []);

    const userButton = (item) => {
        setUser(item)
    }

    return (
        <div>
            {
                user && <UserDetails
                user={user}
                />
            }
            {
                users.map(user => <User key={user.id}
                                        item={user}
                                        userButton={userButton}
                />)
            }
        </div>
    );
}

export {Users};