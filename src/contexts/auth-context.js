import React from 'react';

const authContext = React.createContext(
    {
        isAuthenticated: true
    }
)
export default authContext;