import { useState } from 'react'
import { Entity } from './types'
import { LOREM_IPSUM } from './constants'

const INITIAL_ENTITIES: Entity[] = [
  {
    title: 'John Smith',
    subtitle: LOREM_IPSUM,
  },
  {
    title: 'Elizabeth Doe',
    subtitle: LOREM_IPSUM,
  },
]

const App = () => {
  const [entities, setEntities] = useState<Entity[]>(INITIAL_ENTITIES)

  return (
    <div className="flex flex-col bg-silver h-dvh">
      <header>
        <h1 className="text-center font-bold text-3xl py-4 uppercase">
          Your contacts
        </h1>
      </header>
      <main className="p-2 flex justify-center">
        <div className="flex flex-col items-center bg-anti-flash-white shadow-lg grow-1 w-full max-w-2xl min-h-52 rounded-lg p-4 gap-4">
          {entities.map((entity) => {
            const initialLetter = entity.title[0]

            return (
              <div className="flex flex-col gap-2">
                <section className="flex items-center gap-2">
                  <p className="flex justify-center items-center text-xl uppercase bg-polynesian-blue size-10 rounded-full text-white font-bold">
                    {initialLetter}
                  </p>
                  <h2 className="font-medium">{entity.title}</h2>
                </section>
                <section className="text-gray-800 px-2">
                  <p>{entity.subtitle}</p>
                </section>
              </div>
            )
          })}
        </div>
      </main>
    </div>
  )
}

export default App
