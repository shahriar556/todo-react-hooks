import React from 'react';
import {AuthConsumer} from './authContext';

const ChangeName = () => {
    return (
        <AuthConsumer>
            {({changeName})=>
                <button onClick={changeName}>Change Name</button>
            }
        </AuthConsumer>
    )
}

export default ChangeName;
