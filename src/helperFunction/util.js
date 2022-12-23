import { createBrowserHistory } from 'history';

export function getAuthTokenFromLocalStorage() {
    return localStorage.getItem("token");
}
export const history = createBrowserHistory();