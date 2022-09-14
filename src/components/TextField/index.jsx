import styles from './style.module.css'

export const TextField = props => {
  const aoDigitado = e => {
    props.aoAlterado(e.target.value)
  }

  return (
    <>
      <div className={styles['campo-texto']}>
        <label>{props.label}</label>
        <input
          value={props.valor}
          onChange={aoDigitado}
          required={props.obrigatorio}
          type="text"
          placeholder={props.placeholder}
        />
      </div>
    </>
  )
}
