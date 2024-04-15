import React, { useEffect, useState } from 'react';
import './Body.css';
import { Card } from '../Card/Card';
import { Loader } from '../Loader/Loader';
import { useCard } from '../../hooks/useCard'
import {Button} from '../Button/Button';

export function Body() {

  const { isLoading, fact, image, updateCardInfo } = useCard();

  useEffect(() => {
    updateCardInfo();
  }, []);

  return (
    <main>
      {isLoading
      ? (<Loader />)
      : (<div className='main'>
          <Card image={image} fact={fact} />
          <Button label="Get New Fact" onClick={updateCardInfo} />
          </div>
          )}
    </main>
  );
}