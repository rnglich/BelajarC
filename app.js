'use strict';

const PISTON_URL = 'https://emkc.org/api/v2/piston/execute';
const WANDBOX_URL = 'https://wandbox.org/api/compile.json';
const API_VERSION = '10.2.0';
const WANDBOX_C_COMPILER = 'gcc-10.5.0-c';
const WANDBOX_CPP_COMPILER = 'gcc-10.5.0';
const COOKIE_NAME = 'lf_state';
const COOKIE_MAX_AGE = 2592000;
const MAX_LEVEL = 6;

const LEVELS = [
  {
    id: 1,
    category: 'W3SCHOOLS · VARIABLES',
    title: 'Variables & Memory Swapping',
    quote: 'Variabel adalah ruang memori yang dipinjamkan sementara; logika yang baik tahu kapan harus menampung dan kapan harus memindahkan.',
    tutorialTitle: 'Menyimpan Nilai di Memori',
    tutorial:
      '<p>Variabel adalah <strong>ruang bernama di memori</strong>. Ketika kamu menulis <code>int a = 15;</code>, komputer menyiapkan tempat untuk menyimpan bilangan bulat dan memberinya label <code>a</code>. Menimpa isi variabel berarti nilai lamanya hilang.</p>' +
      '<p>Untuk menukar dua nilai, gunakan <strong>variabel bantuan</strong> (<code>temp</code>) sebagai penampung sementara. Simpan salah satu nilai, pindahkan nilai lainnya, lalu kembalikan nilai yang tersimpan.</p>',
    task:
      '<p>Diberikan dua variabel <code>int a = 15;</code> dan <code>int b = 42;</code>. Tukar nilai keduanya menggunakan logika variabel bantuan, lalu cetak nilai <code>a</code> dan <code>b</code> yang sudah bertukar dalam satu baris, dipisahkan oleh <strong>satu spasi</strong>.</p>',
    expected: '42 15',
    clue:
      '<p>Bayangkan kamu punya gelas A berisi kopi dan gelas B berisi teh. Kamu butuh satu gelas kosong (variabel <code>temp</code>) untuk menampung kopi sebelum menuang teh ke gelas A. Setelah itu, tuang kopi dari <code>temp</code> ke gelas B.</p>',
    video: 'C++ Swap Two Numbers Using Temporary Variable Tutorial',
    example: {
      cpp:
        '#include <iostream>\n' +
        'using namespace std;\n\n' +
        'int main() {\n' +
        '    int x = 3;\n' +
        '    int y = 9;\n\n' +
        '    int temp = x;\n' +
        '    x = y;\n' +
        '    y = temp;\n\n' +
        '    cout << x << " " << y << endl;\n' +
        '    return 0;\n' +
        '}\n\n' +
        '// Output: 9 3',
      c:
        '#include <stdio.h>\n\n' +
        'int main() {\n' +
        '    int x = 3;\n' +
        '    int y = 9;\n\n' +
        '    int temp = x;\n' +
        '    x = y;\n' +
        '    y = temp;\n\n' +
        '    printf("%d %d\\n", x, y);\n' +
        '    return 0;\n' +
        '}\n\n' +
        '// Output: 9 3'
    },
    starter: {
      cpp:
        '#include <iostream>\n' +
        'using namespace std;\n\n' +
        'int main() {\n' +
        '    int a = 15;\n' +
        '    int b = 42;\n\n' +
        '    // Tukar nilai a dan b di sini, lalu cetak hasilnya.\n' +
        '    // Gunakan satu variabel bantuan agar nilai asli tidak hilang.\n\n' +
        '    return 0;\n' +
        '}',
      c:
        '#include <stdio.h>\n\n' +
        'int main() {\n' +
        '    int a = 15;\n' +
        '    int b = 42;\n\n' +
        '    // Tukar nilai a dan b di sini, lalu cetak hasilnya.\n' +
        '    // Gunakan satu variabel bantuan agar nilai asli tidak hilang.\n\n' +
        '    return 0;\n' +
        '}'
    }
  },
  {
    id: 2,
    category: 'W3SCHOOLS · OPERATORS',
    title: 'Arithmetic & Modulus Logic',
    quote: 'Sisa bagi adalah cara komputer membuka digit demi digit dari sebuah bilangan.',
    tutorialTitle: 'Membaca Digit dengan Modulus',
    tutorial:
      '<p>Dalam C/C++, pembagian dua bilangan bulat memakai operator <code>/</code> dan <strong>membuang bagian pecahan</strong>. Operator <code>%</code> (modulo) justru mengambil <strong>sisa bagi</strong> dari pembagian tersebut.</p>' +
      '<p>Modulo <code>10</code> selalu menghasilkan digit terakhir sebuah bilangan. Contohnya <code>2026 % 10</code> menghasilkan <code>6</code>, sedangkan <code>2026 % 2</code> menghasilkan <code>0</code> karena 2026 habis dibagi dua.</p>',
    task:
      '<p>Diberikan variabel <code>int kode = 2026;</code>. Gunakan operator aritmatika untuk mencetak <strong>digit terakhir</strong> dari angka tersebut, diikuti satu spasi, lalu <strong>sisa bagi</strong> angka tersebut jika dibagi <code>2</code>.</p>',
    expected: '6 0',
    clue:
      '<p>Angka apa pun jika di-modulo dengan <code>10</code> (<code>angka % 10</code>) akan selalu menghasilkan digit satuannya. Gunakan <code>% 2</code> untuk mengecek sisa bagi dua.</p>',
    video: 'Modulus Operator in C and C++ Explained',
    example: {
      cpp:
        '#include <iostream>\n' +
        'using namespace std;\n\n' +
        'int main() {\n' +
        '    int n = 482;\n\n' +
        '    cout << n % 10 << " " << n % 2 << endl;\n' +
        '    return 0;\n' +
        '}\n\n' +
        '// Output: 2 0',
      c:
        '#include <stdio.h>\n\n' +
        'int main() {\n' +
        '    int n = 482;\n\n' +
        '    printf("%d %d\\n", n % 10, n % 2);\n' +
        '    return 0;\n' +
        '}\n\n' +
        '// Output: 2 0'
    },
    starter: {
      cpp:
        '#include <iostream>\n' +
        'using namespace std;\n\n' +
        'int main() {\n' +
        '    int kode = 2026;\n\n' +
        '    // Cetak digit terakhir, spasi, lalu sisa bagi kode dengan 2.\n\n' +
        '    return 0;\n' +
        '}',
      c:
        '#include <stdio.h>\n\n' +
        'int main() {\n' +
        '    int kode = 2026;\n\n' +
        '    // Cetak digit terakhir, spasi, lalu sisa bagi kode dengan 2.\n\n' +
        '    return 0;\n' +
        '}'
    }
  },
  {
    id: 3,
    category: 'W3SCHOOLS · IF...ELSE',
    title: 'Conditions & Relational Logic',
    quote: 'Percabangan adalah seni mengajukan pertanyaan yang tepat, dalam urutan yang tepat.',
    tutorialTitle: 'Mengarahkan Alur dengan Kondisi',
    tutorial:
      '<p>Percabangan membuat program bisa mengambil keputusan. Dengan <code>if</code>, <code>else if</code>, dan <code>else</code>, hanya satu blok yang dieksekusi berdasarkan hasil perbandingan <code>&gt;=</code>, <code>&lt;</code>, atau <code>==</code>.</p>' +
      '<p><strong>Urutan pengecekan menentukan hasil.</strong> Periksa batas tertinggi lebih dulu. Jika <code>&gt;= 75</code> dicek sebelum <code>&gt;= 90</code>, nilai 95 akan salah masuk ke kategori B.</p>',
    task:
      '<p>Diberikan variabel <code>int skor = 85;</code>. Buat logika percabangan: jika <code>skor &gt;= 90</code> cetak <code>"A"</code>, jika <code>skor &gt;= 75</code> cetak <code>"B"</code>, selain itu cetak <code>"C"</code>.</p>',
    expected: 'B',
    clue:
      '<p>Urutan pengecekan sangat penting! Cek kondisi nilai paling tinggi (<code>&gt;= 90</code>) di bagian <code>if</code>, lalu gunakan <code>else if</code> untuk batas <code>&gt;= 75</code>.</p>',
    video: 'C++ If Else and Else If Ladder Tutorial',
    example: {
      cpp:
        '#include <iostream>\n' +
        'using namespace std;\n\n' +
        'int main() {\n' +
        '    int nilai = 60;\n\n' +
        '    if (nilai >= 90) {\n' +
        '        cout << "A" << endl;\n' +
        '    } else if (nilai >= 75) {\n' +
        '        cout << "B" << endl;\n' +
        '    } else {\n' +
        '        cout << "C" << endl;\n' +
        '    }\n\n' +
        '    return 0;\n' +
        '}\n\n' +
        '// Output: C',
      c:
        '#include <stdio.h>\n\n' +
        'int main() {\n' +
        '    int nilai = 60;\n\n' +
        '    if (nilai >= 90) {\n' +
        '        printf("A\\n");\n' +
        '    } else if (nilai >= 75) {\n' +
        '        printf("B\\n");\n' +
        '    } else {\n' +
        '        printf("C\\n");\n' +
        '    }\n\n' +
        '    return 0;\n' +
        '}\n\n' +
        '// Output: C'
    },
    starter: {
      cpp:
        '#include <iostream>\n' +
        'using namespace std;\n\n' +
        'int main() {\n' +
        '    int skor = 85;\n\n' +
        '    // Cetak "A", "B", atau "C" sesuai aturan di soal.\n\n' +
        '    return 0;\n' +
        '}',
      c:
        '#include <stdio.h>\n\n' +
        'int main() {\n' +
        '    int skor = 85;\n\n' +
        '    // Cetak "A", "B", atau "C" sesuai aturan di soal.\n\n' +
        '    return 0;\n' +
        '}'
    }
  },
  {
    id: 4,
    category: 'W3SCHOOLS · SWITCH',
    title: 'Multi-Way Branching',
    quote: 'Satu nilai, banyak kemungkinan — switch memilih satu jalan dan berhenti di sana.',
    tutorialTitle: 'Memilih Jalur dengan switch',
    tutorial:
      '<p><code>switch</code> cocok dipakai saat satu nilai harus memilih satu dari banyak kemungkinan konstan. Setiap <code>case</code> adalah pintu masuk, dan <code>break;</code> menghentikan eksekusi agar program tidak jatuh ke case berikutnya.</p>' +
      '<p>Tanpa <code>break;</code>, program akan <strong>fall-through</strong> dan ikut menjalankan blok di bawahnya. Gunakan <code>default</code> untuk menangani nilai yang tidak dikenal.</p>',
    task:
      '<p>Diberikan kode perintah <code>int cmd = 2;</code>. Gunakan <code>switch(cmd)</code>: untuk <code>case 1</code> cetak <code>"START"</code>, <code>case 2</code> cetak <code>"PAUSE"</code>, <code>case 3</code> cetak <code>"STOP"</code>, dan <code>default</code> cetak <code>"INVALID"</code>.</p>',
    expected: 'PAUSE',
    clue:
      '<p>Pastikan setiap blok <code>case</code> diakhiri dengan <code>break;</code> agar program tidak lanjut mengeksekusi case di bawahnya (fall-through).</p>',
    video: 'Switch Case Statement in C/C++ Programming',
    example: {
      cpp:
        '#include <iostream>\n' +
        'using namespace std;\n\n' +
        'int main() {\n' +
        '    int cmd = 3;\n\n' +
        '    switch (cmd) {\n' +
        '        case 1:\n' +
        '            cout << "START" << endl;\n' +
        '            break;\n' +
        '        case 2:\n' +
        '            cout << "PAUSE" << endl;\n' +
        '            break;\n' +
        '        case 3:\n' +
        '            cout << "STOP" << endl;\n' +
        '            break;\n' +
        '        default:\n' +
        '            cout << "INVALID" << endl;\n' +
        '            break;\n' +
        '    }\n\n' +
        '    return 0;\n' +
        '}\n\n' +
        '// Output: STOP',
      c:
        '#include <stdio.h>\n\n' +
        'int main() {\n' +
        '    int cmd = 3;\n\n' +
        '    switch (cmd) {\n' +
        '        case 1:\n' +
        '            printf("START\\n");\n' +
        '            break;\n' +
        '        case 2:\n' +
        '            printf("PAUSE\\n");\n' +
        '            break;\n' +
        '        case 3:\n' +
        '            printf("STOP\\n");\n' +
        '            break;\n' +
        '        default:\n' +
        '            printf("INVALID\\n");\n' +
        '            break;\n' +
        '    }\n\n' +
        '    return 0;\n' +
        '}\n\n' +
        '// Output: STOP'
    },
    starter: {
      cpp:
        '#include <iostream>\n' +
        'using namespace std;\n\n' +
        'int main() {\n' +
        '    int cmd = 2;\n\n' +
        '    // Gunakan switch(cmd) dengan case 1, 2, 3, dan default.\n\n' +
        '    return 0;\n' +
        '}',
      c:
        '#include <stdio.h>\n\n' +
        'int main() {\n' +
        '    int cmd = 2;\n\n' +
        '    // Gunakan switch(cmd) dengan case 1, 2, 3, dan default.\n\n' +
        '    return 0;\n' +
        '}'
    }
  },
  {
    id: 5,
    category: 'W3SCHOOLS · LOOPS',
    title: 'Iterative Logic',
    quote: 'Ulangi tanpa menyalin: biarkan penghitung yang melakukan pekerjaan berulang.',
    tutorialTitle: 'Mengulang Pekerjaan yang Sama',
    tutorial:
      '<p>Perulangan mengeksekusi blok yang sama berulang kali. Sebuah <code>for</code> terdiri atas tiga bagian: <strong>nilai awal</strong>, <strong>kondisi berhenti</strong>, dan <strong>perubahan penghitung</strong>.</p>' +
      '<p>Untuk mencetak angka genap, mulai dari <code>i = 2</code>, ulangi selama <code>i &lt;= 10</code>, lalu tambah <code>i</code> sebanyak 2 setiap putaran. Jangan lupa memisahkan keluaran dengan spasi.</p>',
    task:
      '<p>Gunakan perulangan (<code>for</code> atau <code>while</code>) untuk mencetak angka genap mulai dari <code>2</code> hingga <code>10</code> dalam satu baris yang dipisahkan oleh spasi.</p>',
    expected: '2 4 6 8 10',
    clue:
      '<p>Kamu bisa memulai perulangan dari <code>i = 2</code>, dengan syarat <code>i &lt;= 10</code>, lalu menaikkan nilai <code>i</code> sebanyak 2 di setiap putaran (<code>i += 2</code>).</p>',
    video: 'For Loops in C++ for Beginners',
    example: {
      cpp:
        '#include <iostream>\n' +
        'using namespace std;\n\n' +
        'int main() {\n' +
        '    for (int i = 1; i <= 9; i += 2) {\n' +
        '        cout << i << " ";\n' +
        '    }\n' +
        '    cout << endl;\n\n' +
        '    return 0;\n' +
        '}\n\n' +
        '// Output: 1 3 5 7 9',
      c:
        '#include <stdio.h>\n\n' +
        'int main() {\n' +
        '    int i;\n' +
        '    for (i = 1; i <= 9; i += 2) {\n' +
        '        printf("%d ", i);\n' +
        '    }\n' +
        '    printf("\\n");\n\n' +
        '    return 0;\n' +
        '}\n\n' +
        '// Output: 1 3 5 7 9'
    },
    starter: {
      cpp:
        '#include <iostream>\n' +
        'using namespace std;\n\n' +
        'int main() {\n' +
        '    // Cetak angka genap dari 2 sampai 10, dipisahkan spasi.\n\n' +
        '    return 0;\n' +
        '}',
      c:
        '#include <stdio.h>\n\n' +
        'int main() {\n' +
        '    // Cetak angka genap dari 2 sampai 10, dipisahkan spasi.\n\n' +
        '    return 0;\n' +
        '}'
    }
  },
  {
    id: 6,
    category: 'W3SCHOOLS · ARRAYS',
    title: 'Array Traversal & Accumulator',
    quote: 'Data yang tersusun rapi hanya berguna jika kamu tahu cara berjalan melewatinya.',
    tutorialTitle: 'Berjalan Menyusuri Array',
    tutorial:
      '<p>Array menyimpan banyak nilai bertipe sama dalam satu nama. Elemennya diakses dengan indeks yang dimulai dari <strong>nol</strong>, sehingga array berukuran 5 memiliki indeks <code>0</code> sampai <code>4</code>.</p>' +
      '<p>Pola <strong>accumulator</strong> digunakan untuk mencari nilai ekstrem: simpan kandidat awal, lalu bandingkan setiap elemen. Jika elemen lebih besar (atau lebih kecil), perbarui kandidat tersebut.</p>',
    task:
      '<p>Diberikan array <code>int data[5] = {14, 52, 8, 99, 31};</code>. Tulis logika perulangan untuk mencari dan mencetak <strong>angka terbesar</strong> di dalam array tersebut.</p>',
    expected: '99',
    clue:
      '<p>Buat variabel <code>int maks = data[0];</code>. Lakukan perulangan dari indeks <code>0</code> sampai <code>4</code>. Jika <code>data[i] &gt; maks</code>, perbarui nilai <code>maks = data[i]</code>.</p>',
    video: 'Find Largest Element in an Array C/C++',
    example: {
      cpp:
        '#include <iostream>\n' +
        'using namespace std;\n\n' +
        'int main() {\n' +
        '    int nilai[5] = {7, 3, 11, 5, 9};\n' +
        '    int terkecil = nilai[0];\n\n' +
        '    for (int i = 0; i < 5; i++) {\n' +
        '        if (nilai[i] < terkecil) {\n' +
        '            terkecil = nilai[i];\n' +
        '        }\n' +
        '    }\n\n' +
        '    cout << terkecil << endl;\n' +
        '    return 0;\n' +
        '}\n\n' +
        '// Output: 3',
      c:
        '#include <stdio.h>\n\n' +
        'int main() {\n' +
        '    int nilai[5] = {7, 3, 11, 5, 9};\n' +
        '    int terkecil = nilai[0];\n' +
        '    int i;\n\n' +
        '    for (i = 0; i < 5; i++) {\n' +
        '        if (nilai[i] < terkecil) {\n' +
        '            terkecil = nilai[i];\n' +
        '        }\n' +
        '    }\n\n' +
        '    printf("%d\\n", terkecil);\n' +
        '    return 0;\n' +
        '}\n\n' +
        '// Output: 3'
    },
    starter: {
      cpp:
        '#include <iostream>\n' +
        'using namespace std;\n\n' +
        'int main() {\n' +
        '    int data[5] = {14, 52, 8, 99, 31};\n\n' +
        '    // Cari dan cetak angka terbesar di dalam array.\n\n' +
        '    return 0;\n' +
        '}',
      c:
        '#include <stdio.h>\n\n' +
        'int main() {\n' +
        '    int data[5] = {14, 52, 8, 99, 31};\n\n' +
        '    // Cari dan cetak angka terbesar di dalam array.\n\n' +
        '    return 0;\n' +
        '}'
    }
  }
];

