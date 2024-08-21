import Link from "next/link"

async function App () {
  const res =  await fetch('https://api.imgflip.com/get_memes')
  const memes = await res.json()
  return (
    <>
    {memes.map(item => {
      return <Link></Link>
    })}
    </>
  )
}

export default App