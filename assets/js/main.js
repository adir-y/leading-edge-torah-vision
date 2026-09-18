// Leading Edge Torah — Full/Condensed edition toggle for Section IV.
(function () {
  var toggle = document.querySelector('.edition-toggle');
  if (!toggle) return;

  var buttons = toggle.querySelectorAll('button[data-edition]');
  var fullEls = document.querySelectorAll('[data-edition-content="full"]');
  var condensedEls = document.querySelectorAll('[data-edition-content="condensed"]');

  function setEdition(edition) {
    buttons.forEach(function (b) {
      b.classList.toggle('active', b.dataset.edition === edition);
    });
    fullEls.forEach(function (el) {
      el.style.display = edition === 'full' ? '' : 'none';
    });
    condensedEls.forEach(function (el) {
      el.style.display = edition === 'condensed' ? '' : 'none';
    });
    try { localStorage.setItem('le-torah-edition', edition); } catch (e) {}
  }

  buttons.forEach(function (b) {
    b.addEventListener('click', function () { setEdition(b.dataset.edition); });
  });

  var saved;
  try { saved = localStorage.getItem('le-torah-edition'); } catch (e) {}
  setEdition(saved === 'condensed' ? 'condensed' : 'full');
})();
