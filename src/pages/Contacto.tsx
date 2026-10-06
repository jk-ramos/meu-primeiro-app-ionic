import React, { useState } from 'react';
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
  IonList,
  IonItem,
  IonIcon,
  IonLabel,
  IonInput,
  IonTextarea,
  IonButton,
  IonToast,
  IonModal
} from '@ionic/react';
import { 
  mailOutline, 
  callOutline, 
  logoGithub, 
  logoLinkedin, 
  qrCodeOutline,
  sendOutline,
  arrowBackOutline,
  copyOutline,
  closeOutline
} from 'ionicons/icons';

const Contacto: React.FC = () => {
  const [mensagem, setMensagem] = useState('');
  const [nome, setNome] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [showModal, setShowModal] = useState(false);

  // Função para simular o envio da mensagem
  const enviarMensagem = () => {
    setToastMessage('Mensagem enviada com sucesso (Simulação)!');
    setShowToast(true);
    setNome('');
    setMensagem('');
  };

  // Função para copiar texto para a área de transferência 
  const copiarTexto = (texto: string, rotulo: string) => {
    navigator.clipboard.writeText(texto);
    setToastMessage(`${rotulo} copiado para a área de transferência!`);
    setShowToast(true);
  };

  // Validação: Botão só fica ativo se ambos os campos tiverem texto 
  const isFormValido = nome.trim() !== '' && mensagem.trim() !== '';

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          {/* Botão de Seta alinhado à esquerda */}
          <IonButtons slot="start" style={{ paddingLeft: '16px' }}>
            <IonBackButton 
              defaultHref="/apresentacao" 
              text="" 
              icon={arrowBackOutline}
              style={{ color: '#2b2b2b', fontSize: '20px' }}
            />
          </IonButtons>
          <IonTitle>Contato</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        
        {/* Card de Canais Diretos com Botões de Copiar */}
        <IonCard style={{ border: '1px solid #B8DB80' }}>
          <IonCardHeader>
            <IonCardSubtitle style={{ color: '#88a850', fontWeight: 'bold' }}>MOCKUP DE LIGAÇÃO</IonCardSubtitle>
            <IonCardTitle>Canais Diretos</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonList lines="full">
              {/* E-mail com opção de copiar */}
              <IonItem>
                <IonIcon slot="start" icon={mailOutline} style={{ color: '#88a850' }} />
                <IonLabel>
                  <h3>E-mail</h3>
                  <p>jak.ramos@exemplo.com</p>
                </IonLabel>
                <IonButton 
                  fill="clear" 
                  slot="end" 
                  onClick={() => copiarTexto('jak.ramos@exemplo.com', 'E-mail')}
                  title="Copiar E-mail"
                >
                  <IonIcon icon={copyOutline} style={{ color: '#88a850' }} />
                </IonButton>
              </IonItem>

              {/* Telefone com opção de copiar */}
              <IonItem>
                <IonIcon slot="start" icon={callOutline} style={{ color: '#88a850' }} />
                <IonLabel>
                  <h3>Telefone / WhatsApp</h3>
                  <p>+351 912 345 678</p>
                </IonLabel>
                <IonButton 
                  fill="clear" 
                  slot="end" 
                  onClick={() => copiarTexto('+351 912 345 678', 'Telefone')}
                  title="Copiar Telefone"
                >
                  <IonIcon icon={copyOutline} style={{ color: '#88a850' }} />
                </IonButton>
              </IonItem>

              <IonItem button href="https://github.com/jk-ramos" target="_blank">
                <IonIcon slot="start" icon={logoGithub} style={{ color: '#2b2b2b' }} />
                <IonLabel>
                  <h3>GitHub</h3>
                  <p>github.com/jk-ramos</p>
                </IonLabel>
              </IonItem>

              <IonItem button>
                <IonIcon slot="start" icon={logoLinkedin} style={{ color: '#88a850' }} />
                <IonLabel>
                  <h3>LinkedIn</h3>
                  <p>linkedin.com/in/jak-ramos-mock</p>
                </IonLabel>
              </IonItem>
            </IonList>
          </IonCardContent>
        </IonCard>

        {/* Card do QR Code Clicável para Zoom */}
        <IonCard style={{ textAlign: 'center', background: '#F7F6D3', border: '2px solid #B8DB80' }}>
          <IonCardHeader>
            <IonCardTitle style={{ fontSize: '18px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
              <IonIcon icon={qrCodeOutline} style={{ color: '#88a850' }} />
              QR Code do Cartão Pessoal
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <div 
              onClick={() => setShowModal(true)} 
              style={{ cursor: 'pointer', display: 'inline-block', transition: 'transform 0.2s' }}
            >
              <img 
                src="https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=https://github.com/jk-ramos&color=2b2b2b&bgcolor=F7F6D3" 
                alt="QR Code de Contacto"
                style={{ borderRadius: '12px', padding: '8px', background: '#fff', border: '1px solid #B8DB80', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}
              />
            </div>
            <p style={{ fontSize: '12px', color: '#666', marginTop: '8px' }}>
              Toque no QR Code para ampliar
            </p>
          </IonCardContent>
        </IonCard>

        {/* Modal de Zoom do QR Code */}
        <IonModal 
          isOpen={showModal} 
          onDidDismiss={() => setShowModal(false)}
          style={{
            '--auto-height': 'true',
            '--border-radius': '16px',
            padding: '20px'
          }}
        >
          <div style={{ padding: '20px', textAlign: 'center', background: '#ffffff', borderRadius: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h2 style={{ margin: 0, fontSize: '18px', fontWeight: 'bold', color: '#2b2b2b' }}>QR Code Ampliado</h2>
              <IonButton fill="clear" onClick={() => setShowModal(false)} style={{ margin: 0 }}>
                <IonIcon icon={closeOutline} style={{ fontSize: '24px', color: '#2b2b2b' }} />
              </IonButton>
            </div>
            <img 
              src="https://api.qrserver.com/v1/create-qr-code/?size=260x260&data=https://github.com/jk-ramos&color=2b2b2b&bgcolor=FFFFFF" 
              alt="QR Code Ampliado"
              style={{ width: '220px', height: '220px', borderRadius: '12px', border: '2px solid #B8DB80' }}
            />
            <p style={{ fontSize: '13px', color: '#666', marginTop: '14px' }}>
              Aproxime a câmara do telemóvel para guardar o contacto.
            </p>
          </div>
        </IonModal>

        {/* Formulário com Validação de Botão */}
        <IonCard style={{ border: '1px solid #B8DB80' }}>
          <IonCardHeader>
            <IonCardTitle style={{ fontSize: '18px', color: '#2b2b2b' }}>Enviar Mensagem</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonItem style={{ marginBottom: '10px' }}>
              <IonInput 
                label="O seu Nome" 
                labelPlacement="floating" 
                value={nome}
                onIonInput={(e) => setNome(e.detail.value!)}
              />
            </IonItem>

            <IonItem style={{ marginBottom: '15px' }}>
              <IonTextarea 
                label="Mensagem" 
                labelPlacement="floating" 
                rows={3}
                value={mensagem}
                onIonInput={(e) => setMensagem(e.detail.value!)}
              />
            </IonItem>

            <IonButton 
              expand="block" 
              color="secondary" 
              onClick={enviarMensagem}
              disabled={!isFormValido}
              style={{ fontWeight: 'bold', height: '48px', borderRadius: '10px' }}
            >
              <IonIcon slot="start" icon={sendOutline} />
              Enviar Mensagem
            </IonButton>
          </IonCardContent>
        </IonCard>

        {/* Notificação dinâmica (Toast) */}
        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message={toastMessage}
          duration={2500}
          color="secondary"
          position="bottom"
        />

      </IonContent>
    </IonPage>
  );
};

export default Contacto;