const elements = {
  reader: document.getElementById('reader'),
  levelNav: document.getElementById('level-nav'),
  headerLevels: document.getElementById('header-levels'),
  progressFill: document.getElementById('header-progress-fill'),
  levelNumberLabel: document.getElementById('level-number-label'),
  levelCategory: document.getElementById('level-category'),
  levelTitle: document.getElementById('level-title'),
  levelQuote: document.getElementById('level-quote'),
  tutorialTitle: document.getElementById('tutorial-title'),
  tutorialBody: document.getElementById('tutorial-body'),
  exampleFile: document.getElementById('example-file'),
  exampleCode: document.getElementById('example-code'),
  taskBody: document.getElementById('task-body'),
  expectedOutput: document.getElementById('expected-output'),
  clueToggle: document.getElementById('clue-toggle'),
  clueToggleLabel: document.getElementById('clue-toggle-label'),
  clueContent: document.getElementById('clue-content'),
  clueText: document.getElementById('clue-text'),
  asideVideo: document.getElementById('aside-video'),
  asideVideoTitle: document.getElementById('aside-video-title'),
  asideVideoLink: document.getElementById('aside-video-link'),
  streakPill: document.getElementById('streak-pill'),
  streakValue: document.getElementById('streak-value'),
  langButtons: Array.from(document.querySelectorAll('[data-lang]')),
  fileName: document.getElementById('file-name'),
  fileLang: document.getElementById('file-lang'),
  codeEditor: document.getElementById('code-editor'),
  lineNumbers: document.getElementById('line-numbers'),
  warning: document.getElementById('warning'),
  warningTitle: document.getElementById('warning-title'),
  warningMessage: document.getElementById('warning-message'),
  warningDetail: document.getElementById('warning-detail'),
  runButton: document.getElementById('run-button'),
  runLabel: document.getElementById('run-label'),
  runIcon: document.getElementById('run-icon'),
  runSpinner: document.getElementById('run-spinner'),
  consoleStatus: document.getElementById('console-status'),
  consoleStatusDot: document.getElementById('console-status-dot'),
  successBanner: document.getElementById('success-banner'),
  successMessage: document.getElementById('success-message'),
  nextLevel: document.getElementById('next-level'),
  terminal: document.getElementById('terminal'),
  modal: document.getElementById('error-modal'),
  modalCard: document.getElementById('modal-card'),
  modalBadge: document.getElementById('modal-badge'),
  modalTitle: document.getElementById('modal-title'),
  modalDesc: document.getElementById('modal-desc'),
  modalExpected: document.getElementById('modal-expected'),
  modalActual: document.getElementById('modal-actual'),
  modalVideo: document.getElementById('modal-video'),
  modalVideoTitle: document.getElementById('modal-video-title'),
  modalVideoLink: document.getElementById('modal-video-link'),
  modalClose: document.getElementById('modal-close'),
  modalRetry: document.getElementById('modal-retry'),
  resetCode: document.getElementById('reset-code'),
  resetProgress: document.getElementById('reset-progress'),
  storageDot: document.getElementById('storage-dot'),
  storageText: document.getElementById('storage-text')
};

