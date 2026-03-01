import React, { useState, useEffect } from "react";
import {
    Main,
    Timeline,
    Expertise,
    Project,
    Contact,
    Navigation,
    Footer,
} from "./components";
import FadeIn from './components/FadeIn';
import './index.scss';

function App() {
    // Initial mode detection: check localStorage or system preference
    const getInitialMode = (): string => {
        const savedMode = localStorage.getItem('theme-mode');
        if (savedMode) return savedMode;

        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    };

    const [mode, setMode] = useState<string>(getInitialMode());

    const handleModeChange = () => {
        const newMode = mode === 'dark' ? 'light' : 'dark';
        setMode(newMode);
        localStorage.setItem('theme-mode', newMode);
    }

    useEffect(() => {
        // Scroll to top on mount
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

        // Listen for system theme changes
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e: MediaQueryListEvent) => {
            if (!localStorage.getItem('theme-mode')) {
                setMode(e.matches ? 'dark' : 'light');
            }
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    return (
        <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
            <Navigation parentToChild={{ mode }} modeChange={handleModeChange} />
            <FadeIn transitionDuration={700}>
                <Main />
                <Expertise />
                <Timeline />
                <Project />
                <Contact />
            </FadeIn>
            <Footer />
        </div>
    );
}

export default App;
