if (!localStorage.getItem('cards')) {
  localStorage.setItem('cards', JSON.stringify([]));
}

let buttons = document.querySelectorAll('.btn-add');

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
        toaster.style.backgroundColor = 'green'
        showToast('Səbətə əlavə olundu!');
        showCount();

      } else {
        existProd.Count += 1;
        toaster.style.backgroundColor = 'red'
        showToast('Artıq mövcuddur!');
      }


      localStorage.setItem('cards', JSON.stringify(allcards));
      showCount();
    }
  });
}

function showCount() {
  let cards = JSON.parse(localStorage.getItem('cards'));
  document.querySelector('sup').innerHTML = cards.length;
}

showCount();

let toaster = document.getElementById('toaster');

function showToast(message) {
  toaster.textContent = message;
  toaster.classList.remove('hidden');

  setTimeout(() => {
    toaster.classList.add('hidden');
  }, 1500);
}
