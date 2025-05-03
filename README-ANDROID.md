# Instruções para Transformação em Aplicativo Android

Este documento contém as instruções para transformar o projeto da Calculadora de Salário em um aplicativo Android nativo usando o framework Capacitor.

## Pré-requisitos

- Node.js (versão 14 ou superior)
- NPM (versão 6 ou superior)
- Android Studio
- JDK 11 ou superior
- Variáveis de ambiente configuradas para Android SDK

## Passos para Instalação

### 1. Instalar Dependências

```bash
npm install
```

Este comando instalará todas as dependências necessárias definidas no arquivo package.json, incluindo o Capacitor e suas dependências.

### 2. Inicializar o Projeto Capacitor

```bash
npm run cap:init
```

Este comando inicializará o projeto Capacitor com o ID do aplicativo e o diretório web configurados.

### 3. Preparar Arquivos para o Build

```bash
npm run copy
```

Este comando copiará todos os arquivos necessários para o diretório www, que será usado pelo Capacitor.

### 4. Adicionar Plataforma Android

```bash
npm run cap:add
```

Este comando adicionará a plataforma Android ao projeto Capacitor.

### 5. Sincronizar Arquivos com o Projeto Android

```bash
npm run build
```

Este comando sincronizará os arquivos web com o projeto Android.

### 6. Abrir o Projeto no Android Studio

```bash
npm run cap:open
```

Este comando abrirá o projeto Android no Android Studio, onde você poderá fazer ajustes específicos da plataforma, se necessário.

### 7. Gerar o APK

No Android Studio:
1. Selecione "Build" > "Build Bundle(s) / APK(s)" > "Build APK(s)"
2. Ou use o comando:

```bash
npm run cap:build
```

O APK gerado estará disponível em `android/app/build/outputs/apk/debug/app-debug.apk`

## Estrutura do Projeto

- `www/`: Contém os arquivos web que serão empacotados no aplicativo Android
- `android/`: Contém o projeto Android gerado pelo Capacitor
- `capacitor.config.ts`: Configurações do Capacitor
- `package.json`: Dependências e scripts do projeto

## Observações Importantes

1. A interface e a lógica da aplicação permanecem as mesmas do projeto web original
2. O Service Worker (sw.js) continua funcionando no aplicativo Android
3. O manifesto (manifest.json) é usado pelo Capacitor para configurar o aplicativo
4. Os ícones são automaticamente redimensionados pelo Capacitor para os tamanhos necessários no Android

## Arquivos Excluídos

Os seguintes arquivos não são necessários para o aplicativo Android, mas foram mantidos para compatibilidade com a versão web:

- `.gitignore`: Mantido para controle de versão

## Suporte

Para suporte ou dúvidas, entre em contato com RPJ Digital.