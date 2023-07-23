import React from 'react';

//Components
import Navigation from "./components/Navigation";
import Footer from './components/Footer';

//Pages
import Home from './pages/Home';

function App(){
  return(
    <div style={styles.container}>
      <div style={styles.wrapper}>
        <Navigation />
        <div>
          <Home />
        </div>
        <Footer />
      </div>
    </div>
  )
}


export default App;


const styles = {
  container:{
    backgroundColor: '#071516',
    height: "100%",
    width: "100%"
  },
  wrapper: {
    padding: "2rem",
  },
}
