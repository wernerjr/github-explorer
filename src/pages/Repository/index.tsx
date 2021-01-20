import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { Header, RepositoryInfo, Issues } from './styles';

import logoImg from '../../assets/logo.svg';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>
      <RepositoryInfo>
        <header>
          <img
            src="https://www.portaldosanimais.com.br/wp-content/uploads/2019/05/Capivara-1-1.jpg"
            alt="capivara"
          />
          <div>
            <strong>Teste/123/capivara</strong>
            <p>teste capivara</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>12</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>32</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>54</strong>
            <span>Issues Abertas</span>
          </li>
        </ul>
      </RepositoryInfo>
      <Issues>
        <Link key={Math.random()} to="13123123">
          <div>
            <strong>123123123</strong>
            <p>123123123123</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
