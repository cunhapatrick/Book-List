import React from 'react';
import PropTypes from 'prop-types';

// CSS
import  {
  Container,
  InputData,
} from './Filterbar.style';

const Filterbar = ({
  iData,
  eData,
  handleIData,
  handleEData,
  total,
}) => (
  <Container>
    <span>Filtrar ano de publicação:</span>
    <div>
      <InputData
        value={iData}
        onChange={handleIData}
        type="text"/>
      <i className="far fa-calendar-alt"/>
    <span>até</span>
      <InputData
        value={eData}
        onChange={handleEData}
        type="text"/>
      <i className="far fa-calendar-alt"/>
    </div>
    <span>
      {total} resultados encontrados
    </span>
  </Container>
);

Filterbar.propTypes = {
  iData: PropTypes.number.isRequired,
  eData: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  handleIData: PropTypes.func.isRequired,
  handleEData: PropTypes.func.isRequired,
}

export default Filterbar;