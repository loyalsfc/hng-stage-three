'use client'
import React from 'react'
import images from './images/images'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import Image from 'next/image';

function ImageGrid() {
    return (
        <DragDropContext>
            <Droppable droppableId='image-grid' direction='vertical'>
                {(provided) => (
                    <ul className='grid grid-cols-4 gap-4' {...provided.droppableProps} ref={provided.innerRef}>
                        {images.map((image, index) => {
                            return <Draggable key={image.id} draggableId={image.id} index={index}>
                                {(provided) => (
                                    <li 
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        ref={provided.innerRef}
                                        className='overflow-hidden'
                                    >
                                        <div className="w-full aspect-square relative rounded overflow-hidden">
                                            <Image
                                                src={image.image}
                                                fill
                                                alt={image.tag}
                                                placeholder='blur'
                                                className='object-cover object-center'
                                            />
                                        </div>
                                        <p className="text-center text-sm">{image.tag}</p>
                                    </li>
                                )}
                            </Draggable>
                        })}
                        {provided.placeholder}
                    </ul>
                )}
            </Droppable>
        </DragDropContext>
    )
}

export default ImageGrid