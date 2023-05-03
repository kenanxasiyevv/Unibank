let btns = document.querySelectorAll('.wrapper_button');

for (const btn of btns) {
    btn.onclick = function (e) {
        e.preventDefault();
        let active = document.querySelector('.active_wrapper_button');

        if (!(btn.classList.contains('active_wrapper_button'))) {
            btn.classList.add('active_wrapper_button')
            active.classList.remove('active_wrapper_button')
        }
    }
}

function playVideo() {
    var iframe = document.getElementById("video_iframe");
    iframe.setAttribute("src", iframe.getAttribute("src") + "&autoplay=1");

    iframe.style.zIndex = '2';
    iframe.style.height = '400px';
    iframe.style.width = '1181px';
    iframe.style.margin = '0';

    document.querySelector('.video_bar').style.height = '400px'
}