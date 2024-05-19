let modal = document.getElementById('modal');
let floating_button = document.getElementById('floating_button');
let modal_bg = document.getElementById('modal_bg');
let addlist_form = document.getElementById('addlist_form');
let root = document.getElementById('root');
let subtitle = document.getElementById('subtitle');

// atur subtitle
subtitle.innerHTML = new Date().toLocaleDateString();

// atur style pada modal display menjadi flex
floating_button.addEventListener('click', () => {
  // munculkan modal
  if (modal.style.display == 'none') {
    showModal();

    return;
  }
  // sembunyikan kembali
  hideModal();
});

// menambahkan event listener ke modal bg
modal_bg.addEventListener('click', () => {
  // sembunyikan kembali
  hideModal();
});

// tambahkan list belanja
let data_list_belanja = [];

// menambah kan addlist form
addlist_form.addEventListener('submit', (event) => {
  // stop dari reload page
  event.preventDefault();

  // tangkap value dari masing masing input void
  let barang = event.target.barang.value;
  let harga = event.target.harga.value;

  // push data ke datalist belanja
  data_list_belanja.push({
    nama_barang: barang,
    harga_barang: harga,
    tanggal: new Date().toLocaleDateString(),
  });

  console.info(data_list_belanja);

  // clear input field
  event.target.harga.value = '';
  event.target.barang.value = '';

  hideModal();
  renderToHtml();
});

// show
function showModal() {
  modal.style.display = 'flex';
  floating_button.style.backgroundColor = 'gray';
  floating_button.style.transform = 'rotate(45deg)';
}

// hide modal

function hideModal() {
  modal.style.display = 'none';
  floating_button.style.backgroundColor = '#f280b6';
  floating_button.style.transform = 'rotate(0deg)';
}

// render function
function renderToHtml() {
  // clear
  root.innerHTML = '';

  // perulangan
  data_list_belanja.forEach((e, i) => {
    root.innerHTML += `
    <div class="card">
    <small> ${e.tanggal} </small>
    <div>
    ${e.nama_barang}   <span> Rp. ${e.harga_barang} </span>
    
    </div>
    <button onclick="handleDelete(${i})">selesai</button>
    </div>
    `;
  });
}

// untuk delet selesai
function handleDelete(index) {
  data_list_belanja.splice(index, 1);

  renderToHtml();
}
