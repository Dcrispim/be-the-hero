import React, { useState } from 'react';

import { Container } from './styles';
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from 'react-icons/fi'

import logo from '../../assets/logo.svg'
import api from '../../services/api';


export default function Register() {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')

  const Ong_id = localStorage.ong_id
  const headers = {Authorization: Ong_id}
  const history = useHistory()

  async function handleNewIncident(e){
    e.preventDefault()
    try{
      await api.post('incidents', {title,description,value}, {headers})
      history.push('/profile')
    }catch(err){
      alert('Erro ao Cadastrar Novo Caso! Tente novamente')
    }
  }
  
  return (
    <Container>
      <div className="content">
        <section>
          <img src={logo} alt="Be The Hero" />
          <h1>Cadastrar novo caso</h1>
          <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso</p>
          <Link className="back-link" to="/Profile">
            <FiArrowLeft sizs={16} color="#e02041"/>
            Voltar para home
          </Link>
        </section>
        <form onSubmit={handleNewIncident}>
          <input 
            placeholder="Titulo do caso"
            onChange={(e)=>setTitle(e.target.value)}
          />
          <textarea 
            placeholder="Descrição"
            onChange={(e)=>setDescription(e.target.value)}
          />
          <input type="number" 
            placeholder="Valor em reais"
            onChange={(e)=>setValue(e.target.value)}
          />

          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </Container>
  );
}
