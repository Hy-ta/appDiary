
const TOKEN_KEY = 'jwt';

export const login = () => {
    localStorage.setItem(TOKEN_KEY, 'TestLogin');
}

export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
}

export const isLogIn = () => {
    if (localStorage.getItem('isLoggedIn')) {
        return true;
    }
    console.log(TOKEN_KEY, localStorage)

    return false;
}