import styles from './style.module.css'

import React from 'react'

export const Button = props => {
  return <button className={styles.botao}>{props.children}</button>
}