let cookieAvailable = true;
let state = null;
let isRunning = false;
let pistonAvailable = true;
let runGeneration = 0;
let activeAbortController = null;

function defaultState() {
  return { lang: 'cpp', cur: 1, strk: 0, best: 0, err: 0, done: [] };
}

function clampInt(value, min, max, fallback) {
  const number = Math.floor(Number(value));
  if (!Number.isFinite(number)) return fallback;
  return Math.min(Math.max(number, min), max);
}

function readCookie(name) {
  const prefix = name + '=';
  const entry = document.cookie.split('; ').find((item) => item.startsWith(prefix));
  if (!entry) return null;
  return entry.slice(prefix.length);
}

function detectCookieSupport() {
  try {
    const probe = 'lf_probe';
    document.cookie = probe + '=1; max-age=60; path=/; SameSite=Lax';
    const supported = document.cookie.split('; ').some((item) => item.startsWith(probe + '='));
    document.cookie = probe + '=; max-age=0; path=/; SameSite=Lax';
    return supported;
  } catch (error) {
    return false;
  }
}

function loadState() {
  const fallback = defaultState();
  const raw = cookieAvailable ? readCookie(COOKIE_NAME) : null;
  if (!raw) return fallback;

  try {
    const parsed = JSON.parse(decodeURIComponent(raw));
    const lang = parsed.lang === 'c' ? 'c' : 'cpp';
    const strk = clampInt(parsed.strk, 0, 9999, 0);
    const best = Math.max(clampInt(parsed.best, 0, 9999, 0), strk);
    const err = clampInt(parsed.err, 0, 999, 0);
    const cur = clampInt(parsed.cur, 1, MAX_LEVEL, 1);
    const done = Array.isArray(parsed.done)
      ? Array.from(
          new Set(
            parsed.done
              .map((value) => Number(value))
              .filter((value) => Number.isInteger(value) && value >= 1 && value <= MAX_LEVEL)
          )
        ).sort((a, b) => a - b)
      : [];

    return { lang, cur, strk, best, err, done };
  } catch (error) {
    return fallback;
  }
}

