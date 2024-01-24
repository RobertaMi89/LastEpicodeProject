// Definizione dello stato iniziale del riduttore
const initialState = {
  favourite: {
    list: [],
  },
};

// Definizione dell'azione per l'aggiunta ai preferiti
interface AddToFavouriteAction {
  type: 'ADD_TO_FAVOURITE';
  payload: string; // Specifica il tipo appropriato per il payload
}

// Definizione dell'azione per la rimozione dai preferiti
interface RemoveFromFavouriteAction {
  type: 'REMOVE_FROM_FAVOURITE';
  payload: string; // Specifica il tipo appropriato per il payload
}

// Definizione dell'azione generica
type MainReducerAction = AddToFavouriteAction | RemoveFromFavouriteAction;

// Definizione del riduttore principale
const mainReducer = (state = initialState, action: MainReducerAction) => {
  switch (action.type) {
    case 'ADD_TO_FAVOURITE':
      return {
        ...state,
        favourite: {
          ...state.favourite,
          list: [...state.favourite.list, action.payload],
        },
      };
    case 'REMOVE_FROM_FAVOURITE':
      return {
        ...state,
        favourite: {
          ...state.favourite,
          list: state.favourite.list.filter((fav) => fav !== action.payload),
        },
      };
    default:
      return state;
  }
};

export default mainReducer;
