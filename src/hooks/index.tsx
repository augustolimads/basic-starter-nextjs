import { CounterProvider } from './Counter'

type Hookprops = {
  children: React.ReactNode
}

export const Hooks = ({ children }: Hookprops) => (
  <CounterProvider>{children}</CounterProvider>
)
