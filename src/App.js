import { Switch,Route,Link} from 'react-router-dom';
import './App.css';
import {Layout,Typography,Space} from 'antd';
import {Navbar,Exchanges,Homepage,News,Cryptocurrencies,CryptoDetails} from './components';

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar/>
      </div>
      <div className="main">
          <Layout>
            <div className="routes">
                <Switch>
                  <Route exact path="/">
                        <Homepage></Homepage>
                  </Route>
                  <Route exact path="/exchanges">
                      <Exchanges></Exchanges>
                  </Route>
                  <Route exact path="/cryptocurrencies">
                    <Cryptocurrencies></Cryptocurrencies>
                  </Route>
                  <Route exact path="/crypto/:coinid">
                      <CryptoDetails></CryptoDetails>
                  </Route>
                  <Route exact path="/news">
                      <News></News>
                  </Route>
                </Switch>
            </div>
          </Layout>
      <div className="footer" >
          <Typography.Title level={5} style={{color:'white',textAlign:'center'}}>
            Cryptoverseed <br />
            All right reserved
          </Typography.Title>
          <Space>
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>

          </Space>
          </div>
      </div>
    </div>
  );
}

export default App;
