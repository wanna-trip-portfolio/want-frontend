import React, { useEffect } from 'react';
import { setCookie } from '../utils/Cookie';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { WantLogo } from '../components/common/WantLogo';

const HomeBackGround = styled.div`
  width: 100vw;
  height: 100vh;

  background: url('img/home-background.jpeg');
  background-size: cover;
  opacity: 0.65;

  font-family: 'NanumPenScript';
`;

const HomeContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 400px;
  height: 250px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HomeDescription = styled.div`
  text-align: center;
  color: #797979;
  font-size: 25px;
  margin-bottom: 20px;
`;

const EnterButton = styled.div`
  width: 250px;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 20px;

  background-color: #2db400;
  color: white;
`;

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setCookie<boolean>('enterHome', true);
  }, []);

  return (
    <>
      <HomeBackGround />
      <HomeContent>
        <WantLogo>Want</WantLogo>
        <HomeDescription>
          For travelers
          <br />
          What A Nice Trip
        </HomeDescription>
        <EnterButton onClick={() => navigate('/main')}>시작하기</EnterButton>
      </HomeContent>
    </>
  );
};

export default HomePage;
