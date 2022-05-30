import React from 'react';
import { useParams } from 'react-router-dom';

const ProfilePage: React.FC = () => {
  const { userId } = useParams();

  return <>ProfilePage {userId}</>;
};

export default ProfilePage;
