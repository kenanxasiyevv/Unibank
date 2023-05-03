function FetchItems() {
  let itemList = JSON.parse(localStorage.getItem('cards'));
  let alertMessage = document.querySelector('.alertmesage');

  if (!itemList || itemList.length === 0) {
    alertMessage?.classList.remove('d-none');
    document.querySelector('table')?.classList.add('d-none');
  } else {
    alertMessage.classList?.add('d-none');
    document.querySelector('table')?.classList.remove('d-none');


    let x = '';
    itemList.forEach((item, index) => {
      x += `
        <tr class= 'trtable'>
          <th id="${index}" scope="row">${item.Id}</th>
          <td>
            <img class='tableimg' src=${item.Image}>
          </td>
          <td class='type'>${item.Type}</td>
          <td class = 'descriptiontb'><p>${item.Description}</p></td>
          <td>
            <input class='inputtb type-light' id="countvalue" type="number" min="1" value=${item.Count}>
          </td>
          <td class='pricee'>${item.Price}<strong>AZN</strong></td>
          <td>${parseInt(item.Price) * parseInt(item.Count)} AZN</td>
          <td>
            <button class="btn btn-danger">Remove</button>
          </td>
        </tr>
      `;
    });
    document.querySelector('tbody').innerHTML = x;


    let countvalues = document.querySelectorAll('#countvalue');

    countvalues.forEach((inp, index) => {
      inp.addEventListener('change', function () {
        let itemList = JSON.parse(localStorage.getItem('cards'));
        let count = parseInt(this.value);
        itemList[index].Count = count;
        let priceSpan = this.parentNode.nextElementSibling;
        priceSpan.innerHTML = `${(count) * (itemList[index].Price)} AZN`;
        localStorage.setItem('cards', JSON.stringify(itemList));
        updateTotal();
        FetchItems();
      });
    });

    let buttons = document.querySelectorAll('.btn-danger');

    buttons.forEach((btn, index) => {
      btn.addEventListener('click', function () {
        let itemList = JSON.parse(localStorage.getItem('cards'));
        itemList.splice(index, 1);
        localStorage.setItem('cards', JSON.stringify(itemList));
        FetchItems();
        showCount();
        updateTotal();

        toasterr.style.backgroundColor = 'red'
        showToastt('Kart silindi!');
      });
    });

  }

}

let toasterr = document.getElementById('toasterr');

function showToastt(message) {
  toasterr.textContent = message;
  toasterr.classList.remove('hidden');

  setTimeout(() => {
    toasterr.classList.add('hidden');
  }, 1500);
}


function updateTotal() {
  let itemList = JSON.parse(localStorage.getItem('cards'));
  let totalcount = 0;
  let totalprice = 0;

  if (itemList) {
    for (let i = 0; i < itemList.length; i++) {
      totalcount += itemList[i].Count;
      totalprice += parseInt(itemList[i].Price) * parseInt(itemList[i].Count);
    }
  }

  document.querySelector('.totalcount').innerHTML = totalcount;
  document.querySelector('.totalprice').innerHTML = totalprice.toFixed(2) + ' AZN';
}

function showCount() {
  let itemList = JSON.parse(localStorage.getItem('cards'));
  document.querySelector('sup').innerHTML = itemList.length;
}

FetchItems();
showCount();
updateTotal();
