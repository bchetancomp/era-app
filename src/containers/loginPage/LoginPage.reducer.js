import { SIGN_IN } from '../../constants';
const initialState = {};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SIGN_IN:
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
