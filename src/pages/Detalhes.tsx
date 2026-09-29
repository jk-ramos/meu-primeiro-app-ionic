import React, { useState } from 'react'; // IMPORTANTE: Adicionámos o useState aqui
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
  IonList,
  IonToast // Adicionámos o componente de notificação
} from '@ionic/react';

const Detalhes: React.FC = () => {
  // 1. Criar os 'estados' para guardar o texto de cada campo
  const [nomeTarefa, setNomeTarefa] = useState('');
  const [responsavel, setResponsavel] = useState('');
  const [descricao, setDescricao] = useState('');
  
  // 2. Estado para controlar se o Toast (mensagem de sucesso) está visível ou escondido
  const [mostrarToast, setMostrarToast] = useState(false);

  // 3. Função que será executada quando clicarmos no botão
  const guardarDados = () => {
    // Aqui mostramos os dados na consola do navegador (como se estivéssemos a enviar para uma base de dados)
    console.log('Dados a guardar:', { nomeTarefa, responsavel, descricao });
    
    // Mostra a notificação verde
    setMostrarToast(true);
    
    // Limpa os campos do formulário para ficarem vazios de novo
    setNomeTarefa('');
    setResponsavel('');
    setDescricao('');
  };

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

        <IonList lines="full" style={{ marginTop: '20px', borderRadius: '10px' }}>
          
          <IonItem>
            <IonInput 
              label="Nome da Tarefa" 
              labelPlacement="floating" 
              placeholder="Ex: Configurar base de dados"
              value={nomeTarefa} // Liga o campo ao nosso estado
              onIonInput={(e) => setNomeTarefa(e.detail.value!)} // Atualiza o estado ao escrever
            ></IonInput>
          </IonItem>

          <IonItem>
            <IonInput 
              label="Responsável" 
              labelPlacement="floating" 
              placeholder="Ex: Jaquelaine"
              value={responsavel}
              onIonInput={(e) => setResponsavel(e.detail.value!)}
            ></IonInput>
          </IonItem>

          <IonItem>
            <IonTextarea 
              label="Descrição Detalhada" 
              labelPlacement="floating" 
              placeholder="Descreva os requisitos técnicos aqui..." 
              rows={4}
              value={descricao}
              onIonInput={(e) => setDescricao(e.detail.value!)}
            ></IonTextarea>
          </IonItem>

        </IonList>

        {/* 4. Ligámos a nossa função 'guardarDados' ao evento onClick do botão */}
        <IonButton expand="block" style={{ marginTop: '25px' }} onClick={guardarDados}>
          Guardar Registo
        </IonButton>

        {/* 5. O nosso componente de notificação (Toast) escondido */}
        <IonToast
          isOpen={mostrarToast}
          onDidDismiss={() => setMostrarToast(false)} // Esconde o Toast quando ele termina
          message="Tarefa guardada com sucesso!"
          duration={2500} // Fica visível durante 2.5 segundos
          color="success" // Cor verde nativa
          position="bottom" // Aparece na parte inferior
        />

      </IonContent>
    </IonPage>
  );
};

export default Detalhes;