function saveState() {
  const payload = encodeURIComponent(JSON.stringify(state));
  try {
    document.cookie = COOKIE_NAME + '=' + payload + '; max-age=' + COOKIE_MAX_AGE + '; path=/; SameSite=Lax';
  } catch (error) {
    cookieAvailable = false;
  }
  updateStorageStatus();
}

function deleteCookie() {
  try {
    document.cookie = COOKIE_NAME + '=; max-age=0; path=/; SameSite=Lax';
  } catch (error) {
    cookieAvailable = false;
  }
}

function currentLevel() {
  return LEVELS.find((level) => level.id === state.cur) || LEVELS[0];
}

function scrollToArticleTop() {
  if (window.matchMedia('(max-width: 1023px)').matches) {
    window.scrollTo({ top: 0, behavior: 'auto' });
    return;
  }
  elements.reader.scrollTo({ top: 0, behavior: 'auto' });
}

function padLevel(number) {
  return String(number).padStart(2, '0');
}

function youtubeSearchUrl(title) {
  return 'https://www.youtube.com/results?search_query=' + encodeURIComponent(title);
}

function updateStorageStatus() {
  if (!cookieAvailable) {
    elements.storageDot.classList.add('is-off');
    elements.storageText.textContent = 'Cookie tidak tersedia — progres hanya bertahan selama tab ini terbuka.';
    return;
  }

  elements.storageDot.classList.remove('is-off');
  elements.storageText.innerHTML =
    'Progres di cookie <code>' + COOKIE_NAME + '</code> · ' +
    (state.lang === 'c' ? 'C' : 'C++') + ' · ' +
    state.done.length + '/' + MAX_LEVEL + ' selesai';
}

