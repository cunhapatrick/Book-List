import styled from 'styled-components';

export const Container = styled.div`
  margin: 30px;
  table {
    border: 1px solid black;
    border-collapse: collapse;
    width: 100%;
    
    td, th {
      border-left: 1px solid black;
    }

    td {
      padding: 5px;
    }

    th {
      height: 50px;
      text-align: left;
      background-color: #4CAF50;
      color: white;
      text-align: center;
    }

    tr {
      &:nth-child(even) {background-color: #f2f2f2;}
      &:hover {
        background-color: #f5f5f5;
      }
      > td {
        text-align: center;
      }
    }

    button {
      border: none;
      background: inherit;
      text-decoration: underline;
      color: #5F00FF
    }

  }
`;