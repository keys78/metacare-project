import React from 'react'
import styled from 'styled-components'

const Button = ({ onClick, text, width, padding, color}) => {
    return (
        <CustomButton onClick={onClick} className={`custom-btn ${ width} ${padding} ${color}`}>
            {text}
        </CustomButton>
    )
}

const CustomButton = styled.button`
    background: #25BB87;
    color: #fff;
    padding:10px 30px;
    border-radius:10px;
    font-weight: bold;
`

export default Button
