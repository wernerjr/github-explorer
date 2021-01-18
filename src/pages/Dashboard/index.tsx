import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>
      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://www.portaldosanimais.com.br/wp-content/uploads/2019/05/Capivara-1-1.jpg"
            alt="Capivara"
          />
          <div>
            <strong>Capivara Repo</strong>
            <p>
              Capivara programadora Capivara programadora Capivara programadora
              Capivara programadora Capivara programadora
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://www.portaldosanimais.com.br/wp-content/uploads/2019/05/Capivara-1-1.jpg"
            alt="Capivara"
          />
          <div>
            <strong>Capivara Repo</strong>
            <p>
              Capivara programadora Capivara programadora Capivara programadora
              Capivara programadora Capivara programadora
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://www.portaldosanimais.com.br/wp-content/uploads/2019/05/Capivara-1-1.jpg"
            alt="Capivara"
          />
          <div>
            <strong>Capivara Repo</strong>
            <p>
              Capivara programadora Capivara programadora Capivara programadora
              Capivara programadora Capivara programadora
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
