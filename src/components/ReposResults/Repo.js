import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';


const Repo = ({
  name,
  owner,
  description,
  html_url
}) => (
  <Card
    as="a"
    href={html_url}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Image src={owner.avatar_url} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>
        {owner.login}
      </Card.Meta>
      <Card.Description>
        {description}
      </Card.Description>
    </Card.Content>
  </Card>
);

Repo.propTypes = {
  name: PropTypes.string.isRequired,
  owner: PropTypes.shape({
    login: PropTypes.string.isRequired,
    avatar_url: PropTypes.string.isRequired,
  }).isRequired,
  description: PropTypes.string,
  html_url: PropTypes.string.isRequired,
};

Repo.defaultProps = {
  description: '',
};

export default Repo;
