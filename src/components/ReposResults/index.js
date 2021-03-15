import React from 'react';
import { Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import Repo from './Repo';

const ReposResults = ({ repos }) => (
  <Card.Group itemsPerRow={3}>
    {repos.map((repo) => (
      <Repo
        {...repo}
        key={repo.id}
      />
    ))}
  </Card.Group>
);

ReposResults.propTypes = {
  repos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default ReposResults;
