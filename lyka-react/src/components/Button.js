import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
        padding: 1rem 3rem;
        font-size: 1.1rem;
        border: none;
        background: ${props => (props.primary ? 'var(--red)' : 'transparent')};
        color: ${props => (props.primary ? 'var(--white)' : 'var(--dark)')};
        border-radius: var(--border-radius);
        text-transform: uppercase;
        -webkit-box-shadow: 0px 0px 24px 0px var(--grey);
        -moz-box-shadow: 0px 0px 24px 0px var(--grey);
        box-shadow: 0px 0px 24px 0px var(--grey);
        transition: all 300ms;

    :hover {
        cursor: pointer;
        -webkit-box-shadow: 0px 0px 24px 2px var(--grey);
        -moz-box-shadow: 0px 0px 24px 2px var(--grey);
        box-shadow: 0px 0px 24px 2px var(--grey);
        filter: brightness(1.07);
    }
`

const Button = ({ label, primary }) => {
        return (
            <StyledButton primary={primary} >{label}</StyledButton>
        )
}

export default Button
