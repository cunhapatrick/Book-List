import React from 'react';
import PropTypes from 'prop-types';

// CSS
import  {
  Wrap,
} from './Modal.style';

const Modal = ({ show, data, closeModal }) => (
  <Wrap onClick={closeModal} className={show ? 'show' : ''}>
    <div>

      <div>
        <h3>Titulo do livro</h3>
        <p>{data.title}</p>
      </div>
      <div>
        <h3>Autor da obra</h3>
        <p>{data.author}</p>
      </div>
      <div>
        <h3>Editora Responsavel</h3>
        <p>{data.publisher}</p>
      </div>
      <div>
        <h3>Ano de Publicação</h3>
        <p>{data.year}</p>
      </div>
      <div>
        <h3>Idioma</h3>
        <p>{data.language}</p>
      </div>
      <div>
        <h3>Peso em g</h3>
        <p>{data.weight} gramas</p>
      </div>
      <div>
        <h3>Dimensões</h3>
        <p>comprimento: {data.dimensions[0]}cm</p>
        <p>altura: {data.dimensions[1]}cm</p>
        <p>largura: {data.dimensions[2]}cm</p>
      </div>
      <button onClick={closeModal}>Fechar</button>
    </div>
  </Wrap>
);

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  data: PropTypes.object.isRequired,
}

export default Modal;