import React, { useState } from 'react';
import { Container } from './styles';
import { FiLogIn } from 'react-icons/fi'

import heroesIMG from '../../assets/heroes.png'
import logo from '../../assets/logo.svg'
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api'

//d8a40839
export default function Logon() {
    const [id, setId] = useState('')
    const history = useHistory()
    async function handleLogin(e){
        e.preventDefault()

        try{
            const response = await api.post('session', { id })
            localStorage.setItem('ong_name',response.data.name)
            localStorage.setItem('ong_id',id)
            history.push('/profile')
            
        }catch(err){
            alert('Falha no login! Tente novamente')
        }
    }
    return (

        <Container>
            <section className='form'>
                <img src={logo} alt="Logo"/>
                <form onSubmit={handleLogin} >
                    <h1>Faça seu login</h1>
                    <input 
                            onChange={(e)=>setId(e.target.value)}
                            type="text" 
                            placeholder="Sua ID"/>
                    <button className="button">Logar</button>
                <Link className="back-link" to='/register'>
                    <FiLogIn size={16} color="#e02041"/>
                        Não tenho cadastro
                    </Link>
                </form>

            </section>
            <img src={heroesIMG} alt="Heroes"/>

        </Container>
    );
}
