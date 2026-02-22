// Preview engine for each tahap (renders srcdoc in an iframe)
(function () {
  const stageHtml = {
    1: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Website STS XI</title>
</head>
<body>
  <h1>Website Profil Mini</h1>
  <p>Website ini dibuat untuk latihan HTML dan CSS.</p>
</body>
</html>`,

    2: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Website STS XI</title>
</head>
<body>
  <h1>Website Profil Mini</h1>
  <p>Website ini dibuat untuk latihan HTML dan CSS.</p>

  <h2>Menu</h2>
  <a href="#tentang">Tentang</a> |
  <a href="#galeri">Galeri</a> |
  <a href="#data">Data</a> |
  <a href="#kontak">Kontak</a>

  <h2 id="tentang">Tentang</h2>
  <p>Nama saya <b>(isi nama)</b> dari kelas <b>(isi kelas)</b>.</p>
  <p>Saya suka belajar <i>web</i> karena ingin bisa membuat website sendiri.</p>

  <h2 id="galeri">Galeri</h2>
  <p>(Nanti diisi gambar)</p>

  <h2 id="data">Data</h2>
  <p>(Nanti diisi tabel)</p>

  <h2 id="kontak">Kontak</h2>
  <p>(Nanti diisi form)</p>
</body>
</html>`,

    3: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Website STS XI</title>
</head>
<body>
  <h1>Website Profil Mini</h1>
  <p>Website ini dibuat untuk latihan HTML dan CSS.</p>

  <h2>Menu</h2>
  <a href="#tentang">Tentang</a> |
  <a href="#galeri">Galeri</a> |
  <a href="#data">Data</a> |
  <a href="#kontak">Kontak</a>

  <h2 id="tentang">Tentang</h2>
  <p>Nama saya <b>(isi nama)</b> dari kelas <b>(isi kelas)</b>.</p>
  <p>Saya suka belajar <i>web</i> karena ingin bisa membuat website sendiri.</p>
  <p>Belajar dari:
    <a href="https://www.w3schools.com" target="_blank">W3Schools</a>
  </p>

  <h2 id="galeri">Galeri</h2>
  <p>(Nanti diisi gambar)</p>

  <h2 id="data">Data</h2>
  <p>(Nanti diisi tabel)</p>

  <h2 id="kontak">Kontak</h2>
  <p>(Nanti diisi form)</p>
</body>
</html>`,

    4: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Website STS XI</title>
</head>
<body>
  <h1>Website Profil Mini</h1>
  <p>Website ini dibuat untuk latihan HTML dan CSS.</p>

  <h2>Menu</h2>
  <a href="#tentang">Tentang</a> |
  <a href="#galeri">Galeri</a> |
  <a href="#data">Data</a> |
  <a href="#kontak">Kontak</a>

  <h2 id="tentang">Tentang</h2>
  <p>Nama saya <b>(isi nama)</b> dari kelas <b>(isi kelas)</b>.</p>
  <p>Saya suka belajar <i>web</i> karena ingin bisa membuat website sendiri.</p>
  <p>Belajar dari:
    <a href="https://www.w3schools.com" target="_blank">W3Schools</a>
  </p>

  <h2 id="galeri">Galeri</h2>
  <img src="https://picsum.photos/300/200?random=1" alt="Foto 1">
  <img src="https://picsum.photos/300/200?random=2" alt="Foto 2">
  <img src="https://picsum.photos/300/200?random=3" alt="Foto 3">

  <h2 id="data">Data</h2>
  <p>(Nanti diisi tabel)</p>

  <h2 id="kontak">Kontak</h2>
  <p>(Nanti diisi form)</p>
</body>
</html>`,

    5: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Website STS XI</title>
</head>
<body>
  <h1>Website Profil Mini</h1>
  <p>Website ini dibuat untuk latihan HTML dan CSS.</p>

  <h2>Menu</h2>
  <a href="#tentang">Tentang</a> |
  <a href="#galeri">Galeri</a> |
  <a href="#data">Data</a> |
  <a href="#kontak">Kontak</a>

  <h2 id="tentang">Tentang</h2>
  <p>Nama saya <b>(isi nama)</b> dari kelas <b>(isi kelas)</b>.</p>
  <p>Saya suka belajar <i>web</i> karena ingin bisa membuat website sendiri.</p>
  <p>Belajar dari:
    <a href="https://www.w3schools.com" target="_blank">W3Schools</a>
  </p>

  <h2 id="galeri">Galeri</h2>
  <img src="https://picsum.photos/300/200?random=1" alt="Foto 1">
  <img src="https://picsum.photos/300/200?random=2" alt="Foto 2">
  <img src="https://picsum.photos/300/200?random=3" alt="Foto 3">

  <h2 id="data">Data Kegiatan</h2>
  <table border="1" cellpadding="8">
    <tr>
      <th>No</th><th>Kegiatan</th><th>Hari</th><th>Jam</th>
    </tr>
    <tr><td>1</td><td>Latihan</td><td>Senin</td><td>15.00</td></tr>
    <tr><td>2</td><td>Rapat</td><td>Rabu</td><td>14.00</td></tr>
    <tr><td>3</td><td>Evaluasi</td><td>Jumat</td><td>13.00</td></tr>
    <tr><td>4</td><td>Kegiatan Sosial</td><td>Sabtu</td><td>09.00</td></tr>
  </table>

  <h2 id="kontak">Kontak</h2>
  <p>(Nanti diisi form)</p>
</body>
</html>`,

    6: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Website STS XI</title>
</head>
<body>
  <h1>Website Profil Mini</h1>
  <p>Website ini dibuat untuk latihan HTML dan CSS.</p>

  <h2>Menu</h2>
  <a href="#tentang">Tentang</a> |
  <a href="#galeri">Galeri</a> |
  <a href="#data">Data</a> |
  <a href="#kontak">Kontak</a>

  <h2 id="tentang">Tentang</h2>
  <p>Nama saya <b>(isi nama)</b> dari kelas <b>(isi kelas)</b>.</p>
  <p>Saya suka belajar <i>web</i> karena ingin bisa membuat website sendiri.</p>
  <p>Belajar dari:
    <a href="https://www.w3schools.com" target="_blank">W3Schools</a>
  </p>

  <h2 id="galeri">Galeri</h2>
  <img src="https://picsum.photos/300/200?random=1" alt="Foto 1">
  <img src="https://picsum.photos/300/200?random=2" alt="Foto 2">
  <img src="https://picsum.photos/300/200?random=3" alt="Foto 3">

  <h2 id="data">Data Kegiatan</h2>
  <table border="1" cellpadding="8">
    <tr><th>No</th><th>Kegiatan</th><th>Hari</th><th>Jam</th></tr>
    <tr><td>1</td><td>Latihan</td><td>Senin</td><td>15.00</td></tr>
    <tr><td>2</td><td>Rapat</td><td>Rabu</td><td>14.00</td></tr>
    <tr><td>3</td><td>Evaluasi</td><td>Jumat</td><td>13.00</td></tr>
    <tr><td>4</td><td>Kegiatan Sosial</td><td>Sabtu</td><td>09.00</td></tr>
  </table>

  <h2 id="kontak">Kontak / Pendaftaran</h2>
  <form action="#" method="GET">
    <p>Nama:<br><input type="text" name="nama" placeholder="Masukkan nama" required></p>
    <p>Email:<br><input type="email" name="email" placeholder="contoh@email.com" required></p>
    <p>Kategori:<br>
      <input type="radio" name="kategori" value="siswa" required> Siswa
      <input type="radio" name="kategori" value="guru"> Guru
    </p>
    <p>Minat:<br>
      <input type="checkbox" name="minat" value="coding"> Coding
      <input type="checkbox" name="minat" value="desain"> Desain
      <input type="checkbox" name="minat" value="multimedia"> Multimedia
    </p>
    <p>Pesan:<br><textarea name="pesan" rows="4" placeholder="Tulis pesan..."></textarea></p>
    <button type="submit">Kirim</button>
  </form>
</body>
</html>`,

    7: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Website STS XI</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 0; background: #f4f6f8; color: #222; }
    h1 { margin: 16px; }
    .box { background: white; margin: 16px; padding: 16px; border: 1px solid #ddd; border-radius: 12px; }
    img { width: 220px; height: 150px; object-fit: cover; border-radius: 12px; border: 2px solid #eee; }
  </style>
</head>
<body>
  <h1>Website Profil Mini</h1>

  <div class="box">
    <p>Website ini dibuat untuk latihan HTML dan CSS.</p>
    <h2>Menu</h2>
    <a href="#tentang">Tentang</a> |
    <a href="#galeri">Galeri</a> |
    <a href="#data">Data</a> |
    <a href="#kontak">Kontak</a>
  </div>

  <div class="box" id="tentang">
    <h2>Tentang</h2>
    <p>Nama saya <b>(isi nama)</b> dari kelas <b>(isi kelas)</b>.</p>
    <p>Saya suka belajar <i>web</i> karena ingin bisa membuat website sendiri.</p>
    <p>Belajar dari: <a href="https://www.w3schools.com" target="_blank">W3Schools</a></p>
  </div>

  <div class="box" id="galeri">
    <h2>Galeri</h2>
    <img src="https://picsum.photos/300/200?random=1" alt="Foto 1">
    <img src="https://picsum.photos/300/200?random=2" alt="Foto 2">
    <img src="https://picsum.photos/300/200?random=3" alt="Foto 3">
  </div>

  <div class="box" id="data">
    <h2>Data Kegiatan</h2>
    <table border="1" cellpadding="8">
      <tr><th>No</th><th>Kegiatan</th><th>Hari</th><th>Jam</th></tr>
      <tr><td>1</td><td>Latihan</td><td>Senin</td><td>15.00</td></tr>
      <tr><td>2</td><td>Rapat</td><td>Rabu</td><td>14.00</td></tr>
      <tr><td>3</td><td>Evaluasi</td><td>Jumat</td><td>13.00</td></tr>
      <tr><td>4</td><td>Kegiatan Sosial</td><td>Sabtu</td><td>09.00</td></tr>
    </table>
  </div>

  <div class="box" id="kontak">
    <h2>Kontak / Pendaftaran</h2>
    <form action="#" method="GET">
      <p>Nama:<br><input type="text" name="nama" required></p>
      <p>Email:<br><input type="email" name="email" required></p>
      <p>Kategori:<br>
        <input type="radio" name="kategori" value="siswa" required> Siswa
        <input type="radio" name="kategori" value="guru"> Guru
      </p>
      <p>Minat:<br>
        <input type="checkbox" name="minat" value="coding"> Coding
        <input type="checkbox" name="minat" value="desain"> Desain
        <input type="checkbox" name="minat" value="multimedia"> Multimedia
      </p>
      <p>Pesan:<br><textarea name="pesan" rows="4"></textarea></p>
      <button type="submit">Kirim</button>
    </form>
  </div>
</body>
</html>`,

    8: `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Website STS XI</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 0; background: #f4f6f8; color: #222; }
    .navbar { background: white; border-bottom: 1px solid #ddd; padding: 16px 20px; display:flex; justify-content:space-between; align-items:center; gap:16px; flex-wrap:wrap; }
    .brand { font-weight:bold; font-size:18px; }
    .menu { display:flex; gap:8px; flex-wrap:wrap; }
    .menu a { text-decoration:none; color:#222; padding:8px 12px; border-radius:8px; }
    .menu a:hover { background:#e9eef3; }
    .container { max-width:950px; margin:20px auto; padding:0 16px; }
    .box { background:white; margin-bottom:16px; padding:16px; border:1px solid #ddd; border-radius:12px; }
    .galeri { display:flex; gap:12px; flex-wrap:wrap; }
    .galeri img { width:220px; height:150px; object-fit:cover; border-radius:12px; border:2px solid #eee; transition:.2s; }
    .galeri img:hover { transform:scale(1.03); opacity:.9; }
    table { width:100%; border-collapse:collapse; margin-top:10px; }
    th, td { border:1px solid #ddd; padding:10px; text-align:left; }
    th { background:#f2f2f2; }
    input, textarea { width:100%; padding:10px; border:1px solid #ccc; border-radius:10px; box-sizing:border-box; }
    button { background:#1f6feb; color:white; border:none; padding:10px 14px; border-radius:10px; cursor:pointer; }
    button:hover { opacity:.9; }
    footer { text-align:center; padding:16px; color:#666; }
  </style>
</head>
<body>
  <div class="navbar">
    <div class="brand">Profil Mini (STS XI)</div>
    <div class="menu">
      <a href="#tentang">Tentang</a>
      <a href="#galeri">Galeri</a>
      <a href="#data">Data</a>
      <a href="#kontak">Kontak</a>
    </div>
  </div>

  <div class="container">
    <div class="box" id="tentang">
      <h2>Tentang</h2>
      <p>Nama saya <b>(isi nama)</b> dari kelas <b>(isi kelas)</b>.</p>
      <p>Saya suka belajar <i>web</i> karena ingin bisa membuat website sendiri.</p>
      <p>Belajar dari: <a href="https://www.w3schools.com" target="_blank">W3Schools</a></p>
    </div>

    <div class="box" id="galeri">
      <h2>Galeri</h2>
      <div class="galeri">
        <img src="https://picsum.photos/300/200?random=1" alt="Foto 1">
        <img src="https://picsum.photos/300/200?random=2" alt="Foto 2">
        <img src="https://picsum.photos/300/200?random=3" alt="Foto 3">
      </div>
    </div>

    <div class="box" id="data">
      <h2>Data Kegiatan</h2>
      <table>
        <thead><tr><th>No</th><th>Kegiatan</th><th>Hari</th><th>Jam</th></tr></thead>
        <tbody>
          <tr><td>1</td><td>Latihan</td><td>Senin</td><td>15.00</td></tr>
          <tr><td>2</td><td>Rapat</td><td>Rabu</td><td>14.00</td></tr>
          <tr><td>3</td><td>Evaluasi</td><td>Jumat</td><td>13.00</td></tr>
          <tr><td>4</td><td>Kegiatan Sosial</td><td>Sabtu</td><td>09.00</td></tr>
        </tbody>
      </table>
    </div>

    <div class="box" id="kontak">
      <h2>Kontak / Pendaftaran</h2>
      <form action="#" method="GET">
        <p>Nama:<br><input type="text" name="nama" placeholder="Masukkan nama" required></p>
        <p>Email:<br><input type="email" name="email" placeholder="contoh@email.com" required></p>
        <p>Kategori:<br>
          <input type="radio" name="kategori" value="siswa" required> Siswa
          <input type="radio" name="kategori" value="guru"> Guru
        </p>
        <p>Minat:<br>
          <input type="checkbox" name="minat" value="coding"> Coding
          <input type="checkbox" name="minat" value="desain"> Desain
          <input type="checkbox" name="minat" value="multimedia"> Multimedia
        </p>
        <p>Pesan:<br><textarea name="pesan" rows="4" placeholder="Tulis pesan..."></textarea></p>
        <button type="submit">Kirim</button>
      </form>
    </div>
  </div>

  <footer><small>© 2026 - STS Kelas XI | 1 Page Website</small></footer>
</body>
</html>`
  };

  const modal = document.getElementById("previewModal");
  const frame = document.getElementById("previewFrame");
  const title = document.getElementById("previewTitle");

  function openModal(stage) {
    const html = stageHtml[stage];
    if (!html) return;
    title.textContent = `Preview Tahap ${stage}`;
    // srcdoc renders the HTML without needing separate files
    frame.srcdoc = html;
    modal.hidden = false;
    modal.setAttribute("aria-hidden", "false");
    // prevent background scroll
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.hidden = true;
    modal.setAttribute("aria-hidden", "true");
    frame.srcdoc = "";
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
  }

  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".js-preview");
    if (btn) {
      openModal(btn.dataset.stage);
      return;
    }
    if (e.target && e.target.dataset && e.target.dataset.close) {
      closeModal();
      return;
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.hidden) closeModal();
  });
})();