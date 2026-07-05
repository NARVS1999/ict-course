// Auto-builds prev/next buttons from window.LESSONS.
// Include this script in every lesson page (after lessons-data.js).
(function() {
  if (!window.LESSONS || !LESSONS.length) return;

  var nav = document.querySelector('.lesson-nav');
  if (!nav) return;

  // Extract the current lesson ID from the filename.
  // Convention: filename starts with the ID followed by a dash,
  // e.g. "0001-lesson-name.html" → id "0001".
  var filename = window.location.pathname.split('/').pop() || '';
  var currentId = filename.split('-')[0];
  var currentIdx = -1;

  for (var i = 0; i < LESSONS.length; i++) {
    if (LESSONS[i].id === currentId) { currentIdx = i; break; }
  }

  if (currentIdx < 0) return;

  var html = '';

  if (currentIdx > 0) {
    var prev = LESSONS[currentIdx - 1];
    html += '<a href="' + prev.file + '" class="nav-link nav-prev">\u2190 Previous: ' + prev.title + '</a>';
  }

  if (currentIdx < LESSONS.length - 1) {
    var next = LESSONS[currentIdx + 1];
    var cls = currentIdx === 0 ? 'nav-link nav-next nav-link-only' : 'nav-link nav-next';
    html += '<a href="' + next.file + '" class="' + cls + '">Next: ' + next.title + ' \u2192</a>';
  }

  nav.innerHTML = html;
})();
