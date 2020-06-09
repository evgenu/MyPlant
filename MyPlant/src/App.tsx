import Menu from './components/Menu';
import React from 'react';
import MyPlants from './pages/MyPlants';
import Home from './pages/Home';
import Profile from './pages/Profile'
import Welcome from './pages/Welcome'
import Login from './pages/Login'
import Register from './pages/Register'
import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Lotus from './pages/Lotus';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => {

  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Redirect from='/' to='/page/welcome' exact />
            <Route path='/page/my_plants' component={MyPlants} exact/>
            <Route path='/page/home' component={Home} exact />
            <Route path='/page/profile' component={Profile} exact />
            <Route path='/page/welcome' component={Welcome} exact />
            <Route path='/page/login' component={Login} exact />
            <Route path='/page/register' component={Register} exact />
            <Route path='/plant/sadasdasd' component={Lotus} exact />
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
