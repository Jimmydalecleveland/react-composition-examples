import { useState, useEffect } from 'react'
import { getSpells } from './spells'

const useSpells = () => {
  const [spells, setSpells] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getSpells().then(spellsResponse => {
      setSpells(spellsResponse)
      setLoading(false)
    })
  }, [])

  // Cannot do this because Wizard will try to loop over whatever is returned
  // if (loading) return <h1>Loading . . .</h1>
  return { loading, spells }
}

export default useSpells