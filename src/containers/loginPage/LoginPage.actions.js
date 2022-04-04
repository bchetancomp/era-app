import actionTypes from './LoginPage.constants';

// login
export function logIn(opt, signedUsers, callBack) {
    function matchInSignedUpUsers() {
        let matched = false;
        if(signedUsers && signedUsers.length > 0) {
            for(var signedUser of signedUsers) {
                if(signedUser.username === opt.username && signedUser.password === opt.password) {
                    matched = true;
                    break;
                }
            }
        }
        return matched;
    }

    return (dispatch) => {
        dispatch({
            'type': actionTypes.SIGNING_IN
        });
        setTimeout(function () {
            fetch('https://github.com/', {
                mode: 'no-cors'
            })
            .then((res) => {
                if(opt.username === 'admin' && opt.password === 'admin' || matchInSignedUpUsers()) {
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
            type: actionTypes.SIGN_OUT,
            message: 'You have signed out from the application'
        });
        setTimeout(function () {
            callBack();
        }, 1000);
    }
}