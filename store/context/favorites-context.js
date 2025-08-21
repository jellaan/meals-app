import { createContext } from "react";

const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => {},
    removeFavorite: (id) => {}
});

function FavoritesContextProvider({children}) {


    // return <FavoritesContext.Provider>{children}</FavoritesContext.Provider>
    return <FavoritesContext>{children}</FavoritesContext>
}

export default FavoritesContextProvider;