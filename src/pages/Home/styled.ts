import styled from "styled-components";
import Illustration from "../../assets/chucknorris.svg";

export const Wrapper = styled.div``;

export const ImageChuckNorris = styled.img.attrs(() => ({
  src: Illustration,
  alt: "Chuck Norris",
}))`
  max-width: 100%;
  width: 250px;
`;

export const Introduction = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: ${(props) => `${props.theme.spacing(4)}px`};

  @media ${(props) => props.theme.mediaQueries.smUp} {
    flex-direction: initial;
  }
`;

export const CategoryList = styled.section`
  display: grid;
  grid-gap: ${(props) => `${props.theme.spacing(3)}px`};
  grid-template-columns: repeat(1, 1fr);
  max-width: ${(props) => `${props.theme.spacing(110)}px`};
  width: 100%;

  @media ${(props) => props.theme.mediaQueries.smUp} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${(props) => props.theme.mediaQueries.mdUp} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${(props) => props.theme.mediaQueries.lgUp} {
    grid-template-columns: repeat(4, 1fr);
  }
`;
