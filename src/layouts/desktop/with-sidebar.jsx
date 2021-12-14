import React from 'react';
import Sidebar from 'components/codemaster/sidebar';
import Layout from '../layout';

const withSiderbar = ({ children }) => (
    <Layout>
        <main className="flex container mx-auto py-6 px-4 justify-between flex-col">
            <section>{children}</section>
            <aside className='mt-4'>
                <Sidebar />
            </aside>
        </main>
    </Layout>
);

export default withSiderbar;
