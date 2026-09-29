import React from 'react';
import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar, 
  IonButtons, 
  IonBackButton,
  IonItem,
  IonInput,
  IonTextarea,
  IonButton,
  IonList
} from '@ionic/react';

const Detalhes: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
          <IonTitle>Detalhes do Projeto</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonContent className="ion-padding">
        <h2>Registo de Nova Tarefa 📝</h2>
        <p>Preencha os dados abaixo para detalhar uma nova atividade.</p>

        {/* Lista para agrupar os campos do formulário */}
        <IonList lines="full" style={{ marginTop: '20px', borderRadius: '10px' }}>
          
          <IonItem>
            {/* labelPlacement="floating" faz com que o título suba quando clicamos no campo */}
            <IonInput 
              label="Nome da Tarefa" 
              labelPlacement="floating" 
              placeholder="Ex: Configurar base de dados">
            </IonInput>
          </IonItem>

          <IonItem>
            <IonInput 
              label="Responsável" 
              labelPlacement="floating" 
              placeholder="Ex: Jaquelaine">
            </IonInput>
          </IonItem>

          <IonItem>
            <IonTextarea 
              label="Descrição Detalhada" 
              labelPlacement="floating" 
              placeholder="Descreva os requisitos técnicos aqui..." 
              rows={4}>
            </IonTextarea>
          </IonItem>

        </IonList>

        {/* Botão com expand="block" ocupa toda a largura disponível do ecrã */}
        <IonButton expand="block" style={{ marginTop: '25px' }}>
          Guardar Registo
        </IonButton>

      </IonContent>
    </IonPage>
  );
};

export default Detalhes;