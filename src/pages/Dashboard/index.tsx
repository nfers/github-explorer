import React, { useState, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories, Error } from './style';

import api from '../../services/api';

import logo from '../../assets/logo.svg';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');

  const [inputError, SetInputError] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>([]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!newRepo) {
      SetInputError('Informe um Usuario/Repositorio');
      return;
    }
    try {
      const response = await api.get<Repository>(`/repos/${newRepo}`);

      const repository = response.data;

      setRepositories([...repositories, repository]);

      setNewRepo('');
      SetInputError('');
    } catch (err) {
      SetInputError(
        'Erro ao buscar este repositório/respositório não localizado',
      );
      setNewRepo('');
    }
  }

  return (
    <>
      <img src={logo} alt="Logo Projeto" />
      <Title>Dashboard</Title>

      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
          placeholder="Digite o nome do repositório"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repositories>
        {repositories.map((repository) => (
          <a key={repository.full_name} href="Teste">
            <img src={repository.owner.avatar_url} alt="Dhruv" />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size={20} />
          </a>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;