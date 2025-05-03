import { Capacitor } from '@capacitor/core';

// Inicializa o aplicativo
document.addEventListener('DOMContentLoaded', function() {
    // Registra o service worker (funciona tanto na web quanto no app nativo)
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js')
            .then(function(registration) {
                console.log('Service Worker registrado com sucesso:', registration.scope);
            })
            .catch(function(error) {
                console.log('Falha ao registrar o Service Worker:', error);
            });
    }
    
    // Detecta se está rodando como aplicativo nativo
    const isNative = Capacitor.isNativePlatform();
    
    // Ajusta comportamentos específicos para plataforma nativa se necessário
    if (isNative) {
        // Adiciona classe ao body para possíveis ajustes CSS específicos para Android
        document.body.classList.add('native-android');
        
        // Desativa alguns comportamentos específicos da web se necessário
        console.log('Executando como aplicativo Android nativo');
    }
});

// Exporta funções que podem ser usadas em outros arquivos
export function isNativePlatform() {
    return Capacitor.isNativePlatform();
}