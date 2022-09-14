import { useState } from 'react'

import { Banner } from './components/Banner'
import { Footer } from './components/Footer'
import { Form } from './components/Form'
import { Team } from './components/Team'

function App() {
  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#d9f7e9',
      corSecundaria: '#57c278'
    },
    {
      nome: 'Fron-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },

    {
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'UX & Design',
      corPrimaria: '#db6ebf',
      corSecundaria: '#fae9d9'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FEBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Inovação & Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    }
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = colaborador => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div>
      <Banner />
      <Form
        times={times.map(time => time.nome)}
        aoColaboradorCadastrado={colaborador =>
          aoNovoColaboradorAdicionado(colaborador)
        }
      />

      {times.map(time => (
        <Team
          key={time.nome}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          colaboradores={colaboradores.filter(
            colaborador => colaborador.time == time.nome
          )}
        />
      ))}
      <Footer />
    </div>
  )
}

export default App
