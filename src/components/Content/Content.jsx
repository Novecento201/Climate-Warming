import styled from "styled-components";
import Card from "../Card/Card";
import { data } from "../../data.js";

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #1756dd32;
  display: flex;
  flex-direction: column;
  overflow: auto;
  z-index: 10;
  padding: 0;
  @media (min-width: 850px) {
    justify-content: center;
    align-items: center;
  }
`;

const Logo = styled.h1`
  position: relative;
  margin: 50px auto;

  color: #fff;
  font-weight: 800;
  font-size: 4rem;
  text-align: center;
  @media (max-width: 550px) {
    font-size: 2.5rem;
    margin-bottom: 25px;
    top: 10px;
  }
  @media (min-width: 850px) {
    margin-bottom: 0px;
    top: 10px;
  }
`;

const Slogan = styled.h4`
  margin: 20px auto;
  color: #fff;
  font-weight: 700;
  font-size: 2rem;
  text-align: center;
  @media (max-width: 550px) {
    font-size: 1.5rem;
  }
`;

const ContentContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  width: 75%;
  flex-wrap: wrap;
  column-gap: 2rem;
  overflow: auto;
  @media (min-width: 850px) {
    max-width: 1150px;
  }
`;

export function Content() {
  return (
    <Container>
      <Logo>Global Warming</Logo>
      <Slogan>Keep it cool for safe living</Slogan>
      <ContentContainer>
        {data.map((data) => (
          <Card data={data} key={data.id} />
        ))}
      </ContentContainer>
    </Container>
  );
}
