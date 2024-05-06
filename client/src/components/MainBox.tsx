import styled from 'styled-components';
import { BsThreeDots } from "react-icons/bs";
import { MdArrowDropDown } from "react-icons/md";
import { MdArrowDropUp } from "react-icons/md";
import { useState } from 'react';
import { sideQuestList } from '@/shared/dummy';


const MainBox = () => {
  const [isAccordion, setisAccordion] = useState(false);
  const [checked, setChecked] = useState(Array(sideQuestList.length).fill(false));

  const handleCheckboxClick = (index: number) => {
    setChecked(prevState => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    })
  };

  const checkedCount = checked.reduce((count, isChecked) => isChecked ? count + 1 : count, 0);
  const MainText = `메인 퀘스트 제목`;
  const fraction = `${checkedCount} / ${sideQuestList.length}`;

  const handleNavigate = () => {

  }

  const handleToggleAccordion = () => {
    setisAccordion(prevState => !prevState);
  }

  return (
    <>
      <MainBoxStyle onClick={handleToggleAccordion}>
      <header className='aFContainer'>
        <button className='aButton'>{isAccordion ? (<MdArrowDropUp size={30} />) : (<MdArrowDropDown size={30} />)}</button>
        <p className='fDisplay'>{fraction}</p>
      </header>
      <h1 className='title'>{MainText}</h1>
      <button className='eButton' onClick={handleNavigate}><BsThreeDots /></button>
      </MainBoxStyle>
      {sideQuestList.map((quest, index) => (
        <SideBoxStyle key={index} className={`sideBox ${isAccordion ? 'show' : ''}`}>
          <label className='cBox'>
            <input type='checkbox' checked={checked[index]} onChange={() => handleCheckboxClick(index)} />
          </label>
          <h2 className='sTitle'>{quest.content}</h2>
        </SideBoxStyle>
      ))}
  </>
  );
};

const MainBoxStyle = styled.div`
  width: 22rem;
  height: 55px;
  background: ${({ theme }) => theme.color.white};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: ${({ theme }) => theme.borderRadius.medium};

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
  cursor: pointer;

  .aFContainer {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .title {
    width: 11rem;
  }

`;

const SideBoxStyle = styled.div`
  position: relative;
  left: 23px;
  margin-top: 5px;

  display: flex;
  align-items: center;
  padding: 0px 10px;
  width: 20.5rem;
  height: 55px;
  background: ${({ theme }) => theme.color.white};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  gap: 20px;

  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  transform: translateY(-100%);
  max-height: 0;
  overflow: hidden;
  opacity: 0;

  &.show {
    transform: translateY(0%);
    max-height: 100%;
    opacity: 1;
  }

  .cBox {
    cursor: pointer;
  }
`;

export default MainBox;