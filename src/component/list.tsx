import React, {memo, useEffect} from 'react';
import Item from "./item";


const List = memo(({users, handleDelete}:any) => { // Si los users cambian, memo vuelve a renderizar para volver a memorizar

    useEffect(() => {
        console.log('rendering List')
    },  );

    return (
        <ul>
            {
                users.map( (user:any) => (
                    <Item key={user.id} user={user} handleDelete={handleDelete} />
                )  )
            }

        </ul>
    );
});

export default List;
