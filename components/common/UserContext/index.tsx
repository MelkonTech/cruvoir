import * as R from 'ramda'
import {createContext, ReactNode, useCallback, useMemo, useState} from 'react'
import Cookies from 'js-cookie'
import {useApolloClient} from '@apollo/react-hooks'
import {useQuery} from '@apollo/react-hooks'
import {useRouter} from 'next/router'
import UserQuery from './graphql/user.graphql'

type ContextValue = {
  accessToken?: string
  saveToken: (params: {token: string, expiresAt: Date | null}) => void
  signOut: () => void

  user?: {
    acceptsMarketing: boolean
    email: string
    firstName?: string
    id: string
    lastName?: string
    phone?: string
  }
}

export const UserContext = createContext<ContextValue>({
  saveToken: () => null,
  signOut  : () => null,
  user     : null,
})

export function UserContextProvider(props: {
  children: ReactNode
  initialValue: {token?: string}
}) {
  const [token, setToken] = useState(props.initialValue.token)
  const client = useApolloClient()
  const {data} = useQuery(UserQuery, {fetchPolicy: 'network-only', skip: !token, variables: {token: token}})
  const router = useRouter()

  const saveToken = useCallback((params: {token: string, expiresAt: Date | null}) => {
    Cookies.set('token', params.token, {...params.expiresAt ? {expires: params.expiresAt} : {}})

    // Save token expiration date for refresh token ability
    if(params.expiresAt)
      Cookies.set('tokenExpiresAt', params.expiresAt.toISOString(), {expires: params.expiresAt})

    setToken(params.token)
  }, [])

  const signOut = useCallback(async () => {
    Cookies.remove('token')
    Cookies.remove('tokenExpiresAt')
    setToken(null)
    client.resetStore()

    if(R.any(pathname => window.location.pathname.indexOf(pathname) === 0, ['/profile', '/wish']))
      router.push('/')
  }, [client, router])

  const value = useMemo(() => ({
    accessToken: token,
    saveToken,
    signOut,
    user       : data ? data.customer : null,
  }), [data, saveToken, signOut, token])

  return <UserContext.Provider value={value}>
    {props.children}
  </UserContext.Provider>
}
