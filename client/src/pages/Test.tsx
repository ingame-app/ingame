import Button from '@/components/Button';
import Dropdown from '@/components/Dropdown';
import InputBox from '@/components/InputBox';
import styled from 'styled-components';

import { useForm } from 'react-hook-form';
import { RxHamburgerMenu } from 'react-icons/rx';
import Top from '@/components/Top';
import { getToken } from '@/utils/tokenUtils';
import WeekCalander from '@/components/WeekCalander';

const Test = () => {
  const useform = useForm();
  const { register, handleSubmit, watch } = useform;
  return (
    <TestStyle>
      <WeekCalander />
    </TestStyle>
  );
};

const TestStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 30px;

  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

export default Test;