function updateHeader() {
  elements.streakValue.textContent = String(state.strk);
  elements.streakPill.title = 'Streak saat ini: ' + state.strk + ' · Rekor terbaik: ' + state.best;

  elements.langButtons.forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.lang === state.lang));
  });

  elements.headerLevels.innerHTML = LEVELS.map((level) => {
    const classes = ['header-level'];
    if (state.done.includes(level.id)) classes.push('is-done');
    if (level.id === state.cur) classes.push('is-active');
    const current = level.id === state.cur ? ' aria-current="step"' : '';
    const status = state.done.includes(level.id) ? ' — selesai' : '';
    return (
      '<button type="button" class="' + classes.join(' ') + '" data-level="' + level.id + '"' +
      current + ' aria-label="Level ' + padLevel(level.id) + status + '">' +
      padLevel(level.id) + '</button>'
    );
  }).join('');

  elements.levelNav.innerHTML = LEVELS.map((level) => {
    const classes = ['level-chip'];
    if (state.done.includes(level.id)) classes.push('is-done');
    if (level.id === state.cur) classes.push('is-active');
    const current = level.id === state.cur ? ' aria-current="step"' : '';
    const status = state.done.includes(level.id) ? ' — selesai' : '';
    return (
      '<button type="button" class="' + classes.join(' ') + '" data-level="' + level.id + '"' +
      current + ' aria-label="Buka Level ' + padLevel(level.id) + status + '">' +
      padLevel(level.id) + '</button>'
    );
  }).join('') +
    '<span class="level-nav-meta">' + state.done.length + ' / ' + MAX_LEVEL + ' selesai</span>';

  elements.progressFill.style.width = (state.done.length / MAX_LEVEL) * 100 + '%';
}

function renderLevel(options) {
  const settings = options || {};
  const level = currentLevel();

  elements.levelNumberLabel.textContent = 'LEVEL ' + padLevel(level.id);
  elements.levelCategory.textContent = level.category;
  elements.levelCategory.className = 'topic-pill';
  elements.levelTitle.textContent = level.title;
  elements.levelQuote.textContent = '“' + level.quote + '”';
  elements.tutorialTitle.textContent = level.tutorialTitle;
  elements.tutorialBody.innerHTML = level.tutorial;
  elements.taskBody.innerHTML = level.task;
  elements.expectedOutput.textContent = level.expected;
  elements.clueText.innerHTML = level.clue;
  elements.exampleFile.textContent = state.lang === 'c' ? 'contoh.c' : 'contoh.cpp';
  elements.exampleCode.textContent = level.example[state.lang];

  elements.fileName.textContent = state.lang === 'c' ? 'main.c' : 'main.cpp';
  elements.fileLang.textContent = state.lang === 'c' ? 'C · GCC' : 'C++ · G++';

  elements.codeEditor.value = level.starter[state.lang];
  elements.codeEditor.scrollTop = 0;
  elements.codeEditor.scrollLeft = 0;
  updateLineNumbers();

  resetEditorFeedback();
  closeModal();

  if (settings.resetClue !== false) {
    setClueOpen(false);
  }

  updateHeader();
  updateAsideVideo();
  updateStorageStatus();
  document.title = level.title + ' · LogicForge';

  if (settings.scrollTop) {
    scrollToArticleTop();
  }
}

