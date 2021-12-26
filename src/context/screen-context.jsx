import React, { createContext, useState } from 'react';

export const ScreenContext = createContext();

let isClientFromLargeScreen;

if (typeof window !== 'undefined') {
    isClientFromLargeScreen = window.innerWidth >= 1024;
}

const ScreenContextProvider = ({ children }) => {
    const [isLargeScreen, setLargeScreen] = useState(isClientFromLargeScreen);
    React.useEffect(() => {
        const resize = () => {
            setLargeScreen(window.innerWidth >= 1024);
        };
        resize();
        window.addEventListener('resize', resize);
        return () => {
            window.removeEventListener('resize', resize);
        };
    }, []);
    return <ScreenContext.Provider value={isLargeScreen}>{children}</ScreenContext.Provider>;
};

export default ScreenContextProvider;
