// 1 imports
import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer'


// 2 create class - always have render method 
class App extends React.Component {
  render(){
    return (
      <>
        <Header /> 
        <Main />
        <Footer />
      </>  
    )
  }
}


// 3 export class
export default App;