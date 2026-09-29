import React from 'react';
import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonButtons, 
  IonBackButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonAvatar,
  IonItem,
  IonLabel,
  IonIcon,
  IonList
} from '@ionic/react';
import { mailOutline, schoolOutline, codeSlashOutline } from 'ionicons/icons';

const Perfil: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
          <IonTitle>Meu Perfil</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonContent className="ion-padding" color="light">
        
        {/* Avatar Centralizado */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          {/* Aumentámos um pouco o tamanho padrão do avatar */}
          <IonAvatar style={{ width: '100px', height: '100px' }}>
            <img alt="Foto de perfil" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
          </IonAvatar>
        </div>

        {/* Cartão de Informações Pessoais */}
        <IonCard style={{ marginTop: '20px', borderRadius: '15px' }}>
          <IonCardHeader className="ion-text-center">
            <IonCardTitle>Jaquelaine Ramos</IonCardTitle>
            <IonCardSubtitle>Desenvolvedora Mobile & Cyber Segurança</IonCardSubtitle>
          </IonCardHeader>

          <IonCardContent>
            {/* A propriedade lines="none" remove as linhas divisórias horizontais da lista */}
            <IonList lines="none">
              <IonItem>
                <IonIcon slot="start" icon={schoolOutline} color="primary" />
                <IonLabel>FATEC</IonLabel>
              </IonItem>
              
              <IonItem>
                <IonIcon slot="start" icon={codeSlashOutline} color="primary" />
                <IonLabel>Kotlin, React Native e Ionic</IonLabel>
              </IonItem>

              <IonItem>
                <IonIcon slot="start" icon={mailOutline} color="primary" />
                <IonLabel>contato.jaquelaine@email.com</IonLabel>
              </IonItem>
            </IonList>
          </IonCardContent>
        </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default Perfil;