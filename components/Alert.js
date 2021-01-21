import { useEffect, useRef } from 'react'

import styles from '../styles/Alert.module.scss'

const Alert = ({ data }) => {
  const alertRef = useRef(null)
  
  const { type, message } = data

  useEffect(() => {  
    if (alertRef.current) {
      Object.assign(alertRef.current.style, { opacity: '1' })
      setTimeout(() => {
        if (alertRef.current)
          Object.assign(alertRef.current.style, { opacity: '0' })
      }, 3000)
    }
  }, [data])
  
  return (
    <>
      {type !== null && 
        <div className={`${styles.container} ${styles[type]}`} ref={alertRef}>
          {message}
        </div>}
    </>
  )
}

export default Alert
