import React, { useReducer } from 'react'
import CountReducer from './summa'

export default function() {
    const [state,dispatch]=useReducer(CountReducer,initialReducer);
  return (
    <div>
        <h>

        </h>
    </div>
  )
}
