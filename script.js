function login(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  
  if(username && password) {
    localStorage.setItem('salesUser', username);
    window.location.href = 'input.html';
  } else {
    document.getElementById('error').innerText = 'Login gagal, coba lagi';
  }
}

function saveData(event) {
  event.preventDefault();
  const data = {
    customer: document.getElementById('customer').value,
    paket: document.getElementById('paket').value,
    harga: document.getElementById('harga').value,
    sales: document.getElementById('sales').value,
    area: document.getElementById('area').value,
    koordinator: document.getElementById('koordinator').value,
    user: localStorage.getItem('salesUser')
  };
  
  let salesData = JSON.parse(localStorage.getItem('salesData')) || [];
  salesData.push(data);
  localStorage.setItem('salesData', JSON.stringify(salesData));
  
  document.getElementById('success').innerText = 'Data berhasil disimpan!';
  event.target.reset();
}