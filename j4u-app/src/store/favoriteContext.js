import { createContext, useState } from 'react'

const FavoriteContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: () => {},
    removeFavorite: () => {},
    isJobFavorite: () => {}
})

export function FavortieContextProvider(props) {
    const [userFavorites,setUserFavorite] = useState([])

    function addFavoriteHandler(jobPost) {
        setUserFavorite((previousFavorties) =>{
            return previousFavorties.concat(jobPost)
        })
    }

    function removeFavoriteHandler(jobPostId) {   
        setUserFavorite((previousFavorties)=>{
            return previousFavorties.filter(jobPost => jobPost.id !== jobPostId)
        })
    }

    function isJobFavoriteHandler(jobPostId) {
        return userFavorites.find((jobPost) => jobPost.id === jobPostId)
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        isJobFavorite: isJobFavoriteHandler
    }

  return (
    <FavoriteContext.Provider value={context}>
        {props.children}
    </FavoriteContext.Provider>
  )
}

export default FavoriteContext