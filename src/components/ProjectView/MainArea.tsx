import { Background, Controls, MiniMap, ReactFlow } from "@xyflow/react";

import '@xyflow/react/dist/style.css';

export function MainArea() {

    return (
        <ReactFlow>
            <Background />
            <Controls />
            <MiniMap pannable zoomable zoomStep={2} style={{ width: 150, height: 100, opacity: 0.75 }} />
        </ReactFlow>
    )
}