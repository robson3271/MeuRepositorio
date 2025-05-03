# Guia de Instalação do Aplicativo Android

## Passo a Passo para Gerar o APK

Siga estas instruções para transformar a Calculadora de Salário em um aplicativo Android e gerar o arquivo APK para instalação.

### Requisitos

- Node.js instalado (versão 14 ou superior)
- Android Studio instalado
- JDK 11 ou superior

### Passos para Gerar o APK

1. **Configuração Inicial**

   Execute o arquivo `setup-android.bat` com um duplo clique. Este script irá:
   - Instalar todas as dependências necessárias
   - Criar e configurar o projeto Android
   - Preparar todos os arquivos para a compilação

2. **Abrir no Android Studio**

   Após a conclusão do script, execute o comando:
   ```
   npx cap open android
   ```
   Isso abrirá o projeto no Android Studio.

3. **Gerar o APK**

   No Android Studio:
   - Clique em **Build** no menu superior
   - Selecione **Build Bundle(s) / APK(s)**
   - Escolha **Build APK(s)**
   - Aguarde a compilação terminar

4. **Localizar o APK**

   O arquivo APK será gerado em:
   ```
   android/app/build/outputs/apk/debug/app-debug.apk
   ```

5. **Instalar no Dispositivo**

   - Transfira o arquivo APK para seu dispositivo Android
   - No dispositivo, toque no arquivo para instalar
   - Pode ser necessário permitir a instalação de fontes desconhecidas nas configurações

### Solução de Problemas

- **Erro de compilação**: Verifique se o Android Studio e o JDK estão corretamente instalados
- **Erro de dependências**: Execute `npm install` novamente
- **Aplicativo não abre**: Verifique se o dispositivo tem Android 5.0 ou superior

### Observações

- O aplicativo mantém a mesma interface e funcionalidade da versão web
- Não é necessária conexão com internet para utilizar o aplicativo
- Todos os cálculos são realizados localmente no dispositivo

### Suporte

Em caso de dúvidas ou problemas, entre em contato com RPJ Digital.