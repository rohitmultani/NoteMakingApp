
import {Fragment} from 'react'
import Header from '../components/Header';
import CreateNote from '../components/Create';
import Cards from '../components/Cards';

function Home() {
  return (
    <Fragment>
    
      <Header/>
    <CreateNote/>
    <Cards/>

    </Fragment>
  )
    }

export default Home;
