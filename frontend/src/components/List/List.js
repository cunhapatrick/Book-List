import React from 'react';
import PropTypes from 'prop-types';

// CSS
import {
  Container,
} from './List.style';

const List = ({ books, handleDetalhes }) => {
  return (
  <Container>
    <table>
      <thead>
        <tr>
          <th>Livro</th>
          <th>Autor</th>
          <th>Editora</th>
          <th>Ano</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {books.map(book => (
          <tr key={book._id}>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.publisher}</td>
            <td>{book.year}</td>
            <td>
              <button onClick={() => handleDetalhes(book)}>Detalhes</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </Container>
);
}
List.propTypes = {
  books: PropTypes.array.isRequired,
  handleDetalhes: PropTypes.func.isRequired,
}

export default List;