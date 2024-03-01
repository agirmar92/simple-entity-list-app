import { useState } from 'react'
import { Button } from './Button'

const MenuDropdown = ({
  onAddContactCallback,
}: {
  onAddContactCallback: () => void
}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <Button onClick={() => setIsOpen((prevValue) => !prevValue)} />
      {isOpen && (
        <div className="absolute top-11 right-0 bg-anti-flash-white rounded px-4 py-2 min-w-44 shadow-lg divide-y-2 divide-stone-400">
          <button onClick={onAddContactCallback} className="py-1">
            Add contact
          </button>
          {/* TODO: Turn into button and implement functionality */}
          <p className="py-1">Search</p>
        </div>
      )}
    </div>
  )
}

export { MenuDropdown }
