import React from 'react';
import Hero from '../components/Hero';
import Carousel from '../components/Carousel';

function Home() {
    return <>
    <h1>David Brooks</h1>
    <Hero backgrundImage="https://avatars.githubusercontent.com/u/21251234?v=4">
    <h2>This is my Portfolio</h2>
    </Hero>
    <Carousel/>

    </>
}

export default Home;