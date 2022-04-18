import { createContext, useState } from "react";

export const UserContext = createContext()

const UserProvider = (props) => {
    const [tasks, setTasks] = useState([])
    return (
        <UserContext.Provider value={{setTasks, tasks}} >
            {props.children}
        </UserContext.Provider>
    );
};

export default UserProvider;









