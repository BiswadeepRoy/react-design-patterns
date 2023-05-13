import { withEditableUser } from './WithEditableUser'
import { withEditableResource } from './WithEditableResource'

export const UserInfoFrom = withEditableResource(({ user, onChangeUser, onSaveUser, onResetUser }) => {
    const { name, age, hairColor } = user || {};

    return (user ?
        <>
            <label>Name: </label>
            <input value={name} type='text' placeholder='Name' onChange={(e) => onChangeUser({ name: e.target.value })} />
            <label>Age: </label>
            <input value={age} type='number' placeholder='Age' onChange={(e) => onChangeUser({ age: e.target.value })} />
            <label>Hair Color: </label>
            <input value={hairColor} type='text' placeholder='Hair Color' onChange={(e) => onChangeUser({ hairColor: e.target.value })} />
            <button onClick={(e) => { onResetUser() }}>Reset</button>
            <button onClick={(e) => { onSaveUser() }}>Save</button>
        </>
        : <p>Loading ...</p>)
}, 'http://localhost:8080/users/123', 'user')

export const UserInfoFromOriginal = withEditableUser(({ user, onChangeUser, onSaveUser, onResetUser }) => {
    const { name, age, hairColor } = user || {};

    return (user ?
        <>
            <label>Name: </label>
            <input value={name} type='text' placeholder='Name' onChange={(e) => onChangeUser({ name: e.target.value })} />
            <label>Age: </label>
            <input value={age} type='number' placeholder='Age' onChange={(e) => onChangeUser({ age: e.target.value })} />
            <label>Hair Color: </label>
            <input value={hairColor} type='text' placeholder='Hair Color' onChange={(e) => onChangeUser({ hairColor: e.target.value })} />
            <button onClick={(e) => { onResetUser() }}>Reset</button>
            <button onClick={(e) => { onSaveUser() }}>Save</button>
        </>
        : <p>Loading ...</p>)
}, '123')