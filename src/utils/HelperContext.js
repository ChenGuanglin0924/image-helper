import React from 'react';

const HelperContext = React.createContext({
    updateState: () => {},
    ctx: null,
    images: [],
});

export default HelperContext;
