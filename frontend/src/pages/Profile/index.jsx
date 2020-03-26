import React, { useEffect, useState } from 'react';

import { Container } from './styles';
import logo from '../../assets/logo.svg'
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import api from '../../services/api';


export default function Profile() {
  const Name = localStorage.ong_name
  const Ong_id = localStorage.ong_id
  const headers = {Authorization: Ong_id}
  const history = useHistory()

  const [incidents, setIncidents] = useState([])

  async function updateIncidents() {
    const response = await api.get('profile', {headers})
    setIncidents(response.data)
    return response
  }

  async function handleDelete(id) {
    await api.delete(`incidents/${id}`, {headers})

    await updateIncidents()


  }

  function handleLogout(e){
    localStorage.clear()
    history.push('/')
  }

  useEffect(() => {
    updateIncidents()
  }, [Ong_id])

  return (
    <Container>
      <header>
        <img src={logo} alt="To Be Hero" />
        <span>Bem vinda, {Name}</span>

        <Link className="button" to="incidents/new">
          Cadastrar novo caso
        </Link>
        <button>
          <FiPower onClick={handleLogout} size={18} color="#e02041" />
        </button>
      </header>
      <h1>Casos cadastrados</h1>
      <ul>
        {incidents.map(
          incident => (
            <li key={incident.id}>
              <strong>CASO:</strong>
              <p>{incident.title}</p>

              <strong>DESCRICAO:</strong>
              <p>{incident.description}</p>

              <strong>VALOR:</strong>
              <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</p>
              <button onClick={() => handleDelete(incident.id)}><FiTrash2 size={20} color="#a8a8b3" /></button>
            </li>
          )
        )}


      </ul>

    </Container>
  );
}
