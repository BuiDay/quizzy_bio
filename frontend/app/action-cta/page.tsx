"use client"
import React, { FC, useState } from 'react';
import Heading from '../utils/Heading';
import ActionCTA from '../components/ActionCTA/ActionCTA'
interface IProps { }

const Page: FC<IProps> = (props) => {
  return (
    <>
      <Heading
        title={'Zero to Hero | Quizzy Social Media Manager'}
        // description={'Kinh nghiệm 2 năm trong lĩnh vực Social Media Marketing, hiện đang là Project Manager tại 1 công ty Canada, từng là Social Media Executive tại Zing News và sỡ hữu hơn 140K followers trên các kênh Social'}
        // keywords={"Quizzy Coaching Course Marketing"}
      />
      <ActionCTA />
    </>
  );
};

export default Page;