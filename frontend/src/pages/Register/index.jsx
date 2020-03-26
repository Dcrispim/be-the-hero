import React, { useState } from 'react';

import { Container } from './styles';
import { Link, useHistory} from "react-router-dom";
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api'

import logo from '../../assets/logo.svg'


export default function Register() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [city, setCity] = useState('')
  const [uf, setUf] = useState('')

  const history = useHistory()

  async function handleRegister(e){
    e.preventDefault()

    const data = {
      name,
      email,
      whatsapp,
      city,
      uf,
    }

    try{

      const response = await api.post('ongs',data)
      alert(`Seu Id de Acesso é: ${response.data.id}`)
      history.push('/')

    }catch(e){
      alert('Erro No Cadastro! Tente Novamente')
    }

    

  }

  return (
    <Container>
      <div className="content">
        <section>
          <img src={logo} alt="Be The Hero" />
          <h1>Cadastro</h1>
          <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos na sua ONG.</p>
          <Link className="back-link" to="/">
            <FiArrowLeft sizs={16} color="#e02041"/>
            Voltar para Logon
          </Link>
        </section>
        <form onSubmit={handleRegister}>
          <input onChange={(e)=>setName(e.target.value)}
          placeholder="Nome da ONG" />

          <input type="email" onChange={(e)=>setEmail(e.target.value)}
          placeholder="E-mail" />

          <input onChange={(e)=>setWhatsapp(e.target.value)}          
              placeholder="Whatsapp" />

          <div className="input-group">
            <input onChange={(e)=>setCity(e.target.value)}
                placeholder="Cidade" />

            <input onChange={(e)=>setUf(e.target.value)}            
                placeholder="UF" style={{width:80}} />

          </div>
          <button  className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </Container>
  );
}
