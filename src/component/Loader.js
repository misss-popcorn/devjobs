import styled from "styled-components";

export const Loader = styled.div`
  border: 2px solid var(--violet);
  border-radius: 50%;
  border-top: 2px solid var(--violet);
  border-bottom: 2px solid var(--violet);
  width: 20px;
  height: 20px;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
  margin: 0 auto;
  position: relative;
  top: 200px;

  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
