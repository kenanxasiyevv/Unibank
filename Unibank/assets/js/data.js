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
            <td>${item.Type}</td>
            <td class = 'descriptiontb'><p>${item.Description}</p></td>
            <td>
              <input class='inputtb' id="countvalue${index}" type="number" min="1" value=${item.Count}>
            </td>
            <td>${item.Price}<strong>AZN</strong></td>
            <td>${parseInt(item.Price) * parseInt(item.Count)} AZN</td>
            <td>
              <button class="btn btn-danger">Remove</button>
            </td>
          </tr>
        `;
    });
    document.querySelector('tbody').innerHTML = x;

    let buttons = document.querySelectorAll('.btn-danger');

    buttons.forEach((btn, index) => {
      btn.addEventListener('click', function () {
        let itemList = JSON.parse(localStorage.getItem('cards'));
        itemList.splice(index, 1);
        localStorage.setItem('cards', JSON.stringify(itemList));
        FetchItems();
        showCount();
        updateTotal();
      });
    });

    let countvalues = document.querySelectorAll('#countvalue');

    for (let i = 0; i < countvalues.length; i++) {
      countvalues[i].addEventListener('input', changeCount);
    }
  }
}

function changeCount() {
  let itemList = JSON.parse(localStorage.getItem('cards'));

  for (let i = 0; i < countvalues.length; i++) {
    let count = parseInt(countvalues[i].value);
    itemList[i].Count = count;
  }
  localStorage.setItem('cards', JSON.stringify(itemList));
  updateTotal();
  FetchItems();
  window.location.reload();
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

  if (document.querySelector('.totalcount').innerHTML && document.querySelector('.totalprice').innerHTML) {
    document.querySelector('.totalcount').innerHTML = totalcount;
    document.querySelector('.totalprice').innerHTML = totalprice.toFixed(2) + ' AZN';
  }


}

function showCount() {
  let itemList = JSON.parse(localStorage.getItem('cards'));
  document.querySelector('sup').innerHTML = itemList.length;
}

FetchItems();
showCount();
updateTotal();






for (let btn of buttons) {
  btn.addEventListener('click', function (e) {
    e.preventDefault();

    if (this.previousElementSibling !== null) {
      let id = this.parentElement.id;
      let type = this.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;
      let price = this.previousElementSibling.previousElementSibling.innerHTML;
      let img = this.parentElement.firstElementChild.src;
      let description = this.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;

      let allcards = JSON.parse(localStorage.getItem('cards'));

      let existProd = allcards.find(item => item.Id === parseInt(id));

      if (existProd === undefined) {
        allcards.push({
          Id: parseInt(id),
          Image: img,
          Count: 1,
          Type: type,
          Price: price,
          Description: description
        });
        showCount();

      } else {
        existProd.Count += 1;
        document.querySelector('.toaster').innerHTML = 'Already added!'
        document.querySelector('.toaster').style.backgroundColor = 'red'
      }

      document.querySelector('.toaster').style.right = '5%'
      setTimeout(() => {
        document.querySelector('.toaster').style.right = '-20%'
      }, 1300);

      localStorage.setItem('cards', JSON.stringify(allcards));
      showCount();
    }
  });
}
