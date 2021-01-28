import React, { useCallback, useMemo, useState } from 'react';
import HelperContext from './utils/HelperContext';
import CanvasWrapper from './components/CanvasWrapper';
import ToolWrapper from './components/ToolWrapper';
import { Row, Col } from 'antd';

import 'antd/dist/antd.css';
import './styles/App.css';

function App() {
    const [state, setState] = useState({});

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
            <div className='main'>
                <Row>
                    <Col span={18}>
                        <CanvasWrapper />
                    </Col>
                    <Col span={6}>
                        <ToolWrapper />
                    </Col>
                </Row>
            </div>
        </HelperContext.Provider>
    );
}

export default App;
