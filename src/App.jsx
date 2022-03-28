import React from 'react';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Portfolio from './components/portfolio/Portfolio';
import Services from './components/services/Services';
import Cv from './components/cv/Cv';

const App = () => {
    return (
        <>
            <Header></Header>
            <Nav></Nav>
            <About></About>
            <Experience></Experience>
            <Services></Services>
            <Portfolio></Portfolio>
            <Cv></Cv>
            <Contact></Contact>
            <Footer></Footer>
        </>
    );
};

export default App;