import React from 'react';
import { Title, Form, Input } from './style';

import logo from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="Logo Projeto" />
      <Title>Dashboard</Title>
      <Form>
        <Input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>
    </>
  );
};

export default Dashboard;