function setClueOpen(open) {
  elements.clueContent.hidden = !open;
  elements.clueToggle.setAttribute('aria-expanded', String(open));
  elements.clueToggleLabel.textContent = open ? 'Sembunyikan Clue' : 'Tampilkan Clue';
}

function updateAsideVideo() {
  const level = currentLevel();
  const unlocked = state.err >= 3;
  elements.asideVideo.hidden = !unlocked;
  elements.asideVideoTitle.textContent = level.video;
  elements.asideVideoLink.href = youtubeSearchUrl(level.video);
  elements.asideVideoLink.setAttribute('aria-label', 'Tonton video: ' + level.video);
}

function updateLineNumbers() {
  const lineCount = elements.codeEditor.value.split('\n').length;
  if (elements.lineNumbers.childElementCount !== lineCount) {
    let markup = '';
    for (let index = 1; index <= lineCount; index += 1) {
      markup += '<span>' + index + '</span>';
    }
    elements.lineNumbers.innerHTML = markup;
  }
  elements.lineNumbers.scrollTop = elements.codeEditor.scrollTop;
}

function setTerminal(text, options) {
  const settings = options || {};
  elements.terminal.classList.toggle('has-error', Boolean(settings.error));
  elements.terminal.innerHTML = '';
  if (settings.placeholder) {
    const span = document.createElement('span');
    span.className = 'terminal-placeholder';
    span.textContent = text;
    elements.terminal.appendChild(span);
    return;
  }
  elements.terminal.textContent = text;
}

function setConsoleStatus(text, variant) {
  elements.consoleStatus.textContent = text;
  elements.consoleStatusDot.className = 'status-dot' + (variant ? ' ' + variant : '');
}

function resetEditorFeedback() {
  elements.warning.hidden = true;
  elements.warningDetail.hidden = true;
  elements.warningMessage.textContent = '';
  elements.warningDetail.textContent = '';
  elements.successBanner.hidden = true;
  elements.nextLevel.hidden = true;
  setConsoleStatus('Siap', '');
  setTerminal('Jalankan kodemu untuk melihat stdout di sini.', { placeholder: true });
}

function showWarning(title, message, detail) {
  elements.warningTitle.innerHTML = title;
  elements.warningMessage.textContent = message;
  if (detail) {
    elements.warningDetail.textContent = detail;
    elements.warningDetail.hidden = false;
  } else {
    elements.warningDetail.textContent = '';
    elements.warningDetail.hidden = true;
  }
  elements.warning.hidden = false;
}

function stripAnsi(text) {
  return String(text).replace(/\u001b\[[0-9;]*m/g, '');
}

function formatCompilerText(text) {
  const extension = state.lang === 'c' ? 'c' : 'cpp';
  return stripAnsi(text)
    .replace(new RegExp('\\/[^\\s:]*\\/main\\.' + extension + '(?=:)', 'g'), 'main.' + extension)
    .replace(/\bprog\.cc\b/g, 'main.' + extension)
    .replace(/\r\n/g, '\n')
    .trim();
}

function setRunning(running) {
  elements.runButton.disabled = running;
  elements.runSpinner.hidden = !running;
  elements.runIcon.hidden = running;
  elements.runLabel.textContent = running ? 'Compiling & Running…' : 'Compile & Run';
  elements.runButton.setAttribute('aria-busy', String(running));

  if (running) {
    elements.warning.hidden = true;
    elements.successBanner.hidden = true;
    elements.nextLevel.hidden = true;
    setConsoleStatus('Menjalankan', 'is-running');
    setTerminal('Compiling & Running…', { placeholder: true });
  }
}

async function fetchJson(url, options, timeoutMs, externalSignal) {
  const controller = new AbortController();
  let timedOut = false;

  const timer = window.setTimeout(() => {
    timedOut = true;
    controller.abort();
  }, timeoutMs);

  const forwardAbort = () => controller.abort();
  if (externalSignal) {
    if (externalSignal.aborted) {
      controller.abort();
    } else {
      externalSignal.addEventListener('abort', forwardAbort, { once: true });
    }
  }

  try {
    const response = await fetch(url, {
      method: options.method || 'GET',
      headers: options.headers,
      body: options.body,
      signal: controller.signal
    });

    if (!response.ok) {
      const error = new Error('HTTP ' + response.status);
      error.status = response.status;
      throw error;
    }

    return await response.json();
  } catch (error) {
    if (timedOut) {
      const timeoutError = new Error('Waktu permintaan habis.');
      timeoutError.name = 'TimeoutError';
      throw timeoutError;
    }
    throw error;
  } finally {
    window.clearTimeout(timer);
    if (externalSignal) {
      externalSignal.removeEventListener('abort', forwardAbort);
    }
  }
}

async function executeWithPiston(code, signal) {
  const payload = {
    language: state.lang === 'c' ? 'c' : 'c++',
    version: API_VERSION,
    files: [
      {
        name: state.lang === 'c' ? 'main.c' : 'main.cpp',
        content: code
      }
    ],
    stdin: '',
    compile_timeout: 10000,
    run_timeout: 3000
  };

  return fetchJson(
    PISTON_URL,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    },
    15000,
    signal
  );
}

