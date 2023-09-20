import React from 'react';
import {useDroppable} from '@dnd-kit/core';

function Droppable({children}) {
    const {isOver, setNodeRef} = useDroppable({
        id: 'droppable',
    });
    const style = {
        color: isOver ? 'green' : undefined,
    };
    
    
    return (
        <div ref={setNodeRef} style={style}>
            {children}
        </div>
    );
}

export default Droppable