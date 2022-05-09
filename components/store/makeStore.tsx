import { createContext, useContext, useMemo, useReducer, useState } from 'react';

const makeStore2 = <T,>() => {
    const Context = createContext<T>(undefined!);
    const useStore = () => useContext(Context);

    const Provider = ({init, children }: {init: T, children: React.ReactNode }) => {
        const [state, setState] = useState(init);

        const contextValue = useMemo(() => [state, setState], [state]);

        return <Context.Provider value={contextValue}>{children}</Context.Provider>;
    }

}

interface makeStoreProviderProps<T>{
    init: T,
    children: JSX.Element
}

const makeStore = <T,S>() => {
    const useValueContext = createContext();
    const setValueContext = createContext();

    const useValue = () => useContext(useValueContext);
    const useSetValue = () => useContext(setValueContext);

    const Provider = <T,>({ init , children }: makeStoreProviderProps<T>) => {
        const [state, setState] = useState(init);
        // console.log('makeStore');

        const storeState = useMemo(() => state, [state]);
        const setStore = useMemo(() => setState, []);

        return (
            <useValueContext.Provider value={storeState}>
                <setValueContext.Provider value={setStore}>
                    {children}
                </setValueContext.Provider>
            </useValueContext.Provider>);
    };

    return [Provider, useValue, useSetValue] as const;
};

export default makeStore;

/* ---------------------------------- Todo ---------------------------------- */
// - Implement makeStore using useReducer and LocalStorage
// - https://www.youtube.com/watch?v=J-g9ZJha8FE

type State = any;

type Action = State;

type UserReducer = (state: State, action: Action) => any;

type InitialState = any[] | object


export const makeStoreWithReducer = (userReducer:UserReducer, initialState: InitialState = [], key:string) => {
    const storeContext = createContext<any>(null);
    const dispatchContext = createContext<any>(null);

    const useStore = () => useContext(storeContext);
    const useDispatch = () => useContext(dispatchContext);

    const reducer = (state: State, action: Action) => {
        const newState = userReducer(state, action);
        // localStorage.setItem(key, JSON.stringify(newState));
        return newState;
    };

    const Provider = ({ children }: {children: JSX.Element}) => {
        // const { isLocal } = useIsLocalStorage();
        // const { isDB, DB } = useIsDB();
        const [state, dispatch] = useReducer(reducer, initialState);
        // useGetInitialState({ isLocal, dispatch, key, initialState });
        // useGetInitialState({ isDB, DB, dispatch, key, initialState });
        // console.log('makeStoreWithReducer');

        return (
            <dispatchContext.Provider value={dispatch}>
                <storeContext.Provider value={state}>{children}</storeContext.Provider>
            </dispatchContext.Provider>
        );
    };

    return [Provider, useStore, useDispatch] as const;
};
