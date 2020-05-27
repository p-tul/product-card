import React from 'react'
import styled from 'styled-components'

// COMPONENTS
import ImageSelector from './ImageSelector'

// IMAGES
import HeroImage from '../assets/images/green-apple-with-slice.png'
import Share from '../assets/icons/share.svg'
import Heart from '../assets/icons/heart-line.svg'

// STYLES
const Container = styled.div`
    background: #b6e352;
    background: radial-gradient(circle, rgba(186,233,79,1) 0%, rgba(147,199,30,1) 100%);
    position: relative;
    right: 60px;
    border-radius: var(--border-radius);
    -webkit-box-shadow: 10px 10px 24px -2px var(--grey);
    -moz-box-shadow: 10px 10px 24px -2px var(--grey);
    box-shadow: 10px 10px 24px -2px var(--grey);
    padding-top: 2rem;
    transition: transform 300ms;

    @media (max-width: 800px) {
        position: static;
        margin-bottom: 2rem;
    }

    :hover {
        transform: scale(1.003)
    }

    .top-left {
        top: 10px;
        left: 10px;
    }

    .top-right {
        top: 10px;
        right: 10px;
    }
`

const Hero = styled.img`
    position: relative;
    right: 60px;
    margin-bottom: 10px;
    filter: drop-shadow(0px 0px 24px rgba(68, 68, 68, 0.5)) saturate(150%);

    @media (max-width: 800px) {
        position: static;
    }
`

const Icon = styled.img`
    position: absolute;
    height: 24px;

    :hover {
        cursor: pointer;
        transform: scale(1.03)
    }
`

const ImageWrapper = styled.div`
    @media (max-width: 800px) {
        position: relative;
    }
`

// TEMPLATE
const HeroCard = () => {
    return (
        <Container>
            <ImageWrapper>
                <Hero className="heroImage" src={HeroImage} alt="green apple with slice" />
                <a href="https://daiquiridigital.com/" target="_blank" rel="noopener noreferrer">
                    <Icon className="top-left" src={Share} alt="" />
                </a>
                <Icon className="top-right" src={Heart} alt="" />
            </ImageWrapper>
            <ImageSelector />
        </Container>
    )
}

export default HeroCard
