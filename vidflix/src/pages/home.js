import React from 'react';
import { HeaderContainer } from '../containers/header';
import { FaqsContainer } from '../containers/faqs';
import { FooterContainer } from '../containers/footers';

import { JumbotronContainer } from '../containers/jumbotron';

export default function Home(){
  console.log("HOME Page");
  return (
    <>
    <HeaderConatiner>
    <JumbotronContainer />
      <FaqsContainer />
    <FooterContainer />
    </HeaderConatiner>
    </>
  );
};