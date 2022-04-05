import {SIGN_IN, SIGN_OUT, SIGNING_IN, SIGN_IN_ERROR, CLEAR_SIGN_IN_STATS} from './constants';

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
        case SIGNING_IN:
            return {
                ...state,
                status: 'doing',
                message: null,
                totalAttempts: state.totalAttempts + 1
            };

        case SIGN_IN:
            return {
                ...state,
                isLoggedIn: true,
                user: action.payload,
                status: 'done',
                message: null,
                success: state.success + 1
            };

        case SIGN_OUT:
            return {
                ...state,
                isLoggedIn: false,
                user: {},
                status: null,
                message: action.payload
            };
        case SIGN_IN_ERROR:
            return {
                ...state,
                isLoggedIn: false,
                user: {},
                status: null,
                message: action.payload,
                failures: state.failures + 1
            }
        case CLEAR_SIGN_IN_STATS:
            return {
                ...state,
                success: 0,
                failures: 0,
                totalAttempts: 0
            }

        default:
            return state;
    }
}