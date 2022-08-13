import React, { FC } from 'react';

type containerProps = {
  children: React.ReactNode;
}

const Container: FC<containerProps> = ({children}) => {
  return (
    <div className='container'>
      {children}
    </div>
  )
}

export default Container;