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
  IonCol,
  // Novos componentes importados para criar o Card:
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent
} from '@ionic/react';
import { documentTextOutline, personOutline, settingsOutline, rocketOutline, bulbOutline } from 'ionicons/icons';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Meu App Ionic</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonContent fullscreen>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100%',
          padding: '20px',
          textAlign: 'center'
        }}>
          
          <IonIcon 
            icon={rocketOutline} 
            color="primary" 
            style={{ fontSize: '80px', marginBottom: '10px' }} 
          />
          
          <h1 style={{ fontSize: '32px', fontWeight: 'bold' }}>Bem-vindo!</h1>
          <p style={{ color: '#b0b0b0', marginBottom: '30px', maxWidth: '300px' }}>
            Explore as funcionalidades do seu primeiro aplicativo com Ionic e React.
          </p>
          
          <IonGrid fixed style={{ padding: '0', width: '100%' }}>
            <IonRow class="ion-justify-content-center">
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

          {/* NOVO: Cartão de Destaque adicionado aqui */}
          <IonCard style={{ marginTop: '30px', width: '100%', maxWidth: '500px', borderRadius: '15px' }}>
            <IonCardHeader>
              <IonCardSubtitle>Dica de Estudo</IonCardSubtitle>
              <IonCardTitle style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                <IonIcon icon={bulbOutline} color="warning" />
                Componentes Nativos
              </IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
              O Ionic oferece dezenas de componentes como este cartão! Eles adaptam-se automaticamente ao estilo visual do iOS e do Android.
            </IonCardContent>
          </IonCard>
          
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;