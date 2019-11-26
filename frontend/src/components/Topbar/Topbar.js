import React from 'react';
import PropTypes from 'prop-types';

// CSS
import {
  Container,
  Icon,
  SearchInput,
  Logo,
  SearchButton,
} from './Topbar.style'

const Topbar = ({
  filter,
  handleFilter,
  handleSearch,
  loading,
}) => (
  <Container>
    <Logo>SUPERO</Logo>
    <div>
      <Icon className={loading ? 'fas fa-spinner fa-spin' : 'fas fa-search'} />
      <SearchInput
        placeholder="Busque livros pelo titulo, autor ou ISBN"
        value={filter}
        onChange={handleFilter}
      />
    </div>
    <SearchButton onClick={handleSearch}>BUSCAR</SearchButton>
  </Container>
);

Topbar.propTypes = {
  filter: PropTypes.string,
  handleFilter: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
}

export default Topbar;
