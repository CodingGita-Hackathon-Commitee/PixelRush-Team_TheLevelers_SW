document.querySelectorAll('.show').forEach(function (b) {
  b.addEventListener('click', function () {
    var i = b.parentNode.querySelector('input'), s = i.type === 'password';
    i.type = s ? 'text' : 'password'; b.textContent = s ? 'Hide' : 'Show';
  });
});
var f = document.querySelector('form');
f.addEventListener('submit', function (e) {
  e.preventDefault();
  var t = document.getElementById('toast'); t.textContent = f.dataset.msg; t.classList.add('on');
  setTimeout(function () { t.classList.remove('on') }, 2200);
});
