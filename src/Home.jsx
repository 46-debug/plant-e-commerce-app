import React, { useEffect, useState } from 'react'
import Header from './Header';
import Main from './Main';
import Places from './Places';
import Plants from './Plants';
import Planters from './Planters';
import Blogs from './Blogs';
import Contact from './Contact';

const Home = () => {

    return (
     <>
     <Header />
     <Main />
     <Places />
     <Plants />
     <Planters />
     <Blogs />
     <hr />
     <Contact />
     </>
    )
};

export default Home;