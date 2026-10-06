import { Navigate, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Páginas do Portfólio */
import Apresentacao from './pages/Apresentacao';
import Contacto from './pages/Contacto';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        {/* Rotas Ativas*/}
        <Route path="/apresentacao" element={<Apresentacao />} />
        <Route path="/contacto" element={<Contacto />} />

        {/* Redirecionamentos de Segurança */}
        <Route path="/perfil" element={<Navigate to="/apresentacao" replace />} />
        <Route path="/" element={<Navigate to="/apresentacao" replace />} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;