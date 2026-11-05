// Se ejecuta antes del primer render para que el tema no parpadee. Va aparte y no en el HTML para permitir una CSP estricta.
(function () {
  var pref = 'sistema';
  try {
    pref = localStorage.getItem('tablero.tema') || 'sistema';
  } catch (e) {}
  var oscuro = pref === 'oscuro' || (pref === 'sistema' && window.matchMedia('(prefers-color-scheme: dark)').matches);
  document.documentElement.dataset.theme = oscuro ? 'dark' : 'light';
})();
