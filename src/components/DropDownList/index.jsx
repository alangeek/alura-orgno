import styles from './style.module.css'

export const DropDownList = props => {
  return (
    <div className={styles['lista-suspensa']}>
      <label>{props.label}</label>
      <select
        onChange={e => props.aoAlterado(e.target.value)}
        required={props.required}
        value={props.valor}
      >
        <option value=""></option>
        {props.itens.map(item => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  )
}
