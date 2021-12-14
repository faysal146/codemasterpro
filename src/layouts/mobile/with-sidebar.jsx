import React from 'react';
import Sidebar from 'components/codemaster/sidebar';
import Layout from '../layout';

const withSiderbar = ({ children }) => (
    <Layout>
        <main className="flex flex-col container mx-auto py-6 px-4 justify-between">
            <section>{children}</section>
            <aside className="mt-6 lg:mt-0">
                <Sidebar />
            </aside>
        </main>
    </Layout>
);

export default withSiderbar;
