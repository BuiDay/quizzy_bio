import { store } from "../redux/store";
import { ReactNode } from "react";
import { Provider } from "react-redux";

interface ProviderProps{
    children:ReactNode;
}

export function Providers({children}:ProviderProps){
    return <> {children} </>
}