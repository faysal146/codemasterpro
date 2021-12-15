import React from 'react';
import Header from 'components/header';
import Footer from 'components/footer';
import Navigation from 'components/navigation';

import Subscribe from 'components/codemaster/subscribe';


export default function ({ children }) {

    return (
        <>
            <Header />
            <Navigation />
            {children}
            <div className="mt-4" />
            <div className='px-4'>
                <Subscribe />
            </div>
            <Footer />
        </>
    );
}
