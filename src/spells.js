export default ['Ray of Frost', 'Magic Missile', 'Prestidigitation']
export const getSpells = () => 
  new Promise(resolve => setTimeout(() => resolve(['Ray of Frost', 'Magic Missile', 'Prestidigitation']), 1500))