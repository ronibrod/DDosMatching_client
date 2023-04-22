import Axios from 'axios';

const USER_URL = 'http://localhost:3000/users';

export async function signUpApi(user) {
    try {
        const uname = user.firstName + ' ' + user.lastName;
        const res  = await Axios.post(USER_URL + '/register', { username: uname, password: user.password });
        console.log(res.data)
        localStorage.setItem("accessToken", res.data.accessToken);
    } catch (error) {
        console.log(error);
        return error;
    }
}

export async function signInApi(user) {
    try {
        const { accessToken } = await Axios.post(USER_URL + '/login', user).data;
        localStorage.setItem("accessToken", accessToken);
    } catch (error) {
        console.log(error);
        return error;
    }
}
