import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 65px;
  padding: 20px;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;

  span, button, div {
    float: left;
  }

  > div {
    width: 80%;
  }

`;

export const Logo = styled.span`
  font-size: xx-large;
  margin-right: 20px;
`;

export const Icon = styled.i`
  position: absolute;
  margin-left: 12px;
  top: 24px;
  font-size: 18px;
`;

export const SearchInput = styled.input`
  padding-left: 40px;
  width: 98%;
  height: 45px;
`;

export const SearchButton = styled.button`
  font: 18px bolder;
  padding: 10px 30px;
`;