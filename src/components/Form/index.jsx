import { useState } from 'react'
import { Button } from '../Button'
import { DropDownList } from '../DropDownList'
import { TextField } from '../TextField'

import styles from './style.module.css'

export const Form = props => {
  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')

  const aoSalvar = e => {
    e.preventDefault()
    props.aoColaboradorCadastrado({ nome, cargo, imagem, time })

    setNome('')
    setCargo('')
    setImagem('')
    setTime('')
  }

  return (
    <section className={styles.formulario}>
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextField
          obrigatorio={true}
          label="Nome"
          placeholder="Digite o seu nome"
          valor={nome}
          aoAlterado={valor => setNome(valor)}
        />
        <TextField
          obrigatorio={true}
          label="Cargo"
          placeholder="Digite o seu cargo"
          valor={cargo}
          aoAlterado={valor => setCargo(valor)}
        />
        <TextField
          label="Imagem"
          placeholder="Digite o endereço da sua imagem"
          valor={imagem}
          aoAlterado={valor => setImagem(valor)}
        />
        <DropDownList
          obrigatorio={true}
          label="Time"
          itens={props.times}
          valor={time}
          aoAlterado={valor => setTime(valor)}
        />
        <Button>Criar Card</Button>
      </form>
    </section>
  )
}
