import styled from 'styled-components';

export const Container = styled.div`
  div {
    ul {
      margin: 3% 0 0 45%;
      text-align: center;
      li {
        text-align: center;
        list-style-type: none;
        border: 1px solid black;
        text-align: center;
        margin-left: 10px;
        float: left;
        padding: 5px 10px;
        font-weight: 500;
        font-size: 16px;

        &:hover:not(.disabled) {
          cursor: pointer;
          background: #A4A4C4;
          color: white;
        }

        &.active {
          color: white;
          background: #0F5FCF;
        }
        &.disabled {
          cursor: not-allowed;
        }
      }
    }
  }
`;