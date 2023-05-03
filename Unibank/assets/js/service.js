let btns = document.querySelectorAll('.map_button');

for (const btn of btns) {
    btn.onclick = function (e) {
        e.preventDefault();
        let active = document.querySelector('.active_button');

        if (!(btn.classList.contains('active_button'))) {
            btn.classList.add('active_button')
            active.classList.remove('active_button')
        }
    }
}