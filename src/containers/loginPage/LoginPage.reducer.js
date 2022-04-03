import TYPES from './LoginPage.constants';

const initialState = {
    isLoggedIn: false,
    user: {},
    status: null,
};

export default function reducer(state = initialState, action) {

    switch (action.type) {
        case TYPES.SIGNING_IN:
            return {
                ...state,
                status: 'doing'
            };

        case TYPES.SIGN_IN:
            return {
                ...state,
                isLoggedIn: true,
                user: action.user,
                status: 'done'
            };

        case TYPES.SIGN_OUT:
            return {
                ...state,
                isLoggedIn: false,
                user: {},
                status: null
            };
        case TYPES.SIGN_IN_ERROR:
            return {
                ...state,
                isLoggedIn: false,
                user: {},
                status: null
            }

        default:
            return state;
    }

}
