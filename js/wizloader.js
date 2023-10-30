if (!isSecureContext) {  
  location.protocol = 'http:';
}
(async() => {
  window.addEventListener('load', () => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('sw.js');
    }
  });
  
  if (window.matchMedia('(display-mode: standalone)').matches) {
    document.querySelector('#install').hidden = true;
    document.querySelector('#protocol').hidden = false;
  }
  
  const search = decodeURIComponent(location.search);
  if (search.includes('bitcoin')) {
    alert(search);
    document.querySelector('#avmframe').hidden = false;
  } else if (search.includes('otsl')) {
    alert(search);
    document.querySelector('#ottframe').hidden = false;
  }
  
  document.querySelector('button').addEventListener('click', () => {
    navigator.registerProtocolHandler('bitcoin', '?raw=%s#verify');
    navigator.registerProtocolHandler('otsl', '?raw=%s#verify');
  });
})();
