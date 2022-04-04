import TYPES from './LoginPage.constants';

const initialState = {
    isLoggedIn: false,
    user: {},
    status: null,
    message: null,
    totalAttempts: 0,
    success: 0,
    failures: 0
};

export default function reducer(state = initialState, action) {

    switch (action.type) {
        case TYPES.SIGNING_IN:
            return {
                ...state,
                status: 'doing',
                message: null,
                totalAttempts: state.totalAttempts + 1
            };

        case TYPES.SIGN_IN:
            return {
                ...state,
                isLoggedIn: true,
                user: action.user,
                status: 'done',
                message: null,
                success: state.success + 1
            };

        case TYPES.SIGN_OUT:
            return {
                ...state,
                isLoggedIn: false,
                user: {},
                status: null,
                message: action.message
            };
        case TYPES.SIGN_IN_ERROR:
            return {
                ...state,
                isLoggedIn: false,
                user: {},
                status: null,
                message: action.error,
                failures: state.failures + 1
            }

        default:
            return state;
    }

}
