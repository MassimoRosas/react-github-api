// == Import npm
import React, { useState } from 'react';
import axios from 'axios';
import { Dimmer, Loader } from 'semantic-ui-react';

// Import des composants
import Logo from 'src/components/Logo';
import SearchBar from 'src/components/SearchBar';
import MessageBar from 'src/components/MessageBar';
import ReposResults from 'src/components/ReposResults';

// Import des données de test
// import reposData from 'src/data/repos';

// == Import
import './styles.scss';
import 'semantic-ui-css/semantic.min.css';


// == Composant
const App = () => {
  const [repos, setRepos] = useState([]);
  const [inputSearch, setInputSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('Entrez le texte à rechercher');

  const loadRepos = () => {
    setLoading(true);
    // const newRepos = reposData.items;
    // setRepos(newRepos);
    axios.get(`https://api.github.com/search/repositories?q=${inputSearch}`)
      .then((response) => {
        setRepos(response.data.items);
        setMessage(`${response.data.total_count} résultats`);
      })
      .catch((error) => {
        console.log(error);
        setMessage('Une erreur s\'est produite');
        setRepos([]);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleSubmit = () => {
    loadRepos();
  };

  return (
    <div className="app">
      <Logo />
      <SearchBar
        handleSubmit={handleSubmit}
        inputSearch={inputSearch}
        setInputSearch={setInputSearch}
      />
      <MessageBar message={message} />
      <ReposResults repos={repos} />
      {loading && (
        <Dimmer active>
          <Loader />
        </Dimmer>
      )}
    </div>
  );
};

// == Export
export default App;
