'use client'

import styles from './style.module.css'

import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  function onClick() {
    setCount(count + 1)
  }

  return <div className={styles.counter} onClick={onClick}>im a counter {count}</div>
}
