import React, { useState, useEffect, useRef } from 'react';
import { Card, Loader } from '../index'

export function Results({ data = [], searchWord, loading }) {

  const firstLoadRef = useRef(true);

  useEffect(() => {
      firstLoadRef.current = false;
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {loading ? (
        <Loader />
      )
      :
      (
        <>
          {data.length > 0 ? (
            <div className="flex flex-wrap justify-center">
            {data.map((datos) => (
              <div className='flex p-5' key={datos.id}>
                <Card gif={datos.url} text={datos.title} />
              </div>
            ))}
              <p>{data.length} Results for '{searchWord}'</p>
            </div>
          )
          :
          (<div>
              {!firstLoadRef.current && (
                <div>
                  <p className=''> There's none results. </p>
                </div>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}