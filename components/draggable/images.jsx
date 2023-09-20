'use client'

// ImageGrid.js
import React from 'react';
import { DndContext, DragOverlay, useDraggable, useDroppable } from '@dnd-kit/core';
import  images  from '../images/images';
import Image from 'next/image';

const ImageGrid = () => {
    return (
        <div className='grid grid-cols-6 gap-4 px-4'>
            <DndContext>
                {images.map((image) => (
                    <DraggableImage key={image.id} image={image} />
                ))}
                <DragOverlay>
                    {({ active }) => active && <ImagePreview />}
                </DragOverlay>
            </DndContext>
        </div>
    );
};

const DraggableImage = ({ image }) => {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: image.id,
    });

    const style = {
        transform: transform ? `translate3d(${transform.x}px, ${transform.y}px, 0)` : undefined,
    };

    return (
        <div 
            className='w-full aspect-square relative rounded overflow-hidden'
            {...attributes}
            {...listeners}
            ref={setNodeRef}
            style={style}
        >
            <Image
                src={image.image}
                fill
                alt={`Image ${image.id}`}
                className="draggable-image object-cover object-center"
            />
        </div>
    );
};

const ImagePreview = () => {
    return <div className="image-preview">Preview</div>;
};

export default ImageGrid;
