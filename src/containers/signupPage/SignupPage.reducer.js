import { SIGN_UP } from '../../constants';
const initialState = {};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SIGN_UP:
            return Object.assign({}, state,
                { todos: [ ...state.todos,
                    {
                        text: action.text,
                        completed: false
                    }
                    ]
                })
        default:
            return state
    }
}