import { useEffect, useState } from "react";
import { Dimmer, Loader, Segment } from "semantic-ui-react";
import styled from "styled-components";
import LineChart from "../LineChart/LineChart";

const ModalStyle = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgba(43, 43, 43, 0.5);
  z-index: 200;
  cursor: default;
  overflow: auto;
`;

const ModalContainer = styled.div`
  width: 90%;
  max-width: 600px;
  margin: 0 auto;
  padding: 3em 2em;
  position: relative;
  background-color: #1a1a1a;
  border-radius: 0.5em;
  display: flex;
  flex-direction: column;
  row-gap: 2em;
  overflow: auto;
`;

const ButtonModal = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  color: white;
  cursor: pointer;
  background: none;
  font-size: 2rem;
  transition: 300ms ease-in;
  border: none;
  :hover {
    color: gray;
  }
`;

const Title = styled.h1`
  text-align: center;
  margin: 0;
`;

const Modal = ({ api, setShowModal, text, title }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [dataChart, setDataChart] = useState([]);

  function closeModal(e) {
    e.stopPropagation();
    setShowModal(false);
  }

  const fetchData = async (api) => {
    setIsLoading(true);
    const res = await fetch(`${api}`);
    const dataJson = await res.json();
    setDataChart(dataJson);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData(api);
  }, [api]);

  return (
    <ModalStyle onClick={(e) => closeModal(e)}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        {isLoading && (
          <Segment>
            <Dimmer active>
              <Loader />
            </Dimmer>
          </Segment>
        )}
        <ButtonModal onClick={(e) => closeModal(e)}>x</ButtonModal>

        <Title>{title}</Title>

        <LineChart chartData={dataChart} api={api} isLoading={setIsLoading} />

        <p>{text}</p>
      </ModalContainer>
    </ModalStyle>
  );
};

export default Modal;
