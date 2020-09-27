import Home from '../pages/Home';
import Create from '../pages/Create';
import Read from '../pages/Read';
import Update from '../pages/Update';
import Delete from '../pages/Delete';
import Error404 from '../pages/Error404';
import getHash from '../utils/getHash';

import createWorker from '../utils/create/moduleCreate';
import readWorkers from '../utils/read/moduleRead';
import updateWorker from '../utils/update/moduleUpdate';
import deleteWorker from '../utils/delete/moduleDelete';

const routes = {
  '/': Home,
  '/create': Create,
  '/read': Read,
  '/update': Update,
  '/delete': Delete,
};

const router = async () => {
  const content = document.getElementById('app');

  const hash = getHash();
  const render = routes[hash] ? routes[hash] : Error404;
  content.innerHTML = await render();

  switch (hash) {
    case '/create':
      createWorker();
      break;
    case '/read':
      readWorkers();
      break;
    case '/update':
      updateWorker();
      break;
    case '/delete':
      deleteWorker();
      break;
    default:
  }
};

export default router;
