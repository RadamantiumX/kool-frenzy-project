import { createContext,useContext,useState } from "react";

const StateContext = createContext({
    user: null,
    token: null,
    notification: null,
    product: null,
    setUser: ()=>{},
    setToken: ()=>{},
    setNotifications: ()=>{},
    setProduct: ()=>{}
})

export const ContextProvider = ({children})=>{
    const [user, setUser] = useState({});
    const [notification, _setNotification] = useState('');
    const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));
    const [product, setProduct] = useState({})

    //Notificaciones
    const setNotifications = (message)=>{
        _setNotification(message);
        setTimeout(()=>{
           _setNotification('');
        },5000)
    }

    const setToken = ()=>{
        _setToken(token);
        if(token){
            localStorage.setItem('ACCESS_TOKEN',token);
        }else{
            localStorage.removeItem('ACCESS_TOKEN')
        }
    }

    return(
        <StateContext.Provider value={{
            user,
            token,
            setUser,
            setToken,
            notification,
            setNotifications,
            product,
            setProduct
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)