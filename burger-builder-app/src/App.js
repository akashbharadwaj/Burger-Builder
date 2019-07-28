import React from 'react';
import Layout from  './components/Layout/Layout';
import Burgerbuilder from './containers/BurgerBuilder/Burgerbuilder';

function App() {
  return (
    <div>
      <Layout>
        <Burgerbuilder />
      </Layout>
    </div>
  );
}

export default App;
