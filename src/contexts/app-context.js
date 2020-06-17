import React from 'react';

const authContext = React.createContext(
    {
        isAuthenticated: true
    }
)
const mediaContext = React.createContext(
    {
        imageBasePath: true
    }
)
export { authContext, mediaContext};