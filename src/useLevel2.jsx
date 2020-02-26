import { useState, useEffect } from 'react'

const delay = () => 
  new Promise(resolve => setTimeout(() => resolve("level 2 prop"), 2500))

const useLevel2 = () => {
  const [level2, setLevel2prop] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    delay().then(res => {
      setLevel2prop(res)
      setLoading(false)
    })
  }, [])

  return { loading, level2 }
}

export default useLevel2