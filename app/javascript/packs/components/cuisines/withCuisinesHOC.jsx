import React from 'react';
import CuisinesFetcher from './cuisinesFetcher';

export default function withCuisinesHOC(Component) {
    return (props) => {
        return (
            <CuisinesFetcher>
               {({ cuisines }) => (<Component cuisines={cuisines} {...props}/>)}
            </CuisinesFetcher>
        );
    }
}