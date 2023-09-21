'use client'

import { DndContext, MouseSensor, TouchSensor, closestCenter, useSensor, useSensors } from '@dnd-kit/core'
import React, { useState } from 'react'
import images from '../images/images'
import { SortableContext, arrayMove, rectSortingStrategy, verticalListSortingStrategy } from '@dnd-kit/sortable'
import SortableImage from './sortable-images'

function ImageGrids() {
    const [imageList, setImageList] = useState(images);
    const [filter, setFilter] = useState("");
    const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

    const onDragEnd = (event) => {
        const { active, over } = event;
        if (active?.id === over?.id) {
          return;
        }
        setImageList((imageList) => {
          const oldIndex = imageList.findIndex((image) => image.id === active.id);
          const newIndex = imageList.findIndex((image) => image.id === over.id);
          return arrayMove(imageList, oldIndex, newIndex);
        });
    };

    function imagesFilter(item){
        return item.tag.toLocaleLowerCase().includes(filter.toLowerCase())
    }

    return (
        <div className=''>
            <div className='flex items-center  py-6'>
                <h2 className='font-semibold text-3xl'>Photos</h2>
                <div className='w-1/3 md:w-1/5 ml-auto border border-gray-800 rounded-md overflow-hidden px-2 py-1 mr-2'>
                    <input
                        value={filter}
                        onChange={(e)=>setFilter(e.target.value)}
                        className='bg-transparent text-sm focus:outline-none'
                        type='text'
                        placeholder='Search Images'
                    />
                </div>
                <div>
                    <form action="/auth/signout" method="post">
                        <button className="" type="submit">
                            Sign out
                        </button>
                    </form>
                </div>
            </div>

            {imageList.filter(imagesFilter).length ? (
                <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
                    <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd} sensors={sensors}>
                        <SortableContext items={images} strategy={rectSortingStrategy}>
                            {imageList.filter(imagesFilter).map((image) => (
                                <SortableImage image={image} key={image.id} />
                            ))}
                        </SortableContext>
                    </DndContext>
                </div>
            ):(
                <div className='pt-24'>
                    <p className='text-center'>No Photo found for "<span className='font-medium'>{filter}</span>"</p>
                </div>
            )}
        </div>
    )
}

export default ImageGrids