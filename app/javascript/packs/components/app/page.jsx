import React from 'react';
import PageWrapper from './views/pageWrapper';
import Footer from './views/footer';

export default function page({ children }) {
    return (
        <PageWrapper>
            {children}
            <Footer />
        </PageWrapper>
    );
}