import TYPES from './SignupPage.constants';

const initialState = {
    signedUpUsers: [],
    status: null,
    message: null,
    totalAttempts: 0,
    success: 0,
    failures: 0
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case TYPES.SIGNING_UP:
            return {
                ...state,
                status: 'doing',
                message: null,
                totalAttempts: state.totalAttempts + 1,
            };

        case TYPES.SIGN_UP:
            return {
                ...state,
                signedUpUsers: [...state.signedUpUsers, action.user],
                status: 'done',
                message: null,
                success: state.success + 1
            };
        case TYPES.SIGN_UP_ERROR:
            return {
                ...state,
                message: action.error,
                failures: state.failures + 1
            }

        default:
            return state;
    }
}