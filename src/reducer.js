import { createStore } from "redux";
const ADD_CELEB = 'add-celeb';
const SET_FAV = 'set-fav';
const DELETE_CELEB = 'delete-celeb';


const initState = {
    cards: []
}

const reducer = (state = initState, action) => {
    switch(action.type) {
        case ADD_CELEB: return { ...state, cards: [...state.cards, action.payload]}
        case SET_FAV: return { ...state, cards: state.cards.map(card => { if(card.id == action.payload) {
         return { ...card, fav: !card.fav }   
        } else {
            return { ...card }
        }
     }) }

        case DELETE_CELEB: return { ...state, cards: state.cards.filter(card => card.id !== action.payload) }

      default: return state  
    }
}


const store = createStore(reducer)


export default store;