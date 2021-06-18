import {createContext, ReactNode, ReactPortal, useCallback, useContext, useMemo} from 'react'
import {createPortal} from 'react-dom'
import {isServer} from 'components/common/helpers'

type PortalContext = {
  createPortal: (children: ReactNode, selector: string) => ReactPortal | null
}

const PortalContext = createContext<PortalContext>({createPortal: () => null})

function Portal(props: {
  children: ReactNode
  selector?: string
}) {
  const ctx = useContext(PortalContext)

  // WARN do not remove wrapper with suppressHydrationWarning
  return <span suppressHydrationWarning>{ctx.createPortal(props.children, props.selector)}</span>
}

class PortalManager {
  portals = []

  create(children) {
    if(this.portals)
      this.portals.push(children)
  }
}

function PortalProvider(props: {
  children: ReactNode
  manager: PortalManager
}) {
  const create = useCallback((children: ReactNode, selector: string = '#portals'): ReactPortal | null => {
    if(isServer())
      return null

    if(props.manager)
      props.manager.create([children, selector])

    return createPortal(children, document.querySelector(selector))
  }, [props.manager])

  const value = useMemo(() => ({createPortal: create}), [create])
  return <PortalContext.Provider value={value}>{props.children}</PortalContext.Provider>
}

export {Portal, PortalManager, PortalProvider}
