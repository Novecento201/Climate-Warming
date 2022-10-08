import React, { useState } from "react";
import { BiPlus } from "react-icons/bi";
import styled from "styled-components";
import Modal from "../Modal/Modal";

const Item = styled.div`
  min-width: 200px;
  width: 400px;
  color: white;
  margin: 2rem auto;
  cursor: pointer;
  user-select: none;
  @media (max-width: 550px) {
    margin: 1rem;
  }
`;

const ButtonItem = styled.div`
  font-size: 3rem;
  height: 65px;
  width: 65px;
  transition: 300ms ease;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  @media (max-width: 550px) {
    font-size: 0.8rem;
  }
`;

const StrongText = styled.span`
  font-size: 3rem;
  font-weight: bold;
  display: flex;
  align-items: baseline;
  position: relative;
  left: -10px;
  @media (max-width: 550px) {
    font-size: 2rem;
    margin-bottom: 25px;
    top: 10px;
  }
`;

const Card = ({ data }) => {
  const { apiCall, name, isPositive, number, text, colorText, detailText } =
    data;
  const [showModal, setShowModal] = useState(false);

  return (
    <Item onClick={() => setShowModal(true)} className="grid-item">
      <div className="row"></div>
      <h3 className="title-grid-item" style={{ color: `${colorText}` }}>
        {name}
      </h3>
      <div className="container-grid-item">
        <Text>
          <StrongText>
            <div className={`${isPositive ? "positive" : "negative"}`}>➜</div>
            {number}
          </StrongText>
          {text}
        </Text>
        <ButtonItem className="button-grid-item">
          <BiPlus style={{ color: `${colorText}` }} />
        </ButtonItem>
      </div>
      {showModal && (
        <Modal
          setShowModal={setShowModal}
          api={apiCall}
          text={detailText}
          title={name}
        />
      )}
    </Item>
  );
};

export default Card;
