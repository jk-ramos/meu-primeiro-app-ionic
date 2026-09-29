import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol
} from '@ionic/react';
import { documentTextOutline, personOutline, settingsOutline, rocketOutline } from 'ionicons/icons';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          {/* Mantivemos o título da barra de ferramentas conciso */}
          <IonTitle>Meu App Ionic</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        {/* Banner visual sutil e centralizado */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          gap: '20px',
          padding: '20px',
          textAlign: 'center'
        }}>

          {/* Gráfico vetorial de demonstração (foguete) para preencher o espaço */}
          <IonIcon
            icon={rocketOutline}
            color="primary"
            style={{ fontSize: '80px', marginBottom: '10px' }}
          />

          <h1 style={{ fontSize: '32px', fontWeight: 'bold' }}>Bem-vindo!</h1>
          <p style={{ color: '#b0b0b0', marginBottom: '30px', maxWidth: '300px' }}>
            Explore as funcionalidades do seu primeiro aplicativo com Ionic e React.
          </p>

          {/* Grelha para organizar os botões */}
          <IonGrid fixed style={{ padding: '0' }}>
            <IonRow className="ion-justify-content-center">
              <IonCol size="12" sizeMd="4">
                <IonButton color="primary" expand="block" routerLink="/detalhes" style={{ height: '55px', borderRadius: '10px' }}>
                  <IonIcon slot="start" icon={documentTextOutline} style={{ fontSize: '20px' }} />
                  Ir para Detalhes
                </IonButton>
              </IonCol>

              <IonCol size="12" sizeMd="4">
                <IonButton color="primary" expand="block" routerLink="/perfil" style={{ height: '55px', borderRadius: '10px' }}>
                  <IonIcon slot="start" icon={personOutline} style={{ fontSize: '20px' }} />
                  Ir para Perfil
                </IonButton>
              </IonCol>

              <IonCol size="12" sizeMd="4">
                <IonButton color="primary" expand="block" routerLink="/configuracoes" style={{ height: '55px', borderRadius: '10px' }}>
                  <IonIcon slot="start" icon={settingsOutline} style={{ fontSize: '20px' }} />
                  Ir para Configurações
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>

        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;