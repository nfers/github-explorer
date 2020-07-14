import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';
import { Header, RepositoryInfo } from './styles';

import logo from '../../assets/logo.svg';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logo} alt="GitHub Explorer" />
        <Link to="/dashboard">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
        {/* Repository:
      {params.repository} */}
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://avatars3.githubusercontent.com/u/69631?v=4"
            alt=""
          />
          <div>
            <strong>Facebook/react</strong>
            <p>Apo</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>8</strong>
            <span>stars</span>
          </li>
          <li>
            <strong>25588</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>8</strong>
            <span>Issues</span>
          </li>
        </ul>
      </RepositoryInfo>
    </>
  );
};

export default Repository;
