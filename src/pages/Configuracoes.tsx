import React from 'react';
import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonButtons, 
  IonBackButton,
  IonList,
  IonItem,
  IonLabel,
  IonToggle,
  IonIcon
} from '@ionic/react';
import { notificationsOutline, moonOutline, lockClosedOutline } from 'ionicons/icons';

const Configuracoes: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
          <IonTitle>Configurações</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonContent color="light">
        {/* A propriedade inset=true deixa a lista com os cantos arredondados, estilo iOS */}
        <IonList inset={true}>
          
          <IonItem>
            <IonIcon slot="start" icon={notificationsOutline} />
            <IonLabel>Notificações Push</IonLabel>
            <IonToggle slot="end" defaultChecked={true} />
          </IonItem>

          <IonItem>
            <IonIcon slot="start" icon={moonOutline} />
            <IonLabel>Modo Escuro Automático</IonLabel>
            <IonToggle slot="end" defaultChecked={true} />
          </IonItem>

          <IonItem>
            <IonIcon slot="start" icon={lockClosedOutline} />
            <IonLabel>Conta Privada</IonLabel>
            <IonToggle slot="end" defaultChecked={false} />
          </IonItem>

        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Configuracoes;