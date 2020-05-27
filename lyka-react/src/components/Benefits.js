import React from 'react'
import styled from 'styled-components'

// STYLES
const Container = styled.div`
    margin-bottom: 2rem;
`

const Heading = styled.h4`
    color: var(--grey);
    text-transform: uppercase;
    margin-bottom: 0.5rem;
    font-weight: normal;
`

const List = styled.ul`
    padding-left: 18px;
    margin: 0;
    color: #444;
`

// TEMPLATE
const Benefits = () => {
    return (
        <Container>
            <Heading>Benefits</Heading>
            <List>
                <li>Apples are nutritious</li>
                <li>Apples may be good for weight loss</li>
                <li>Apples may be good for bone health</li>
                <li>They're linked to lower risk of diabetes</li>
            </List>
        </Container>
    )
}

export default Benefits
