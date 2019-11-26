import styled from 'styled-components';

export const Wrap = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0,0,0,0.2);
  z-index: 99999;
  opacity:0;
  pointer-events: none;
  text-align:center;

  &.show {
    opacity:1;
    pointer-events: auto;
  }
  > div {
    width: 400px;
    height: 800px;
    position: relative;
    margin: 10% auto;
    background: #fff;

    div {
      text-align: left;
      h3, p { padding: 10px; }
      p { padding-left: 15px; }
      &:last-of-type {
        width: 40%;
        margin: 0;
      }
    }

    button {
      border-radius: 20px;
      padding: 10px;
      font-weight: bold;
    }
  }
`;