async function executeWithWandbox(code, signal) {
  const payload = {
    code,
    compiler: state.lang === 'c' ? WANDBOX_C_COMPILER : WANDBOX_CPP_COMPILER,
    stdin: '',
    'compiler-option-raw': '',
    'runtime-option-raw': ''
  };

  const data = await fetchJson(
    WANDBOX_URL,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    },
    25000,
    signal
  );

  const compileText = String(data.compiler_error || data.compiler_message || '').trim();
  const programError = String(data.program_error || '').trim();
  const status = Number.parseInt(data.status, 10);
  const exitCode = Number.isFinite(status) ? status : 0;
  const compileFailed = exitCode !== 0 && /\berror\b/i.test(compileText) && programError === '';

  return {
    compile: {
      code: compileFailed ? 1 : 0,
      stderr: compileFailed ? compileText : ''
    },
    run: {
      code: exitCode,
      stdout: String(data.program_output || ''),
      stderr: programError
    }
  };
}

async function executeCode(code, signal) {
  if (pistonAvailable) {
    try {
      return await executeWithPiston(code, signal);
    } catch (error) {
      if (signal && signal.aborted) throw error;
      pistonAvailable = false;
    }
  }

  return executeWithWandbox(code, signal);
}

async function runCode() {
  if (isRunning) return;

  const code = elements.codeEditor.value;
  if (!code.trim()) {
    showWarning('Editor masih kosong', 'Tulis kode terlebih dahulu sebelum menjalankan compiler.', '');
    setConsoleStatus('Menunggu kode', 'is-error');
    setTerminal('Editor masih kosong.', { placeholder: true });
    elements.successBanner.hidden = true;
    elements.nextLevel.hidden = true;
    elements.codeEditor.focus();
    return;
  }

  isRunning = true;
  setRunning(true);

  const generation = ++runGeneration;
  const controller = new AbortController();
  activeAbortController = controller;

  try {
    const result = await executeCode(code, controller.signal);
    if (generation !== runGeneration) return;
    evaluateResult(result);
  } catch (error) {
    if (generation !== runGeneration) return;
    handleCompilerUnavailable(error);
  } finally {
    if (activeAbortController === controller) {
      activeAbortController = null;
    }
    if (generation === runGeneration) {
      isRunning = false;
      setRunning(false);
    }
  }
}

function evaluateResult(result) {
  if (!result || !result.run) {
    throw new Error('Respons compiler tidak lengkap.');
  }

  const compile = result.compile;
  if (compile && compile.code !== 0) {
    handleSyntaxError(compile);
    return;
  }

  const level = currentLevel();
  const expected = level.expected.trim();
  const stdout = typeof result.run.stdout === 'string' ? result.run.stdout : '';
  const actual = stdout.trim();

  if (actual !== expected) {
    handleLogicError(result.run, actual, expected);
    return;
  }

  handleSuccess(result.run, actual);
}

function handleSyntaxError(compile) {
  const detail = formatCompilerText(compile.stderr || compile.output || '');
  showWarning(
    'Peringatan Sintaks <em>(Streak Aman)</em>',
    'Periksa kembali tanda titik koma, tanda kurung, atau penulisan variabel pada baris berikut. Strike dan streak tidak berubah.',
    detail
  );
  setConsoleStatus('Sintaks', 'is-error');
  setTerminal('Kompilasi gagal. Perbaiki sintaks di atas, lalu jalankan lagi.', { placeholder: true });
}

function handleLogicError(run, actual, expected) {
  state.strk = 0;
  state.err = Math.min(Number(state.err) + 1, 999);
  saveState();
  updateHeader();
  updateAsideVideo();

  const runtimeError = Number(run.code) !== 0;
  const detail = formatCompilerText(run.stderr || '');
  const terminalText = (actual || '(tidak ada output)') + (detail ? '\n\n' + detail : '');

  setTerminal(terminalText, { error: false });
  setConsoleStatus('Logic Error', 'is-error');
  elements.successBanner.hidden = true;
  elements.nextLevel.hidden = true;

  openErrorModal(actual, expected, runtimeError);
}

function handleSuccess(run, actual) {
  state.strk += 1;
  state.best = Math.max(state.best, state.strk);
  state.err = 0;
  if (!state.done.includes(state.cur)) {
    state.done.push(state.cur);
    state.done.sort((a, b) => a - b);
  }
  saveState();
  updateHeader();
  updateAsideVideo();
  pulseStreak();

  setTerminal(actual || '(tidak ada output)');
  setConsoleStatus('Passed', 'is-success');
  elements.successBanner.hidden = false;

  if (state.cur >= MAX_LEVEL) {
    elements.successMessage.textContent = 'Output sesuai target. Kamu menyelesaikan seluruh kurikulum!';
    elements.nextLevel.hidden = true;
  } else {
    elements.successMessage.textContent = 'Output sesuai target. Level ' + padLevel(state.cur) + ' selesai!';
    elements.nextLevel.hidden = false;
  }
}

function pulseStreak() {
  elements.streakPill.classList.remove('pulse');
  void elements.streakPill.offsetWidth;
  elements.streakPill.classList.add('pulse');
  window.setTimeout(() => elements.streakPill.classList.remove('pulse'), 500);
}

function openErrorModal(actual, expected, runtimeError) {
  const level = currentLevel();
  const strikes = Math.min(state.err, 3);

  elements.modalBadge.textContent = 'LOGIC ERROR — STRIKE ' + strikes + '/3';
  elements.modalTitle.textContent = strikes >= 3 ? 'Tiga strike tercapai.' : 'Output belum sesuai target.';
  elements.modalDesc.textContent = runtimeError
    ? 'Program berhenti saat runtime sebelum menghasilkan output yang diminta. Bandingkan hasilnya di bawah ini.'
    : 'Kode berhasil dijalankan, tetapi keluaran program belum cocok dengan jawaban yang diminta. Bandingkan hasilnya di bawah ini.';

  elements.modalExpected.textContent = expected;
  elements.modalActual.textContent = actual || '(tidak ada output)';

  elements.modal.querySelectorAll('.strike-dot').forEach((dot, index) => {
    dot.classList.toggle('is-filled', index < strikes);
  });

  elements.modalVideo.hidden = strikes < 3;
  elements.modalVideoTitle.textContent = level.video;
  elements.modalVideoLink.href = youtubeSearchUrl(level.video);
  elements.modalVideoLink.setAttribute('aria-label', 'Tonton video pembahasan: ' + level.video);

  elements.modal.classList.remove('is-shaking');
  if (!elements.modal.open) {
    elements.modal.showModal();
  }
  document.body.classList.add('modal-open');
  void elements.modalCard.offsetWidth;
  elements.modal.classList.add('is-shaking');
  window.setTimeout(() => elements.modal.classList.remove('is-shaking'), 560);
  elements.modalRetry.focus({ preventScroll: true });
}

