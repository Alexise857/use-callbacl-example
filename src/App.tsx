import React, {useEffect, useState, useMemo, useCallback} from 'react';
import List from "./component/list";
import {nanoid} from "nanoid";

const initialUser = [
    {id: 1, name: 'Luis'},
    {id: 2, name: 'Maria'},
]

function App() {

    const [users, setUsers] = useState(initialUser);
    const [text, setText] = useState("");
    const [search, setSearch] = useState("");

    const handleAdd = () => {
        const newUser = {id: Date.now(), name: text}
        setUsers([...users, newUser])
    };

    const handleSearch = () => {
        setSearch(text)
    };

    const handleDeleteAll = () => {
        setUsers([])
        handleSetUsers()
    }

    const handleSetUsers = () => {
        const userArray = []
        for (const user of initialUser) {

            const addedUser = {
                id: user.id,
                name: nanoid()
            }
            userArray.push(addedUser)
        }
        setUsers(  userArray )
        console.log( {users} )
    }

    const handleDelete = useCallback((userId: number) => { // UseCalback, alamcenar la definicion de una funcion, guardarla memorizada
        setUsers(users.filter(user => user.id !== userId))
    },[users]) // -- dependecias, cuando debe volver a memorizarce una funcion

    const filterUsers = useMemo(() => users.filter(user => { // UseMemo, almacena el valor que retorna una funcion, para crear propiedades computadas
        return user.name.toLowerCase().includes(search.toLowerCase())
    }), [search, users])

    useEffect(() => {
        console.log('rendering app')
    },);

    return (
        <div>
            <input type="text" value={text} onChange={event => setText(event.target.value)}/>
            <button onClick={handleSearch}>Search</button>
            <button onClick={handleAdd}>Add Item</button>
            <List users={filterUsers} handleDelete={handleDelete}/>

            <button onClick={handleDeleteAll}>Delete All</button>
            <button onClick={handleSetUsers}>Set Users</button>
        </div>
    );
}

export default App;
