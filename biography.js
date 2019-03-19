import {MDCList} from '@material/list';
import {MDCTopAppBar} from "@material/top-app-bar";
import {MDCDrawer} from "@material/drawer";

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
new MDCList(document.querySelector('.mdc-list'));