@echo off
echo ===================================================
echo Configuracao do Projeto Android - Calculadora de Salario
echo ===================================================
echo.

echo Instalando dependencias...
npm install

echo.
echo Criando diretorio www...
if not exist www mkdir www

echo.
echo Copiando arquivos para o diretorio www...
xcopy /E /Y index.html www\
xcopy /E /Y resultado.html www\
xcopy /E /Y manifest.json www\
xcopy /E /Y sw.js www\
xcopy /E /Y index.js www\
xcopy /E /Y /I icons www\icons\

echo.
echo Inicializando o projeto Capacitor...
npx cap init salario-calculator com.rpjdigital.salario --web-dir www

echo.
echo Adicionando plataforma Android...
npx cap add android

echo.
echo Sincronizando arquivos com o projeto Android...
npx cap sync

echo.
echo ===================================================
echo Configuracao concluida!
echo.
echo Para abrir o projeto no Android Studio, execute:
echo npx cap open android
echo.
echo Para gerar o APK, no Android Studio va em:
echo Build ^> Build Bundle(s) / APK(s) ^> Build APK(s)
echo ===================================================

pause