import {createContext, ReactNode, useCallback, useEffect, useMemo, useState} from 'react'
import Dexie from 'dexie'
import {Product} from 'components/common/types'

type ContextValue = {
  isReady: boolean
  products: Product[]
  saveToRecent: Function
}

const db = new Dexie('cruvoirDB')
db.version(1).stores({products: 'id'})

export const RecentContext = createContext<ContextValue>({
  isReady     : false,
  products    : [],
  saveToRecent: () => {},
})

export function RecentContextProvider(props: {children: ReactNode}) {
  const [products, setProducts] = useState([])
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    db.table('products').toArray().then((response: Product[]) => {
      setProducts(response)
      setIsReady(true)
    })
  }, [])

  const saveToRecent = useCallback(
    product => {
      db.table('products').put(product)
        .then(() => db.table('products').toArray().then((response: Product[]) => setProducts(response)))
    },

    [setProducts],
  )

  const value = useMemo(() => ({
    isReady,
    products,
    saveToRecent,
  }), [isReady, products, saveToRecent])

  return <RecentContext.Provider value={value}>
    {props.children}
  </RecentContext.Provider>
}
