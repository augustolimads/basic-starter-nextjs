import React, { createContext, useContext, useState } from 'react'

type CounterProviderProps = {
  children: React.ReactNode
}

type CounterProps = {
  increment: () => void
  decrement: () => void
  counter: number
}

const CounterContext = createContext({})

export const CounterProvider = ({ children }: CounterProviderProps) => {
  const [counter, setCounter] = useState(0)

  function increment() {
    setCounter((counter) => counter + 1)
  }

  function decrement() {
    setCounter((counter) => counter - 1)
  }

  return (
    <CounterContext.Provider value={{ increment, decrement, counter }}>
      {children}
    </CounterContext.Provider>
  )
}

export const useCounter = () => {
  const { increment, decrement, counter } = useContext(
    CounterContext
  ) as CounterProps

  return { increment, decrement, counter }
}
