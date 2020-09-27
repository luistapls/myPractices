/* import Home from './pages/htmlGarbage/js/views/Home';
import Create from './pages/htmlGarbage/js/views/Create';
import Read from './pages/htmlGarbage/js/views/Read';
import Update from './pages/htmlGarbage/js/views/Update';
import Delete from './pages/htmlGarbage/js/views/Delete';

const router = async () => {
  const routes = [
    { path: '/', view: Home },
    { path: '/create', view: Create },
    { path: '/read', view: Read },
    { path: '/update', view: Update },
    { path: '/delete', view: Delete },
  ];

  const potentialMatches = routes.map((route) => {
    return {
      route,
      isMatch: window.location.pathname === route.path,
    };
  });

  let match = potentialMatches.find((potentialMatch) => potentialMatch.isMatch);

  if (!match) {
    match = {
      route: routes[0],
      isMatch: true,
    };
  }

  const view = new match.route.view();

  document.getElementById('app').innerHTML = await view.getHtml();
};

const navigateTo = (url) => {
  window.history.pushState(null, null, url);
  router();
};

window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', (e) => {
    if (e.target.matches('[data-link]')) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });
  router();
});
 */
import router from './routes';

window.addEventListener('load', router);
window.addEventListener('hashchange', router);
