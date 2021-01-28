import { useContext, useRef } from 'react';
import useMount from '../hooks/useMount';
import HelperContext from '../utils/HelperContext';

import '../styles/CanvasWrapper.css';

const CanvasWrapper = () => {
    const { updateState, ctx } = useContext(HelperContext);
    const canvas = useRef();

    useMount(() => {
        if (canvas.current && canvas.current.getContext('2d') && !ctx) {
            updateState({
                ctx: canvas.current.getContext('2d'),
            });
        }
    });

    return (
        <div className="ih-canvas-wrapper">
            <canvas ref={canvas}></canvas>
        </div>
    );
};

export default CanvasWrapper;
