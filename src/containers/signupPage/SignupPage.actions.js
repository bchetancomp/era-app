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
                dispatch({
                    'type': actionTypes.SIGN_UP,
                    user: testUser
                });
                if (typeof callBack === 'function') {
                    callBack();
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