function closeModal() {
  if (elements.modal.open) {
    elements.modal.close();
  }
  document.body.classList.remove('modal-open');
  elements.modal.classList.remove('is-shaking');
}

function handleCompilerUnavailable(error) {
  const timedOut = error && (error.name === 'AbortError' || error.name === 'TimeoutError');
  const detail = timedOut
    ? 'Waktu tunggu compiler habis sebelum permintaan selesai.'
    : (error && error.message) || 'Terjadi kesalahan jaringan.';

  showWarning(
    'Compiler tidak merespons',
    timedOut
      ? 'Batas waktu koneksi tercapai. Periksa internetmu lalu coba lagi. Progres dan streak tidak berubah.'
      : 'Tidak dapat menghubungi Piston API. Periksa koneksi internet lalu coba lagi. Progres dan streak tidak berubah.',
    detail
  );
  setConsoleStatus('Koneksi gagal', 'is-error');
  setTerminal('Tidak dapat menjalankan kode. Coba lagi setelah koneksi pulih.', { placeholder: true, error: true });
}

function selectLevel(levelId) {
  if (isRunning) return;
  if (!Number.isInteger(levelId) || levelId < 1 || levelId > MAX_LEVEL) return;
  if (levelId === state.cur) {
    scrollToArticleTop();
    return;
  }
  state.cur = levelId;
  state.err = 0;
  saveState();
  renderLevel({ scrollTop: true, resetClue: true });
}

function selectLanguage(language) {
  if (isRunning) return;
  if (language !== 'c' && language !== 'cpp') return;
  if (language === state.lang) return;
  state.lang = language;
  saveState();
  renderLevel({ scrollTop: false, resetClue: false });
}

function resetStarterCode() {
  if (isRunning) return;
  const level = currentLevel();
  elements.codeEditor.value = level.starter[state.lang];
  elements.codeEditor.scrollTop = 0;
  elements.codeEditor.scrollLeft = 0;
  updateLineNumbers();
  resetEditorFeedback();
  elements.codeEditor.focus({ preventScroll: true });
  elements.codeEditor.setSelectionRange(elements.codeEditor.value.length, elements.codeEditor.value.length);
}

function resetProgress() {
  const confirmed = window.confirm('Hapus seluruh progres LogicForge dan mulai lagi dari Level 01?');
  if (!confirmed) return;

  runGeneration += 1;
  if (activeAbortController) {
    activeAbortController.abort();
    activeAbortController = null;
  }
  closeModal();
  deleteCookie();
  state = defaultState();
  isRunning = false;
  setRunning(false);
  renderLevel({ scrollTop: true, resetClue: true });
  updateStorageStatus();

  if (cookieAvailable) {
    elements.storageDot.classList.remove('is-off');
    elements.storageText.textContent = 'Cookie lf_state dihapus · progres kembali ke Level 01.';
  } else {
    elements.storageText.textContent = 'Progres sesi direset · cookie browser tidak tersedia.';
  }
}

function bindEvents() {
  const levelClickHandler = (event) => {
    const button = event.target.closest('[data-level]');
    if (!button) return;
    selectLevel(Number(button.dataset.level));
  };

  elements.headerLevels.addEventListener('click', levelClickHandler);
  elements.levelNav.addEventListener('click', levelClickHandler);

  elements.langButtons.forEach((button) => {
    button.addEventListener('click', () => selectLanguage(button.dataset.lang));
  });

  elements.clueToggle.addEventListener('click', () => {
    setClueOpen(elements.clueContent.hidden);
  });

  elements.resetCode.addEventListener('click', resetStarterCode);
  elements.resetProgress.addEventListener('click', resetProgress);
  elements.runButton.addEventListener('click', runCode);

  elements.nextLevel.addEventListener('click', () => {
    if (state.cur < MAX_LEVEL) selectLevel(state.cur + 1);
  });

  elements.codeEditor.addEventListener('input', updateLineNumbers);
  elements.codeEditor.addEventListener('scroll', () => {
    elements.lineNumbers.scrollTop = elements.codeEditor.scrollTop;
  });

  elements.codeEditor.addEventListener('keydown', (event) => {
    if (event.key === 'Tab' && !event.ctrlKey && !event.metaKey && !event.altKey) {
      event.preventDefault();
      elements.codeEditor.setRangeText('  ', elements.codeEditor.selectionStart, elements.codeEditor.selectionEnd, 'end');
      updateLineNumbers();
      return;
    }

    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      event.preventDefault();
      runCode();
    }
  });

  elements.modalClose.addEventListener('click', closeModal);
  elements.modalRetry.addEventListener('click', () => {
    closeModal();
    elements.codeEditor.focus();
    const end = elements.codeEditor.value.length;
    elements.codeEditor.setSelectionRange(end, end);
  });

  elements.modal.addEventListener('click', (event) => {
    if (event.target === elements.modal) closeModal();
  });

  elements.modal.addEventListener('close', () => {
    document.body.classList.remove('modal-open');
    elements.modal.classList.remove('is-shaking');
  });
}

function init() {
  cookieAvailable = detectCookieSupport();
  state = loadState();
  bindEvents();
  renderLevel({ scrollTop: false, resetClue: true });
  updateStorageStatus();
}

init();
