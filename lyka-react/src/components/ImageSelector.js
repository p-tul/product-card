import React from 'react'
import styled from 'styled-components'

import Image1 from '../assets/images/green-apple2.png'
import Image2 from '../assets/images/half-apple.png'
import Image3 from '../assets/images/green-apple-flipped.png'
import Image4 from '../assets/images/apple-top.png'

const Container = styled.div`
    background: var(--white);
    padding: 20px;
    border-bottom-left-radius: var(--border-radius);
    border-bottom-right-radius: var(--border-radius);
`

const List = styled.ul`
    display: flex;
    justify-content: space-between;
    list-style: none;
    margin: 0;
    padding: 0;
`

const Item = styled.li`
    border: 1px solid var(--grey);
    border-radius: calc(var(--border-radius) / 2);

    :hover {
        cursor: pointer;
    }
`

const ImageSelector = () => {
    return (
        <Container>
            <List>
                <Item className="imageSelector-list-item"><img src={Image1} alt={Image1} /></Item>
                <Item className="imageSelector-list-item"><img src={Image2} alt={Image2} /></Item>
                <Item className="imageSelector-list-item"><img src={Image3} alt={Image3} /></Item>
                <Item className="imageSelector-list-item"><img src={Image4} alt={Image4} /></Item>
            </List>
        </Container>
    )
}

export default ImageSelector
