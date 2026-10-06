# 📱 Portfólio Pessoal - Ionic & React

Um aplicativo mobile de portfólio pessoal minimalista desenvolvido com **Ionic Framework** e **React** (TypeScript). O projeto possui uma estrutura de duas páginas focada em apresentação profissional e canais de contacto interativos.

---

## 🎨 Paleta de Cores (Pastel Aesthetic)

| Cor | Hex | Aplicação no Layout |
| :--- | :--- | :--- |
| **Rosé** | `#F39EB6` | Cor primária (`--ion-color-primary`), toolbars e elementos em destaque |
| **Menta** | `#B8DB80` | Cor secundária (`--ion-color-secondary`), bordas, ícones e botões |
| **Creme** | `#F7F6D3` | Fundo principal da aplicação (`--ion-background-color`) |
| **Rosa Claro** | `#FFE4EF` | Fundo dos cartões (`IonCard`) e detalhes de contraste |

---

## 🚀 Funcionalidades

### 1. Página de Apresentação (`/apresentacao`)
- **Cabeçalho de Perfil:** Fotografia circular personalizada com sombra e borda temática.
- **Sobre Mim:** Cartão descritivo com resumo profissional.
- **Tecnologias & Competências:** Mapeamento de habilidades utilizando `IonChip` e ícones do `Ionicons` (React, TypeScript, Ionic, Estruturas de Dados, Design Patterns).
- **Navegação Fluida:** Botão de ação integrado ao `React Router` para direcionamento direto à página de contactos.

### 2. Página de Contactos (`/contacto`)
- **Canais Diretos (Mockup):** Lista de redes sociais e meios de contacto (E-mail, Telefone, GitHub, LinkedIn).
- **Cópia Rápida (Clipboard):** Botão para copiar e-mail e telefone com um clique e feedback visual via `IonToast`.
- **QR Code Interativo:** Gerador estático de QR Code com suporte a **Zoom em Modal** (`IonModal`) ao clicar.
- **Formulário de Mensagem Interativo:**
  - Gerenciamento de estado em tempo real com o hook `useState`.
  - Validação inteligente: o botão só é habilitado se ambos os campos (Nome e Mensagem) forem preenchidos.
  - Feedback de envio simulado via notificação nativa (`IonToast`).
- **Navegação de Retorno:** Seta alinhada no canto superior esquerdo com `<IonBackButton>`.

---

## 🛠️ Tecnologias Utilizadas

- **[Ionic Framework](https://ionicframework.com/):** Componentes UI mobile nativos (`IonPage`, `IonCard`, `IonModal`, `IonToast`, `IonChip`, `IonButton`, etc.)
- **[React](https://react.dev/):** Biblioteca principal com TypeScript
- **[React Router v6](https://reactrouter.com/):** Gerenciamento de rotas e navegação SPA
- **[Ionicons](https://ionic.io/ionicons):** Pacote de ícones vetoriais
- **CSS3 / Variables:** Customização global do tema no arquivo `variables.css`

---

## 📂 Estrutura do Projeto

```text
meu-app/
├── public/
│   └── assets/
│       └── perfilimg.jpg      # Foto de perfil
├── src/
│   ├── pages/
│   │   ├── Apresentacao.tsx   # Página 1: Perfil e Competências
│   │   └── Contacto.tsx       # Página 2: Canais, QR Code e Formulário
│   ├── theme/
│   │   └── variables.css      # Variáveis de cores e estilo global
│   ├── App.tsx                # Configuração do React Router v6
│   └── main.tsx               # Ponto de entrada da aplicação
└── package.json

```

---
## ⚙️ Como Executar o Projeto
Clone o repositório:

Bash
git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)
Acesse a pasta do projeto:

Bash
cd meu-app
Instale as dependências:

Bash
npm install
Inicie o servidor de desenvolvimento:

Bash
ionic serve
A aplicação estará disponível no navegador em http://localhost:8100.

## 👤 Autoria
Desenvolvido por Jak Ramos

Mente Lógica • Alma Criativa 💡
