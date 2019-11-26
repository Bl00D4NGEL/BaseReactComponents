import React from 'react';

export default function TextInput({onChange, onChangeSetter, ...other}) {
    if (onChangeSetter !== undefined) {
        onChange = (e) => onChangeSetter(e.target.value);
    }
    return <input {...other} type="text" onChange={onChange}/>
}
