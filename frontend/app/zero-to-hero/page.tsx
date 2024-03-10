"use client"
import React, { FC, useState } from 'react';
import Heading from '../utils/Heading';
import Zero_To_Hero from '../components/ZeroToHero/Zero_To_Hero';

interface IProps { }

const Page: FC<IProps> = (props) => {
  return (
    <>
      <Heading
        title={'Template Content Calendar | Quizzy Social Media Manager'}
        // description={'Kinh nghiệm 2 năm trong lĩnh vực Social Media Marketing, hiện đang là Project Manager tại 1 công ty Canada, từng là Social Media Executive tại Zing News và sỡ hữu hơn 140K followers trên các kênh Social'}
        // keywords={"Quizzy Coaching Course Marketing"}
      />
      < Zero_To_Hero/>
    </>
  );
};

export default Page;