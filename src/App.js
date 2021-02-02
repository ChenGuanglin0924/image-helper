import React, { useCallback, useMemo, useState } from 'react';
import HelperContext from './utils/HelperContext';
import CanvasWrapper from './components/CanvasWrapper';
import ToolWrapper from './components/ToolWrapper';

import './styles/App.css';

function App() {
    const [state, setState] = useState({
        updateState: () => {},
        ctx: null,
        images: [],
    });

    const updateState = useCallback((mergeState) => {
        setState((v) => ({ ...v, ...mergeState }));
    }, []);

    const value = useMemo(() => {
        return {
            ...state,
            updateState,
        };
    }, [state, updateState]);

    return (
        <HelperContext.Provider value={value}>
            <div className="main">
                <CanvasWrapper />
                <ToolWrapper />
            </div>
        </HelperContext.Provider>
    );
}

export default App;
