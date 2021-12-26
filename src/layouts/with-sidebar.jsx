import React from 'react';
import Sidebar from 'components/codemaster/sidebar';
import ScreenContextProvider from 'context/screen-context';
import Layout from './layout';

const WithSiderbar = ({ children }) => (
    <ScreenContextProvider>
        <Layout>
            <main className="flex container mx-auto py-6 px-4 justify-between flex-col lg:flex-row">
                <section className="lg:w-[73%]">{children}</section>
                <aside className="mt-4 lg:w-3/12 lg:mt-0">
                    <Sidebar />
                </aside>
            </main>
        </Layout>
    </ScreenContextProvider>
);

export default WithSiderbar;
