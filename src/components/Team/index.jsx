import styles from './style.module.css'

import React from 'react'
import { Collaborator } from '../Collaborator'

export const Team = props => {
  const css = { backgroundColor: props.corSecundaria }
  return props.colaboradores.length > 0 ? (
    <section className={styles.time} style={css}>
      <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
      <div className={styles.colaboradores}>
        {props.colaboradores.map(colaborador => (
          <Collaborator
            key={colaborador.nome}
            corDeFundo={props.corPrimaria}
            nome={colaborador.nome}
            cargo={colaborador.cargo}
            imagem={colaborador.imagem}
          />
        ))}
      </div>
    </section>
  ) : (
    ''
  )
}
