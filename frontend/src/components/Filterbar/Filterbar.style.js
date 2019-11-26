import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 45px;
  padding: 10px 20px;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;

  span {
    flex: 0 1 10%;
    font-size: 16px;
    margin-right: 10px;
  }

  div {
    flex: 2;
    i, span {
      margin-right: 10px;
    }

    i {
      font-size: 22px;
    }
  }
`;

export const InputData = styled.input`
  width: 50px;
  height: 30px;
  margin-right: 10px;
`;