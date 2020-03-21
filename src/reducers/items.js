import { 
    ITEMS_LOADING, ITEMS_ERROR,
    ITEM_CREATED, ITEMS_FETCHED,
    ITEM_RETURNED, ITEM_UPDATED, ITEM_DELETED
} from "../actions/types";

const initialState = {
    loading: false,
    items: []
};

export default (state = initialState, action) => {
    switch(action.type) {
        case ITEMS_LOADING:
            return {
                ...state,
                loading: true
            };
        case ITEMS_ERROR:
            return {
                ...state,
                loading: false
            };
        case ITEM_CREATED:
            return {
                ...state,
                loading: false,
                items: [...state.items, action.payload]
            };
        case ITEMS_FETCHED:
            return {
                ...state,
                loading: false,
                items: action.payload
            };
        case ITEM_RETURNED:
            return {
                ...state,
                loading: false,
                items: state.items.map(item => {
                    const { _id } = action.payload;

                    if(item._id !== _id) {
                        return item;
                    } else return {
                        item: action.payload
                    };
                })
            };
        case ITEM_UPDATED:
            return {
                ...state,
                loading: false,
                items: state.items.map(item => {
                    const { _id, name, description } = action.payload;
                    
                    if(item._id !== _id) {
                        return item;
                    } else return {
                        ...state.items,
                        item: {
                            _id,
                            name, 
                            description
                        }
                    };
                })
            };
        case ITEM_DELETED:
            return {
                ...state,
                loading: false,
                items: state.items.filter(item => item._id !== action.payload)
            };
        default: 
            return state;
    };
};