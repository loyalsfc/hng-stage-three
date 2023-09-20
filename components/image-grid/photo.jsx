import Image from 'next/image';
import React, {forwardRef} from 'react';

export const Photo = forwardRef(({url, index, faded, style, ...props}, ref) => {
    console.log(url)
  const inlineStyles = {
    opacity: faded ? '0.2' : '1',
    transformOrigin: '0 0',
    height: index === 0 ? 410 : 200,
    gridRowStart: index === 0 ? 'span 2' : null,
    gridColumnStart: index === 0 ? 'span 2' : null,
    backgroundImage: `url("${url}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundColor: 'grey',
    ...style,
  };

   return <Image src={url} width={400} height={index === 0 ? 410 : 200} ref={ref} style={inlineStyles} {...props} />;
});
