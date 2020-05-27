import React from 'react'
import styled from 'styled-components'

// COMPONENTS
import Benefits from './Benefits'
import HeroCard from './HeroCard'
import ColorSelector from './ColorSelector'
import Button from './Button'
// import Selector from './Selector'

// STYLES
const Container = styled.div`
    background: var(--white);
    border-radius: var(--border-radius);
    padding: 2rem;
    display: grid;
    grid-template-columns: 50% 50%;
    align-items: center;

    @media (max-width: 800px) {
        display: flex;
        flex-direction: column;
    }
`

const ProductName = styled.h2`
    margin: 0;
    font-weight: bold;
    color: var(--dark);
`

const ProductCode = styled.div`
    color: var(--grey);
`

const Price = styled.div`
    font-size: 1.2rem;
    color: var(--red);
    margin-top: 1.5rem;
    margin-bottom: 1rem;
`

const Value = styled.span`
    font-size: 4rem;
    margin-left: 1rem;
`

// TEMPLATE
const ProductCard = () => {
    return (
        <Container>
            <HeroCard />
            <div>
                <ProductName>Delicious Apples</ProductName>
                <ProductCode>COD: 45999</ProductCode>
                <Price>R$ <Value>7.93</Value></Price>
                <ColorSelector />
                {/* <Selector /> */}
                <Benefits />
                <Button primary label='add to cart' />
            </div>
        </Container>
    )
}

export default ProductCard
