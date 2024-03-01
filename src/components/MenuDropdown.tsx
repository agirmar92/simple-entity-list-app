import { FormEvent, FormEventHandler, useCallback, useState } from 'react'
import { Button } from './Button'
import { Entity } from '../types'

const MenuDropdown = ({
  onAddContactCallback,
}: {
  onAddContactCallback: (newContact: Entity) => void
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isAddContactModalOpen, setIsAddContactModalOpen] = useState(false)

  const onAddContact = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      // Prevent the browser from reloading the page
      event.preventDefault()

      const form = event.target as HTMLFormElement
      const formData = new FormData(form)

      const formJson = Object.fromEntries(formData.entries()) as {
        name: string
        desc: string
      }

      // TODO: Create better error handling
      if (formJson.name === '' || formJson.desc === '') return

      onAddContactCallback({ title: formJson.name, subtitle: formJson.desc })
      setIsOpen(false)
      setIsAddContactModalOpen(false)
    },
    [onAddContactCallback, setIsOpen, setIsAddContactModalOpen]
  )

  return (
    <>
      <div className="relative">
        <Button onClick={() => setIsOpen((prevValue) => !prevValue)}>
          Menu
        </Button>
        {isOpen && (
          <div className="absolute top-11 right-0 bg-anti-flash-white rounded px-4 py-2 min-w-44 shadow-lg divide-y-2 divide-stone-400">
            <button
              onClick={() => setIsAddContactModalOpen(true)}
              className="py-1"
            >
              Add contact
            </button>
            {/* TODO: Turn into button and implement functionality */}
            <p className="py-1">Search</p>
          </div>
        )}
      </div>
      <AddContactModal
        show={isAddContactModalOpen}
        onOverlayClickCallback={() => setIsAddContactModalOpen(false)}
        onAddContactCallback={onAddContact}
      />
    </>
  )
}

const AddContactModal = ({
  show,
  onOverlayClickCallback,
  onAddContactCallback,
}: {
  show: boolean
  onOverlayClickCallback: () => void
  onAddContactCallback: (data: FormEvent<HTMLFormElement>) => void
}) => {
  if (!show) {
    return null
  }

  return (
    <>
      <div
        className="fixed inset-0 flex justify-center items-center"
        onClick={onOverlayClickCallback}
      >
        <div className="absolute inset-0 bg-black opacity-30 z-0" />
        <div
          className="flex flex-col justify-center bg-anti-flash-white w-96 h-auto max-w-[90%] max-h-[90%] rounded-xl z-10 p-10"
          onClick={(event) => event.stopPropagation()}
        >
          <h3 className="text-xl font-bold mb-4">Add contact</h3>
          <form
            method="post"
            onSubmit={(event) => onAddContactCallback(event)}
            className="flex flex-col space-y-2"
          >
            <InputStringElement label="Name" name="name" />
            <InputStringElement label="Description" name="desc" />
            <Button type="submit">Create contact</Button>
          </form>
        </div>
      </div>
    </>
  )
}

const InputStringElement = ({
  label,
  name,
}: {
  label: string
  name: string
}) => (
  <label className="flex items-center gap-2">
    <span>{label}:</span>
    <input name={name} className="flex-1 rounded py-1 px-2" />
  </label>
)

export { MenuDropdown }
