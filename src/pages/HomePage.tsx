import React, { useEffect } from 'react';
import { setCookie } from '../utils/Cookie';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const HomeBackGround = styled.div`
  width: 100vw;
  height: 100vh;

  background: url('img/home-background.jpeg');
  background-size: cover;
  opacity: 0.65;
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
  font-family: 'NanumPenScript';
  font-size: 25px;
  margin-bottom: 10px;
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

const HomeLogo = styled.div`
  color: #03c75a;
  font-size: 80px;
  font-family: 'NanumPenScript';
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
        <HomeLogo>Want</HomeLogo>
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
