document.addEventListener('DOMContentLoaded', () => {
    if (window.Telegram?.WebApp) {
      const webApp = window.Telegram.WebApp;
  
      // Expand the Mini App
      document.getElementById('expand').addEventListener('click', () => {
        webApp.requestFullscreen();
        console.log('Fullscreen requested.');
      });
  
      // Close the Mini App
      document.getElementById('close').addEventListener('click', () => {
        webApp.close();
        console.log('Mini App closed.');
      });
  
      // Display Mini App information
      const output = document.getElementById('output');
      output.textContent = JSON.stringify({
        initData: webApp.initData,
        initDataUnsafe: webApp.initDataUnsafe,
        platform: webApp.platform,
        colorScheme: webApp.colorScheme,
        isExpanded: webApp.isExpanded,
        isActive: webApp.isActive,
        safAreaInset: webApp.safAreaInset,
      }, null, 2);
  
      console.log('Web App initialized:', webApp);
    } else {
      console.error('Telegram WebApp is not available.');
      alert('This app is meant to be opened inside Telegram.');
    }
  });
  