import {createContext, ReactNode, useState} from 'react'
type ModalVariant = 'signin' | 'signup' | 'forgot'

type ModalContext = {
  active: ModalVariant
  setActive: (modal: ModalVariant) => void
}

export const AuthModalContext = createContext<ModalContext>({active: null, setActive: () => null})

export function AuthModalContextProvider(props: {children: ReactNode, initialValue?: ModalVariant}) {
  const [active, setActive] = useState<ModalVariant>(props.initialValue)

  return <AuthModalContext.Provider value={{active, setActive}}>
    {props.children}
  </AuthModalContext.Provider>
}
