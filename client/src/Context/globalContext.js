import { createContext , useState } from "react";

export const globalContext = createContext();

export const ContextProvider = (props) => {

    const [background, setBackground] = useState('white');

    const changeTheme = (theme) => {
        if ( theme === 'black' ) {
            return 'bg-gray-800 text-slate-100 p-5 transition-all rounded-md mx-10'
        } else if( theme === 'white' ) {
            return 'bg-slate-200 p-5 rounded-md transition-all mx-10'
        }
    }

    return (
        <globalContext.Provider value={{name: 'Mehmet Baba!!', background,setBackground,changeTheme}}>
            {props.children}
        </globalContext.Provider>
    )
}