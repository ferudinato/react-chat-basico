import React, { Component } from 'react';

import Chat from './containers/Chat/Chat';
import Layout from './containers/Layout/Layout';

const app = () => {
    return (
        <Layout>
            <Chat />
        </Layout>
    )
}

export default app;
