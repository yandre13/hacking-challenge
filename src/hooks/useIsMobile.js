import React from 'react'

function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(false)
  const handleResize = () => {
    if (window !== 'undefined') {
      window.innerWidth < 768 ? setIsMobile(true) : setIsMobile(false)
    }
  }

  React.useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', () => handleResize)
  }, [isMobile])

  return {isMobile}
}

export default useIsMobile
