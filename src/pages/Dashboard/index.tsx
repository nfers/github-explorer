import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Input, Repositories } from './style';

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

      <Repositories>
        <a href="Teste">
          <img
            src="https://avatars2.githubusercontent.com/u/18121502?s=460&u=65f935dadb23365cb1078fff4f8ff0886df7535e&v=4"
            alt="Dhruv"
          />
          <div>
            <strong>nodejs/i18n</strong>
            <p>
              The Node.js Internationalization Working Group – A Community
              Committee initiative.
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
