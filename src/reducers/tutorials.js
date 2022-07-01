// Flow : types -> initial state -> reducer function 

import {
    CREATE_TUTORIAL,
    UPDATE_TUTORIAL,
    DELETE_TUTORIAL,
    DELETE_ALL_TUTORIALS,
    RETRIEVE_TUTORIALS
} from "../actions/types.js";

const initialState = [];

function tutorialReducer(tutorials = initialState, action){
    const {type, payload} = action;
    switch (type) {
        case CREATE_TUTORIAL:
            return [...tutorials, payload]
        case RETRIEVE_TUTORIALS:
            return payload;
        case DELETE_TUTORIAL:
            return tutorials.filter(({id}) => id !== payload.id);
        case DELETE_ALL_TUTORIALS:
            return []
        case UPDATE_TUTORIAL:
            return tutorials.map((tutorial) => {
                if(tutorial.id === payload.id){
                    return {
                        ...tutorial,
                        ...payload
                    };
                }else{
                    return tutorial;
                }
            });
        default:
            return tutorials;
    }
}

export default tutorialReducer;