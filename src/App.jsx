import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const App = () => {
    const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        dispatch({ type: 'UPDATE_USER', payload: { [name]: value } });
    };

    return (
        <div>
            <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleInputChange}
                placeholder="Name"
            />
            <br />
            <input
                type="number"
                name="age"
                value={user.age}
                onChange={handleInputChange}
                placeholder="Age"
            />
            <br />
            <select name="gender" value={user.gender} onChange={handleInputChange}>
                <option value="">Select gender</option>
                <option value="Man">Man</option>
                <option value="Girl">Girl</option>
            </select>
            <br />
            <h3>User Info:</h3>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>Gender: {user.gender}</p>
        </div>
    );
};

export default App;
