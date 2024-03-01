const Button = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      className="bg-pumpkin px-4 py-2 rounded text-white font-medium hover:bg-pumpkin-hover hover:shadow-sm"
      onClick={onClick}
    >
      Menu
    </button>
  )
}

export { Button }
