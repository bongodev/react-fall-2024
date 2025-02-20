import { useContext } from 'react';
import { CounterContext } from './CounterProvider';

export function useCounter() {
  return useContext(CounterContext);
}
