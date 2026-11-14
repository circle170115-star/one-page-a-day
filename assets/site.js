/* One Page a Day — small enhancements only; the site works without JS. */
(function () {
  function closeAll(except) {
    var open = document.querySelectorAll("details[open]");
    for (var i = 0; i < open.length; i++) {
      if (open[i] !== except) open[i].open = false;
    }
  }

  // one dropdown open at a time
  var all = document.querySelectorAll("details");
  for (var i = 0; i < all.length; i++) {
    all[i].addEventListener("toggle", function () {
      if (this.open) closeAll(this);
    });
  }

  document.addEventListener("click", function (e) {
    var target = e.target;
    if (target && target.closest) {
      var langLink = target.closest("[data-lang]");
      if (langLink) {
        try {
          window.localStorage.setItem("onePageLang", langLink.getAttribute("data-lang"));
        } catch (err) {}
      }
      if (!target.closest("details")) closeAll(null);
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeAll(null);
  });
})();
