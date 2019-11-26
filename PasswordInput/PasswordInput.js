import React from 'react';

export default function PasswordInput({onChange, onChangeSetter, ...other}) {
    if (onChangeSetter !== undefined) {
        onChange = (e) => onChangeSetter(e.target.value);
    }
    return <input {...other} type="password" onChange={onChange}/>
}
