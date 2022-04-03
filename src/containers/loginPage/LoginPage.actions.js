import actionTypes from './LoginPage.constants';

// login
export function logIn(opt, callBack) {
    return (dispatch) => {
        dispatch({
            'type': actionTypes.SIGNING_IN
        });
        setTimeout(function () {
            fetch('https://github.com/', {
                mode: 'no-cors'
            })
            .then((res) => {
                if(opt.username === 'admin' && opt.password === 'admin') {
                    dispatch({
                        'type': actionTypes.SIGN_IN,
                        user: opt
                    });
                    if (typeof callBack === 'function') {
                        callBack();
                    }
                }else {
                   dispatch({
                       'type': actionTypes.SIGN_IN_ERROR,
                       error: 'Username or password is incorrect'
                   });
                }
            }).catch((err) => {
                dispatch({
                    'type': actionTypes.SIGN_IN_ERROR,
                    error: err
                });
            });
        }, 3000);

    }
}


export function logOut(callBack) {
    return (dispatch) => {
        dispatch({
            type: actionTypes.SIGN_OUT
        });
        setTimeout(function () {
            callBack();
        }, 1000);
    }
}