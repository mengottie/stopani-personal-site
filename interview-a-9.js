import {MDCList} from '@material/list';
import {MDCTopAppBar} from "@material/top-app-bar";
import {MDCDrawer} from "@material/drawer";
import {MDCRipple} from '@material/ripple';

const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));
const collapseDrawer = () => {
  drawer.open = !drawer.open;
}

drawer.listen('click', () => {
 collapseDrawer();
})

const topAppBar = MDCTopAppBar.attachTo(document.getElementById('app-bar'));
topAppBar.setScrollTarget(document.getElementById('main-content'));
topAppBar.listen('MDCTopAppBar:nav', () => {
  collapseDrawer();
});

const buttonRipple = new MDCRipple(document.querySelector('.mdc-button'));

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scttBtn").style.display = "block";
  } else {
    document.getElementById("scttBtn").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  console.log('click scroll to top');
}


const scttBtn = document.getElementById('scttBtn');
scttBtn.addEventListener('click', () => {topFunction()});