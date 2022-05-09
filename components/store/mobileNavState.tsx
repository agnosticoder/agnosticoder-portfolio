import { createContext, Dispatch, FC, ReactChild, ReactNode, ReactText, SetStateAction, useContext, useMemo, useState } from "react";

interface ContextProps {
    state: boolean;
    setState: Dispatch<SetStateAction<boolean>>;
}

const Context = createContext<ContextProps>(undefined!);
export const useNavStateStore = () => useContext(Context);

export const Provider = ({init, children}: {init: boolean, children: ReactNode}) => {
    const [state, setState] = useState(init);

    const contextValue = useMemo(() => ({state, setState}), [state]);

    return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}

