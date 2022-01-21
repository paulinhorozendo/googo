import React from 'react';
import Loader from 'react-loader-spinner';

export const Loading = () => (
  <div className="flex justify-center items-center ">
    <Loader type="Puff" color="#FFD200" height={550} width={80} />
  </div>
);
