import React from 'react';
import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonCard, 
  IonCardHeader, 
  IonCardTitle, 
  IonCardSubtitle, 
  IonCardContent, 
  IonChip, 
  IonIcon, 
  IonLabel,
  IonButton
} from '@ionic/react';
import { 
  codeSlashOutline, 
  sparklesOutline, 
  arrowForwardOutline,
  bookOutline,
  laptopOutline
} from 'ionicons/icons';

const Apresentacao: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Portfólio | Jak Ramos</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        
        {/* Cabeçalho do Perfil */}
        <div style={{ textAlign: 'center', marginTop: '15px', marginBottom: '20px' }}>
          <img 
            src="/assets/perfilimg.jpg" 
            alt="Jak Ramos" 
            style={{
              width: '140px',
              height: '140px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '4px solid #B8DB80',
              boxShadow: '0 6px 16px rgba(0,0,0,0.12)'
            }}
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://ionicframework.com/docs/img/demos/avatar.ionic.png';
            }}
          />
          <h1 style={{ fontSize: '26px', fontWeight: 'bold', marginTop: '12px', color: '#2b2b2b' }}>
            Jak Ramos
          </h1>
          <p style={{ color: '#555', fontSize: '15px', marginTop: '-5px' }}>
            Mente Lógica • Alma Criativa 💡
          </p>
        </div>

        {/* Card Sobre Mim */}
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle style={{ color: '#88a850' }}>Apresentação</IonCardSubtitle>
            <IonCardTitle style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <IonIcon icon={sparklesOutline} color="primary" />
              Sobre Mim
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Desenvolvedora focada em criar interfaces mobile modernas, funcionais e intuitivas. Apaixonada por transformar ideias e lógica de programação em soluções visuais incríveis.
          </IonCardContent>
        </IonCard>

        {/* Card Tecnologias / Skills */}
        <IonCard style={{ background: '#F7F6D3', border: '1px solid #B8DB80' }}>
          <IonCardHeader>
            <IonCardTitle style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '18px' }}>
              <IonIcon icon={codeSlashOutline} style={{ color: '#88a850' }} />
              Tecnologias & Competências
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              <IonChip style={{ background: '#B8DB80', color: '#2b2b2b' }}>
                <IonIcon icon={laptopOutline} />
                <IonLabel>React & Ionic</IonLabel>
              </IonChip>
              <IonChip style={{ background: '#F39EB6', color: '#2b2b2b' }}>
                <IonLabel>TypeScript</IonLabel>
              </IonChip>
              <IonChip style={{ background: '#FFE4EF', color: '#2b2b2b' }}>
                <IonLabel>HTML5 & CSS3</IonLabel>
              </IonChip>
              <IonChip style={{ background: '#B8DB80', color: '#2b2b2b' }}>
                <IonIcon icon={bookOutline} />
                <IonLabel>Estruturas de Dados</IonLabel>
              </IonChip>
              <IonChip style={{ background: '#F39EB6', color: '#2b2b2b' }}>
                <IonLabel>Design Patterns</IonLabel>
              </IonChip>
            </div>
          </IonCardContent>
        </IonCard>

        {/* Botão de Ação para a próxima página */}
        <div style={{ marginTop: '25px', padding: '0 10px' }}>
          <IonButton 
            expand="block" 
            routerLink="/contacto" 
            color="primary"
            style={{ height: '50px', borderRadius: '12px', fontWeight: 'bold' }}
          >
            Ver Informações de Contacto
            <IonIcon slot="end" icon={arrowForwardOutline} />
          </IonButton>
        </div>

      </IonContent>
    </IonPage>
  );
};

export default Apresentacao;