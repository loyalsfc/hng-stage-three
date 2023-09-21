import  { useSortable } from "@dnd-kit/sortable"
import Image from "next/image";
import {CSS} from '@dnd-kit/utilities';

const SortableImage = ({ image }) => {
    const {
      attributes,
      listeners,
      setNodeRef,
      transform,
      transition,
    } = useSortable({ id: image.id });
    const style = {
      transition,
      transform: CSS.Transform?.toString(transform),
    };
  
    return (
        <div
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
            className="user"
        >
            <div className='aspect-square relative overflow-hidden'>
                <Image
                    src={image.image}
                    fill
                    alt='Images'
                />
            </div>
            <p className="text-center">{image.tag}</p>
        </div>
    );
};

export default SortableImage