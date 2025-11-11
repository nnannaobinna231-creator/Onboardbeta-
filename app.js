let tabs = document.querySelectorAll(".tab");
let tab_id = 0;
let line = document.querySelector(".line span");
let btns = document.querySelectorAll(".nav button");
const show_tab = (tab_id) => {
    tabs.forEach(tab => {
        tab.classList.add("hide");
    })
    tabs[tab_id].classList.remove('hide');
    line.style = `--l:${(tab_id / (tabs.length - 1)) * 100}%`;
}
show_tab(tab_id);
btns.forEach(btn => {
    btn.onclick = (e) => {
        if (btn.classList.contains('next')) {
            tab_id++
        } else {
            tab_id--;
        }
        if (tab_id >= tabs.length) {
            tab_id--;
        }


        show_tab(tab_id);
    }
})
