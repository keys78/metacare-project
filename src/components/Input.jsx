import React from 'react'
import styled from 'styled-components'


const Input = ({name, value, onChange, placeholder, label, type, required, custom}) => {
    return (
        <>
            <label className="block">{label}</label>
            <InputBox
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                type={type}
                required={required}
                custom={custom}
            />
        </>
    )
}

const InputBox = styled.input`
    padding:${({custom}) => (custom ? '10px 0 10px 16px' : '  12px 0 13px 16px ')} ;
    border: 0.5px solid #BDBDBD;
    border-radius: 2px;
    width: 100%;
    border: none;
    background:${({custom}) => (custom ? '#fff' : '#FAFAFC')} ;
    
    &:focus {
        outline: none;
    }

    @media screen and (max-width: 540px){
        padding: 15px 0 13px 12px;
        font-size: 14px;
    }
`

export default Input
