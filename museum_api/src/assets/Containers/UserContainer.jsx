import React from "react";
import SignUp from "../Components/SignUp";

const UserContainer = () => {
    const [users, setUsers] = React.useState([]);

    return(
        <>
            <SignUp users={users} setUsers={setUsers} />
        </>
    );
}

export default UserContainer;