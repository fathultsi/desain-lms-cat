/* ============================================================================
   LMS-CAT · Store — sesi & percobaan ujian (localStorage)
   Tidak ada backend. Semua data bertahan di perangkat ini saja.
   ========================================================================== */
(function () {
  "use strict";

  var K_USER = "lmscat.user";
  var K_ATTEMPT = "lmscat.attempt";

  function read(key) {
    try {
      var raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }

  function write(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      /* mode privat / kuota penuh: abaikan, aplikasi tetap berjalan di memori */
    }
  }

  window.LMSStore = {
    getUser: function () { return read(K_USER); },

    setUser: function (user) {
      write(K_USER, {
        name: user.name || "",
        email: user.email || "",
        createdAt: new Date().toISOString()
      });
    },

    signOut: function () {
      localStorage.removeItem(K_USER);
      localStorage.removeItem(K_ATTEMPT);
    },

    getAttempt: function () { return read(K_ATTEMPT); },
    saveAttempt: function (attempt) { write(K_ATTEMPT, attempt); },
    clearAttempt: function () { localStorage.removeItem(K_ATTEMPT); },

    /* --- util kecil yang dipakai beberapa halaman --- */
    initials: function (name) {
      var parts = (name || "").trim().split(/\s+/).filter(Boolean);
      if (!parts.length) return "?";
      if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    },

    requireAuth: function (redirectTo) {
      if (!read(K_USER)) {
        window.location.replace(redirectTo || "../masuk/index.html");
        return false;
      }
      return true;
    }
  };
})();
