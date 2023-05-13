import React from "react"

export const UncontrolledForm = ({ }) => {
    const nameInput = React.useRef('');
    const ageInput = React.useRef(0);
    const hairColorInput = React.useRef('');

    const handleSubmitForm = e => {
        e.preventDefault();
        console.log(nameInput.current.value);
        console.log(ageInput.current.value);
        console.log(hairColorInput.current.value);
    }

    return (
        <form onSubmit={handleSubmitForm} style={{ display: 'flex', flexDirection: 'column' }}>
            <input name="name" type="text" placeholder="Name" ref={nameInput} />
            <input name="age" type="number" placeholder="Age" ref={ageInput} />
            <input name="haircolor" type="text" placeholder="Hair Color" ref={hairColorInput} />
            <input type="submit" placeholder="Submit" ref="nameInput" />
        </form>
    )
}