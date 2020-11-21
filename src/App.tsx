import React from 'react';
import AppDevSection from './components/AppDevSection/AppDevSection';
import ContactForm from './components/ContactForm/ContactForm';
import Nav from './components/Nav/Nav';
import WebDevSection from './components/WebDevSection/WebDevSection';
import './styles/main.scss';

function App() {
    return (
        <div className='App'>
            <Nav />
            <div className='content'>
                <AppDevSection />
                <section className='side-bar'>
                    <WebDevSection />
                    <ContactForm />
                </section>
            </div>
        </div>
    );
}

export default App;
