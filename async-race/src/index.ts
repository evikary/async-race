import './style.css';
import header from './components/header/header';
import pageGarage from './pages/garage/garage';
import store from './store/store';
import pageWinners from './pages/winners/winners';
import getCarsApi from './pages/garage/data';
import { selectCurrentPage } from './store/selector';

store.subscribe(render);

function render() {
  const state = store.getState();

  if (state.viewPage === 'garage') {
    document.body.innerHTML = '';
    document.body.append(header);
    document.body.append(pageGarage());
  } else {
    document.body.innerHTML = '';
    document.body.append(header);
    document.body.append(pageWinners());
  }
}

getCarsApi(selectCurrentPage());
render();
