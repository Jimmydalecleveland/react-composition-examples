import { useState, useEffect } from 'react'

const delay = () => 
  new Promise(resolve => setTimeout(() => resolve("level 1 prop"), 1500))

const useLevel1 = () => {
  const [level1, setLevel1prop] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    delay().then(res => {
      setLevel1prop(res)
      setLoading(false)
    })
  }, [])

  return { loading, level1 }
}

export default useLevel1