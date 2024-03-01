import { useState } from 'react'
import { Entity } from './types'
import { LOREM_IPSUM } from './constants'
import { MenuDropdown } from './components/MenuDropdown'

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
      <header className="flex justify-between px-4">
        <span className="flex-1 hidden sm:block" />
        <h1 className="font-bold text-3xl py-4 uppercase flex-1 sm:flex-initial">
          Your contacts
        </h1>
        <section className="flex flex-1 justify-center items-center">
          <MenuDropdown />
        </section>
      </header>
      <main className="p-2 flex justify-center">
        <div className="flex flex-col items-center bg-anti-flash-white shadow-lg grow-1 w-full max-w-2xl min-h-52 rounded-lg p-4 gap-4">
          {entities.map((entity, entityIndex) => {
            const initialLetter = entity.title[0]

            return (
              /* Using iterative index as key is not best practice, but should do for now */
              <div key={entityIndex} className="flex flex-col gap-2 w-full">
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
