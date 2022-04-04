import actionTypes from './SignupPage.constants';


// login
export function signUp(opt, callBack) {
    return (dispatch) => {
        dispatch({
            'type': actionTypes.SIGNING_UP
        });
        setTimeout(function () {
            fetch('https://github.com/', {
                mode: 'no-cors'
            })
            .then((res) => {
                if(opt.email && opt.email.indexOf('gmail.com') > -1) {
                    dispatch({
                        'type': actionTypes.SIGN_UP,
                        user: opt
                    });
                    if (typeof callBack === 'function') {
                        callBack();
                    }
                } else {
                    dispatch({
                        'type': actionTypes.SIGN_UP_ERROR,
                        error: 'Can Signup with gmail only'
                    });
                }
            }).catch((err) => {
                dispatch({
                    'type': actionTypes.SIGN_UP_ERROR,
                    error: err
                });
            });
        }, 3000);

    }
}