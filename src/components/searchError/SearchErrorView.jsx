import styled from 'styled-components';
import errorImage from 'asset/errorImage.png';

const ErrorBox = styled.div`
margin: 0 auto;
`;

export const SearchErrorView = () => {
  return (
    <ErrorBox role='alert'>
      <img src={errorImage} alt="errorImage" />
    </ErrorBox>
  );
};