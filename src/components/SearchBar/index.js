import React, { useEffect, useRef } from 'react';
import { Input, Form, Segment } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const SearchBar = ({ inputSearch, setInputSearch, handleSubmit }) => {
  const refInput = useRef(null);

  useEffect(() => {
    refInput.current.focus();
  }, []);

  return (
    <Segment>
      <Form onSubmit={(event) => {
        event.preventDefault();
        handleSubmit();
      }}
      >
        <Form.Field>
          <Input
            className="searchbar-component"
            icon={{ name: 'search', circular: true, link: true }}
            placeholder="Search..."
            value={inputSearch}
            onChange={(event) => {
              setInputSearch(event.currentTarget.value);
            }}
            ref={refInput}
          />
        </Form.Field>
      </Form>
    </Segment>
  );
};

SearchBar.propTypes = {
  setInputSearch: PropTypes.func.isRequired,
  inputSearch: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
