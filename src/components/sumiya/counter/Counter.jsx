import React from 'react';
import { useTheme } from '../Hooks';
import { Count } from './Count';
import { Display } from './Display';
import { CounterProvider } from './CounterProvider';

export const Counter = () => {
  const { theme } = useTheme();
  return (
    <CounterProvider>
      <div
        className={`${
          theme ? 'bg-black text-white' : 'bg-gray-200 text-black'
        } flex flex-col items-center justify-center gap-[15px] rounded-md px-20 py-6 shadow-lg`}
      >
        <Display />
        <Count />
      </div>
    </CounterProvider>
  );
};
