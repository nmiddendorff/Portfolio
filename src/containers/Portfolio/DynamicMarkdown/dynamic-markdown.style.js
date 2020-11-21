import styled from 'styled-components';

const DynamicMarkdownContainer = styled.section`
  background-color: pink;
  display: flex;
  padding-top: 160px;
  display: flex;
  @media (min-width: 991px) {
    min-height: 100vh;
  }
`;

export default DynamicMarkdownContainer;
