import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();
history.listen(_ => {
  window.scrollTo(0, 0)
})