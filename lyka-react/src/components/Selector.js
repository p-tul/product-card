import React, { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;

`

const Button = styled.button`
    border: none;
    background: none;
    font-size: 1.2rem;
    vertical-align: bottom;
`

const Count = styled.div`
    font-size: 1.2rem;
    width: 2rem;
    text-align: center;
`

const Selector = () => {
    const [count, setCount]  = useState(1)

    const decrement = () => {
        setCount(count - 1)
    }
    const increment = () => {
        setCount(count + 1)
    }

    return (
        <Container>
            <Button onClick={decrement} disabled={count <= 1}>-</Button>
            <Count>{count}</Count>
            <Button onClick={increment}>+</Button>
        </Container>
    )
}

export default Selector
