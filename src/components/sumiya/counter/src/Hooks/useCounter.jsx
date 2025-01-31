import { useContext } from 'react'
import { CounterContext } from '../contexts';




export function useCounter() {
  return useContext(CounterContext);
}

