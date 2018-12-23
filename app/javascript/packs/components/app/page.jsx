import React from 'react';
import PageWrapper from './views/pageWrapper';



export default function page({ children }) {
    return (
        <PageWrapper>
            {children}
        </PageWrapper>
    );
}