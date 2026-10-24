/* ============================================================================
   LMS-CAT · Hasil & analisis
   Semua angka di halaman ini DIHITUNG dari jawaban yang benar-benar dipilih,
   bukan data contoh. Inilah inti janji produk: analisis, bukan sekadar skor.
   ========================================================================== */
(function () {
  "use strict";

  var Data = window.LMSExamData;
  var Store = window.LMSStore;
  var QS = Data.questions;
  var CFG = Data.config;

  if (!Store.requireAuth("../masuk/index.html")) return;

  var attempt = Store.getAttempt();
  var $ = function (id) { return document.getElementById(id); };

  /* ---------- belum ada percobaan ---------- */
  if (!attempt || !attempt.submittedAt) {
    var empty = $("emptyState");
    var body = $("resultBody");
    if (empty) empty.hidden = false;
    if (body) body.hidden = true;
    return;
  }

  /* ------------------------------ hitung ------------------------------ */
  var answers = attempt.answers || {};
  var timeSpent = attempt.timeSpent || {};

  var correct = 0, wrong = 0, empty = 0, answered = 0;
  var byCat = {};
  Data.categories.forEach(function (c) { byCat[c.id] = { correct: 0, total: 0 }; });

  var perQuestion = QS.map(function (q) {
    var picked = answers[q.id];
    var isAnswered = picked !== undefined;
    var isCorrect = isAnswered && picked === q.correct;
    if (isAnswered) answered++;
    if (isCorrect) correct++;
    else if (isAnswered) wrong++;
    else empty++;

    byCat[q.cat].total++;
    if (isCorrect) byCat[q.cat].correct++;

    return {
      id: q.id,
      no: q.id,
      cat: q.cat,
      catName: Data.categoryById(q.cat).name,
      picked: picked,
      correct: q.correct,
      isCorrect: isCorrect,
      isAnswered: isAnswered,
      sec: timeSpent[q.id] || 0
    };
  });

  var score = correct * CFG.pointsPerCorrect;
  var maxScore = CFG.maxScore;
  var pct = Math.round((score / maxScore) * 100);

  var totalSec = perQuestion.reduce(function (a, q) { return a + q.sec; }, 0);
  var avgSec = answered ? Math.round(totalSec / answered) : 0;
  var slow = perQuestion.filter(function (q) { return q.isAnswered; })
    .slice().sort(function (a, b) { return b.sec - a.sec; });
  var over90 = perQuestion.filter(function (q) { return q.sec > 90; }).length;

  var cats = Data.categories.map(function (c) {
    var d = byCat[c.id];
    return {
      id: c.id,
      name: c.name,
      correct: d.correct,
      total: d.total,
      pct: Math.round((d.correct / d.total) * 100)
    };
  }).sort(function (a, b) { return a.pct - b.pct; });

  var weakest = cats.slice(0, 2);
  var strongest = cats.slice(-1)[0];

  /* ------------------------------ render ------------------------------ */
  function fmtDur(sec) {
    var m = Math.floor(sec / 60);
    var s = sec % 60;
    return m > 0 ? m + "m " + s + "s" : s + "s";
  }
  function fmtClock(sec) {
    var m = Math.floor(sec / 60);
    var s = sec % 60;
    return String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0");
  }

  var user = Store.getUser();
  if ($("userName")) $("userName").textContent = user ? user.name : "Peserta";
  if ($("attemptDate")) {
    $("attemptDate").textContent = new Date(attempt.submittedAt).toLocaleDateString("id-ID", {
      day: "numeric", month: "long", year: "numeric"
    });
  }

  /* skor */
  $("scoreNum").textContent = score;
  $("scoreMax").textContent = "dari " + maxScore;
  $("scorePct").textContent = pct + "%";
  var ring = $("scoreRing");
  if (ring) ring.style.background =
    "conic-gradient(var(--gold-500) 0 " + pct + "%, rgba(255,255,255,.13) " + pct + "%)";

  $("statCorrect").textContent = correct;
  $("statWrong").textContent = wrong;
  $("statEmpty").textContent = empty;
  $("statTime").textContent = fmtClock(attempt.durationUsedSec || totalSec);

  /* peta materi */
  var catHtml = "";
  cats.slice().sort(function (a, b) { return b.pct - a.pct; }).forEach(function (c) {
    var color = c.pct >= 80 ? "var(--green-500)" : c.pct >= 60 ? "var(--gold-500)" : "var(--red-500)";
    catHtml +=
      '<div class="mrow">' +
        '<div class="mrow__top"><span>' + c.name + "</span><em>" + c.correct + "/" + c.total + " · " + c.pct + "%</em></div>" +
        '<div class="mtrack"><i style="width:' + c.pct + "%;background:" + color + '"></i></div>' +
      "</div>";
  });
  $("catBars").innerHTML = catHtml;

  /* heatmap per butir (1 sel = 1 soal, 30 sel) */
  var heatHtml = "";
  perQuestion.forEach(function (q) {
    var cls = !q.isAnswered ? "empty" : q.isCorrect ? "ok" : "bad";
    heatHtml += '<i class="' + cls + '" title="Soal ' + q.no + " · " + q.catName +
                (q.isAnswered ? (q.isCorrect ? " · benar" : " · salah") : " · tidak dijawab") + '"></i>';
  });
  $("heat").innerHTML = heatHtml;

  /* jejak waktu */
  var maxSec = Math.max.apply(null, perQuestion.map(function (q) { return q.sec; }).concat([1]));
  var traceHtml = "";
  perQuestion.forEach(function (q) {
    var h = Math.max(4, Math.round((q.sec / maxSec) * 100));
    var cls = q.sec > 120 ? "crit" : q.sec > 90 ? "hot" : "";
    traceHtml += '<i class="' + cls + '" style="height:' + h + '%" title="Soal ' + q.no + " · " + fmtDur(q.sec) + '"></i>';
  });
  $("trace").innerHTML = traceHtml;

  $("avgTime").textContent = avgSec;
  $("over90").textContent = over90;
  $("slowestTime").textContent = slow.length ? fmtDur(slow[0].sec) : "—";

  /* soal paling menyita waktu */
  var slowHtml = "";
  slow.slice(0, 3).forEach(function (q) {
    slowHtml +=
      '<div class="slowrow">' +
        '<span class="slowrow__no">' + q.no + "</span>" +
        '<div><div class="slowrow__t">' + q.catName + "</div>" +
        '<div class="slowrow__s">' + (q.isCorrect ? "benar" : "salah") + "</div></div>" +
        '<span class="slowrow__v">' + fmtDur(q.sec) + "</span>" +
      "</div>";
  });
  $("slowList").innerHTML = slowHtml || '<p class="hint">Belum ada data waktu.</p>';

  /* rekomendasi */
  var recHtml = "";
  weakest.forEach(function (c, i) {
    recHtml +=
      '<div class="reccard' + (i === 0 ? " first" : "") + '">' +
        '<span class="reccard__n">' + (i + 1) + "</span>" +
        "<div><div class=\"reccard__t\">" + c.name + "</div>" +
        '<div class="reccard__s">' + c.correct + " dari " + c.total + " benar · penguasaan " + c.pct + "%</div></div>" +
        '<span class="reccard__go">' + (c.total - c.correct) + " soal</span>" +
      "</div>";
  });
  $("recList").innerHTML = recHtml;

  $("insightStrong").textContent = strongest.name + " (" + strongest.pct + "%)";
  $("insightWeak").textContent = weakest[0].name + " (" + weakest[0].pct + "%)";

  var timeVerdict = avgSec > 60
    ? "Rata-rata " + avgSec + " detik per soal. Tempo perlu diperbaiki: targetkan di bawah 60 detik."
    : "Rata-rata " + avgSec + " detik per soal. Tempo sudah dalam batas aman.";
  $("insightTime").textContent = timeVerdict;

  var answeredAll = empty === 0;
  $("insightEmpty").textContent = answeredAll
    ? "Semua soal terjawab. Tidak ada jawaban kosong."
    : empty + " soal tidak dijawab. Jawaban kosong bernilai nol, sama seperti salah.";

  /* tombol ulangi */
  $("retryBtn").addEventListener("click", function () {
    Store.clearAttempt();
    window.location.href = "../ujian/index.html";
  });
})();
