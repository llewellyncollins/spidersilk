import React from 'react';
import AppDevSection from './components/AppDevSection/AppDevSection';
import ContactForm from './components/ContactForm/ContactForm';
import Nav from './components/Nav/Nav';
import WebDevSection from './components/WebDevSection/WebDevSection';
import useRemoteConfig from './hooks/useRemoteConfig';
import './styles/main.scss';

function App() {
    const config = useRemoteConfig();

    return (
        <div className='App'>
            <Nav />
            {config ? (
                <div className='content'>
                    <AppDevSection />
                    <section className='side-bar'>
                        <WebDevSection />
                        <ContactForm />
                    </section>
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
}

export default App;
