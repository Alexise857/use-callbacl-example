import React, {memo, useEffect} from 'react';

const Item = memo(({user, handleDelete}:any) => {

    useEffect(() => {
        console.log('rendering Item' + user.name)
    },  );

    return (
        <li>
            {user.name}
            <button onClick={()=>handleDelete(user.id)}>Delete</button>
        </li>
    );
});

export default Item;
