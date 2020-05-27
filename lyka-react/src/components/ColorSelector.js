import React, { useEffect } from 'react'
import styled from 'styled-components'

// IMAGES
import Green from '../assets/images/green-apple2.png'
import Yellow from '../assets/images/yellow-apple.png'
import Orange from '../assets/images/orange-apple.png'
import Red from '../assets/images/red-apple.png'

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
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;

    .active {
        border: 1px solid var(--grey);
        border-radius: calc(var(--border-radius) / 2);
    }
`

const Item = styled.li`
    margin-right: 10px;
    border: 1px solid transparent;
    
    img {
        height: 40px;
    }

    :hover {
    cursor: pointer;
    }
`

// TEMPLATE
const ColorSelector = () => {
    
    useEffect(() => { // Add active class on click
        const colorPickerItems = document.querySelectorAll('.colorPicker-list-item')

        const removeActive = () => {
            colorPickerItems.forEach(item => {
                item.classList.remove('active') // remove all active classes
            })
        }
        
        colorPickerItems.forEach(item => {
            item.addEventListener('click', () => {
                removeActive()
                item.classList.add('active') // add active class to item clicked
                // fetch new images
                // ...
            })
        })
    })
    
    return (
        <Container>
            <Heading>Select A Colour</Heading>
            <List>
                <Item className="colorPicker-list-item active"><img src={Green} alt="" /></Item>
                <Item className="colorPicker-list-item"><img src={Yellow} alt="half " /></Item>
                <Item className="colorPicker-list-item"><img src={Orange} alt="" /></Item>
                <Item className="colorPicker-list-item"><img src={Red} alt="" /></Item>
            </List>
        </Container>
    )
}

export default ColorSelector
