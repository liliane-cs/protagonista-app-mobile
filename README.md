# 📱 Protagoniza — App Mobile

Aplicativo mobile desenvolvido com **React Native + Expo**, voltado para **mulheres** que buscam conexões profissionais, oportunidades de crescimento, cursos, rede de apoio e visibilidade para seus serviços.

---

## ✨ Funcionalidades

- 🏠 **Home** — Saudação personalizada, banner, evento do mês, mapa de profissionais e leitura da comunidade (busca de livros via Open Library)
- 👩‍💼 **Profissionais** — Listagem e detalhes de mulheres profissionais de diversas áreas
- 💼 **Oportunidades** — Freelas, contratos e parcerias disponíveis
- 📚 **Cursos** — Conteúdos educacionais para desenvolvimento profissional
- 🤝 **Rede de Apoio** — Troca de experiências e indicações entre mulheres
- 👤 **Meu Perfil** — Gerenciamento de dados do usuário logado
- 🔐 **Autenticação** — Login e cadastro com sessão persistida via AsyncStorage e integração com Supabase

---

## 🛠️ Tecnologias

| Categoria | Tecnologia |
|---|---|
| Framework | React Native 0.81.5 + Expo ~54 |
| Linguagem | TypeScript 5.9 |
| Navegação | React Navigation (Stack + Bottom Tabs + Drawer) |
| Autenticação | Supabase + Expo Auth Session |
| HTTP Client | Axios |
| Validação | Zod |
| Mapas | React Native Maps |
| Animações | Lottie React Native |
| Fontes | Expo Google Fonts (Libre Caslon Text + Plus Jakarta Sans) |
| Storage local | AsyncStorage |
| QR Code | React Native QRCode SVG |

---

## 📁 Estrutura do Projeto

```
protagonista-app-mobile/
├── assets/                  # Imagens e ícones do app
├── src/
│   ├── assets/              # Animações Lottie e imagens internas
│   ├── components/          # Componentes reutilizáveis
│   │   ├── Button/
│   │   ├── Card/
│   │   ├── Error/
│   │   ├── EventoDoMes/
│   │   ├── Form/
│   │   ├── IconeCard/
│   │   ├── Loading/
│   │   ├── MapaProfissionais/
│   │   └── QrCode/
│   ├── contexts/            # Contextos globais (Auth, Busca, Favoritos)
│   ├── data/                # Dados mockados (coordenadas)
│   ├── hook/                # Hooks customizados
│   ├── pages/               # Telas do aplicativo
│   │   ├── Cadastro/
│   │   ├── Cursos/
│   │   ├── DetalheProfissional/
│   │   ├── DetalheOportunidade/
│   │   ├── Favoritos/
│   │   ├── Home/
│   │   ├── Login/
│   │   ├── MeuPerfil/
│   │   ├── Oportunidades/
│   │   ├── Profissionais/
│   │   ├── RedeApoio/
│   │   ├── Splash/
│   │   └── TelaInicial/
│   ├── routers/             # Configuração de rotas (Stack + Tabs)
│   ├── schema/              # Schemas de validação (Zod)
│   ├── services/            # Chamadas às APIs externas
│   ├── styles/              # Tema e estilos globais
│   └── types/               # Tipagens TypeScript
├── App.tsx
├── app.json
├── package.json
└── tsconfig.json
```

---

## 🚀 Como rodar o projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) >= 18
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- Aplicativo **Expo Go** no celular (iOS ou Android) **ou** emulador configurado

### Instalação

```bash
# Clone o repositório
git clone https://github.com/liliane-cs/protagonista-app-mobile.git

# Acesse a pasta do projeto
cd protagonista-app-mobile

# Instale as dependências
npm install
```

### Variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
EXPO_PUBLIC_SUPABASE_URL=sua_url_do_supabase
EXPO_PUBLIC_SUPABASE_ANON_KEY=sua_chave_anonima_do_supabase
EXPO_PUBLIC_REDIRECT_URL=exp://localhost:8081/--/login
```

> ⚠️ Nunca suba o arquivo `.env` para o repositório. Ele já está listado no `.gitignore`.

### Executando

```bash
# Inicia o servidor de desenvolvimento
npm start

# Rodar no Android
npm run android

# Rodar no iOS
npm run ios

# Rodar na Web
npm run web
```

---

## 🌐 APIs utilizadas

| API | Finalidade |
|---|---|
| MockAPI (profissionais) | CRUD de profissionais e rede de apoio |
| MockAPI (cursos) | Listagem de cursos e oportunidades |
| Open Library | Busca e indicação de livros |
| Supabase | Autenticação de usuários |

---

## 📸 Telas

| Splash | Home | Profissionais |
|---|---|---|
| Tela de boas-vindas com animação | Saudação, evento do mês, mapa e livros | Lista de profissionais por área |

| Oportunidades | Cursos | Meu Perfil |
|---|---|---|
| Freelas e contratos disponíveis | Conteúdos educacionais | Dados e edição do perfil |

---

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature: `git checkout -b feature/minha-feature`
3. Commit suas alterações: `git commit -m 'feat: adiciona minha feature'`
4. Faça push para a branch: `git push origin feature/minha-feature`
5. Abra um Pull Request

---

## 📄 Licença

Este projeto é privado e de uso restrito.

---

Feito com 💜 para empoderar mulheres.
