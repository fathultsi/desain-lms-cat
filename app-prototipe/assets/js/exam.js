/* ============================================================================
   LMS-CAT · Mesin ujian
   Timer berbasis endsAt (tahan refresh), autosave, pencatatan waktu per soal.
   ========================================================================== */
(function () {
  "use strict";

  var Data = window.LMSExamData;
  var Store = window.LMSStore;
  var QS = Data.questions;
  var TOTAL = QS.length;
  var CFG = Data.config;

  /* mode demo: ?dev=1 menyiapkan sesi contoh agar alur bisa dicoba tanpa mendaftar */
  var devMode = /[?&]dev=1/.test(window.location.search);
  var autoDemo = /[?&]auto=1/.test(window.location.search);
  if (devMode && !Store.getUser()) {
    Store.setUser({ name: "Nadia Putri", email: "nadia@email.com" });
  }

  if (!Store.requireAuth("../masuk/index.html")) return;

  var $ = function (id) { return document.getElementById(id); };

  /* ------------------------------ state ------------------------------ */
  var attempt = Store.getAttempt();
  var resuming = !!(attempt && attempt.answers && !attempt.submittedAt);

  if (!attempt || attempt.submittedAt || !resuming) {
    attempt = {
      id: "att_" + Date.now(),
      startedAt: new Date().toISOString(),
      endsAt: Date.now() + CFG.durationSec * 1000,
      answers: {},
      flagged: {},
      timeSpent: {},
      submittedAt: null
    };
    Store.saveAttempt(attempt);
    resuming = false;
  }

  var current = 0;
  if (resuming) {
    for (var i = 0; i < TOTAL; i++) {
      if (!attempt.answers[QS[i].id]) { current = i; break; }
    }
  }

  /* ------------------------------ elemen ------------------------------ */
  var elQNumber = $("qNumber");
  var elQText = $("qText");
  var elOpts = $("qOpts");
  var elGrid = $("qgrid");
  var elFlag = $("flagBtn");
  var elFlagLabel = $("flagLabel");
  var elClock = $("clock");
  var elTimer = $("timer");
  var elRail = $("progressBar");
  var elSideCount = $("sideCount");
  var elNavCount = $("navcountTxt");
  var elMSoal = $("mSoal");
  var elCat = $("qCat");

  var LETTERS = ["A", "B", "C", "D", "E"];
  var submitting = false;

  /* ------------------------------ render ------------------------------ */
  function counts() {
    var a = 0, f = 0;
    for (var i = 0; i < TOTAL; i++) {
      if (attempt.answers[QS[i].id] !== undefined) a++;
      if (attempt.flagged[QS[i].id]) f++;
    }
    return { ans: a, empty: TOTAL - a, flag: f };
  }

  function renderGrid() {
    var html = "";
    for (var i = 0; i < TOTAL; i++) {
      var q = QS[i];
      var cls = "qbtn";
      if (attempt.answers[q.id] !== undefined) cls += " is-answered";
      if (attempt.flagged[q.id]) cls += " is-flagged";
      if (i === current) cls += " is-current";
      var label = "Soal " + (i + 1) +
        (attempt.answers[q.id] !== undefined ? ", sudah dijawab" : ", belum dijawab") +
        (attempt.flagged[q.id] ? ", ditandai ragu-ragu" : "");
      html += '<button type="button" class="' + cls + '" data-i="' + i + '" aria-label="' + label + '"' +
              (i === current ? ' aria-current="true"' : "") + ">" + (i + 1) + "</button>";
    }
    elGrid.innerHTML = html;
  }

  function renderQuestion() {
    var q = QS[current];
    var cat = Data.categoryById(q.cat);

    elQNumber.textContent = current + 1;
    if (elMSoal) elMSoal.textContent = "Soal " + (current + 1) + "/" + TOTAL;
    if (elCat) elCat.textContent = cat ? cat.name : "";

    elQText.innerHTML = "<p>" + q.text + "</p>";

    var picked = attempt.answers[q.id];
    var html = "";
    for (var i = 0; i < q.opts.length; i++) {
      var letter = LETTERS[i];
      html +=
        '<label class="opt">' +
          '<input type="radio" name="q" value="' + i + '"' + (picked === i ? " checked" : "") + ">" +
          '<span class="opt__row">' +
            '<span class="opt__key" aria-hidden="true">' + letter + "</span>" +
            '<span class="opt__txt">' + q.opts[i] + "</span>" +
          "</span>" +
        "</label>";
    }
    elOpts.innerHTML = html;

    var isFlag = !!attempt.flagged[q.id];
    elFlag.setAttribute("aria-pressed", String(isFlag));
    elFlagLabel.textContent = isFlag ? "Ditandai" : "Tandai";
    elFlag.setAttribute("aria-label", isFlag
      ? "Hapus tanda ragu-ragu pada soal " + (current + 1)
      : "Tandai soal " + (current + 1) + " untuk ditinjau kembali");
  }

  function renderStats() {
    var c = counts();
    if (elSideCount) elSideCount.textContent = c.ans + " / " + TOTAL + " terjawab";
    if (elNavCount) elNavCount.textContent = c.ans + "/" + TOTAL;
    if (elRail) elRail.style.width = (c.ans / TOTAL * 100) + "%";
    var a = $("stAns"), e = $("stEmpty"), f = $("stFlag");
    if (a) a.textContent = c.ans;
    if (e) e.textContent = c.empty;
    if (f) f.textContent = c.flag;
    var ma = $("mAns"), me = $("mEmpty"), mf = $("mFlag");
    if (ma) ma.textContent = c.ans;
    if (me) me.textContent = c.empty;
    if (mf) mf.textContent = c.flag;
  }

  var viaKeyboard = false;
  document.addEventListener("pointerdown", function () { viaKeyboard = false; }, true);

  function goTo(index) {
    if (index < 0 || index >= TOTAL) return;
    current = index;
    renderQuestion();
    renderGrid();
    renderStats();
    if (window.scrollY > 40) window.scrollTo({ top: 0, behavior: "smooth" });
    if (viaKeyboard) {
      var first = elOpts.querySelector("input");
      if (first) first.focus({ preventScroll: true });
    }
  }

  /* ------------------------------ interaksi ------------------------------ */
  elOpts.addEventListener("change", function (e) {
    if (e.target.name !== "q") return;
    attempt.answers[QS[current].id] = parseInt(e.target.value, 10);
    Store.saveAttempt(attempt);
    renderGrid();
    renderStats();
  });

  elFlag.addEventListener("click", function () {
    var id = QS[current].id;
    if (attempt.flagged[id]) delete attempt.flagged[id];
    else attempt.flagged[id] = true;
    Store.saveAttempt(attempt);
    renderQuestion();
    renderGrid();
    renderStats();
  });

  elGrid.addEventListener("click", function (e) {
    var btn = e.target.closest(".qbtn");
    if (!btn) return;
    goTo(parseInt(btn.getAttribute("data-i"), 10));
    closeSheet();
  });

  $("prevBtn").addEventListener("click", function () { goTo(current - 1); });
  $("nextBtn").addEventListener("click", function () { goTo(current + 1); });
  if ($("prevBtnM")) $("prevBtnM").addEventListener("click", function () { goTo(current - 1); });
  if ($("nextBtnM")) $("nextBtnM").addEventListener("click", function () { goTo(current + 1); });

  document.addEventListener("keydown", function (e) {
    if ($("endModal").classList.contains("is-open")) return;
    var tag = (e.target.tagName || "").toLowerCase();
    if (tag === "input" || tag === "textarea" || tag === "select") return;

    if (e.key >= "1" && e.key <= "5") {
      var idx = parseInt(e.key, 10) - 1;
      if (idx < QS[current].opts.length) {
        attempt.answers[QS[current].id] = idx;
        Store.saveAttempt(attempt);
        renderQuestion();
        renderGrid();
        renderStats();
      }
    } else if (e.key === "ArrowRight") {
      viaKeyboard = true; goTo(current + 1);
    } else if (e.key === "ArrowLeft") {
      viaKeyboard = true; goTo(current - 1);
    } else if (e.key.toLowerCase() === "f") {
      elFlag.click();
    }
  });

  /* ------------------------------ timer & waktu per soal ------------------------------ */
  var warned = false;

  function fmt(s) {
    var h = Math.floor(s / 3600);
    var m = Math.floor((s % 3600) / 60);
    var sec = s % 60;
    var mm = String(m).padStart(2, "0") + ":" + String(sec).padStart(2, "0");
    return h > 0 ? String(h).padStart(2, "0") + ":" + mm : mm;
  }

  function remaining() {
    return Math.max(0, Math.floor((attempt.endsAt - Date.now()) / 1000));
  }

  function paintClock() {
    var r = remaining();
    elClock.textContent = fmt(r);
    elTimer.classList.toggle("is-warn", r <= 300 && r > 60);
    elTimer.classList.toggle("is-crit", r <= 60);
    elTimer.setAttribute("aria-label", "Sisa waktu " + fmt(r));
    if (r <= 300 && !warned && r > 0) {
      warned = true;
      elTimer.setAttribute("aria-live", "polite");
      setTimeout(function () { elTimer.setAttribute("aria-live", "off"); }, 2000);
    }
    if (r === 0 && !submitting) submit();
  }

  /* detik berjalan: menambah waktu soal aktif + menyimpan berkala */
  var saveTick = 0;
  setInterval(function () {
    if (submitting) return;
    var id = QS[current].id;
    attempt.timeSpent[id] = (attempt.timeSpent[id] || 0) + 1;
    saveTick++;
    if (saveTick % 5 === 0) Store.saveAttempt(attempt);
    paintClock();
  }, 1000);

  window.addEventListener("beforeunload", function () {
    if (!submitting) Store.saveAttempt(attempt);
  });

  /* ------------------------------ modal akhiri ------------------------------ */
  var modal = $("endModal");
  var lastFocus = null;

  function openEnd() {
    lastFocus = document.activeElement;
    var c = counts();
    $("mAns").textContent = c.ans;
    $("mEmpty").textContent = c.empty;
    $("mFlag").textContent = c.flag;
    modal.classList.add("is-open");
    document.body.style.overflow = "hidden";
    setTimeout(function () { $("cancelEnd").focus(); }, 60);
  }
  function closeEnd() {
    modal.classList.remove("is-open");
    document.body.style.overflow = "";
    if (lastFocus) lastFocus.focus();
  }

  $("endBtn").addEventListener("click", openEnd);
  if ($("endBtn2")) $("endBtn2").addEventListener("click", openEnd);
  $("cancelEnd").addEventListener("click", closeEnd);
  modal.addEventListener("click", function (e) { if (e.target === modal) closeEnd(); });

  document.addEventListener("keydown", function (e) {
    if (!modal.classList.contains("is-open")) return;
    if (e.key === "Escape") { e.preventDefault(); closeEnd(); }
    if (e.key === "Tab") {
      var f = modal.querySelectorAll("button");
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });

  /* ------------------------------ submit ------------------------------ */
  function submit() {
    if (submitting) return;
    submitting = true;
    Store.saveAttempt(attempt);

    var c = counts();
    var sumSpent = 0;
    for (var k = 0; k < TOTAL; k++) sumSpent += (attempt.timeSpent[QS[k].id] || 0);
    var used = sumSpent > 0 ? sumSpent : (CFG.durationSec - remaining());
    if (used > CFG.durationSec) used = CFG.durationSec;
    var sAns = $("sAns"), sFlag = $("sFlag"), sTime = $("sTime");
    if (sAns) sAns.textContent = c.ans + " / " + TOTAL;
    if (sFlag) sFlag.textContent = c.flag;
    if (sTime) sTime.textContent = fmt(used);

    attempt.submittedAt = new Date().toISOString();
    attempt.durationUsedSec = used;
    Store.saveAttempt(attempt);

    closeEnd();
    var done = $("submitted");
    if (done) {
      done.classList.add("is-on");
      document.body.style.overflow = "hidden";
      window.scrollTo(0, 0);
    }
    setTimeout(function () { window.location.href = "../hasil/index.html"; }, 1600);
  }

  $("confirmEnd").addEventListener("click", submit);

  /* ------------------------------ bottom sheet (mobile) ------------------------------ */
  var side = $("examSide");
  var backdrop = $("backdrop");
  var openBtn = $("openSheet");

  function openSheet() {
    side.classList.add("is-open");
    backdrop.classList.add("is-on");
    openBtn.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  }
  function closeSheet() {
    side.classList.remove("is-open");
    backdrop.classList.remove("is-on");
    if (openBtn) openBtn.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }
  if (openBtn) openBtn.addEventListener("click", openSheet);
  if ($("sheetClose")) $("sheetClose").addEventListener("click", closeSheet);
  if (backdrop) backdrop.addEventListener("click", closeSheet);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && side.classList.contains("is-open")) closeSheet();
  });

  /* ------------------------------ dev helper ------------------------------ */
  if (devMode) {
    var bar = document.createElement("div");
    bar.style.cssText = "position:fixed;left:12px;bottom:12px;z-index:999;display:flex;gap:6px;flex-wrap:wrap";
    bar.innerHTML =
      '<button type="button" id="devFill" style="padding:8px 12px;border-radius:999px;border:1px dashed #7A8B9C;background:#fff;font:800 11px system-ui;color:#48596B;cursor:pointer">Isi jawaban contoh &amp; kirim</button>';
    document.body.appendChild(bar);
    $("devFill").addEventListener("click", function () { demoFill(); submit(); });
  }

  var DEMO_WRONG = { 3: 1, 8: 1, 11: 1, 16: 1, 20: 1, 22: 1, 23: 1, 27: 1, 29: 1 };

  function demoFill() {
    for (var i = 0; i < TOTAL; i++) {
      var q = QS[i];
      attempt.answers[q.id] = DEMO_WRONG[q.id] ? (q.correct === 0 ? 1 : 0) : q.correct;
      attempt.timeSpent[q.id] = Math.round([58, 42, 51, 39, 47, 62, 44, 118, 53, 41, 46, 57][i % 12] * 0.8) + (i % 5) * 2;
    }
    Store.saveAttempt(attempt);
  }

  if (autoDemo) setTimeout(function () { demoFill(); submit(); }, 600);

  /* ------------------------------ init ------------------------------ */
  if (resuming) {
    var banner = document.createElement("div");
    banner.style.cssText =
      "margin:0 0 14px;padding:12px 16px;border-radius:12px;background:#FEF4DE;border:1px solid rgba(245,183,0,.45);color:#6B4A00;font-size:13px;font-weight:600";
    banner.textContent = "Melanjutkan percobaan yang belum selesai. Waktu berjalan terus sejak kamu mulai.";
    var host = document.querySelector(".ebody");
    if (host) host.parentNode.insertBefore(banner, host);
  }

  renderQuestion();
  renderGrid();
  renderStats();
  paintClock();
})();
