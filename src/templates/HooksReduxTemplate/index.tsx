import { useSelector, useDispatch } from 'react-redux'
import { useCounter } from 'src/hooks/Counter'
import { RootState } from 'src/store'
import { decrement as minus, increment as plus } from 'src/store/counter.store'

export const HooksReduxTemplate = () => {
  const { counter, increment, decrement } = useCounter()

  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Hooks & Redux</h1>
      <h3>Hooks</h3>
      <h4>{counter}</h4>
      <button aria-label="Increment value" onClick={increment}>
        +
      </button>
      <button aria-label="Increment value" onClick={decrement}>
        -
      </button>
      <hr />
      <h3>Redux</h3>
      <h4>{count}</h4>
      <button aria-label="Increment value" onClick={() => dispatch(plus())}>
        +
      </button>
      <button aria-label="Increment value" onClick={() => dispatch(minus())}>
        -
      </button>
    </div>
  )
}
