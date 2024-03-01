function App() {
  return (
    <div className="flex flex-col bg-anti-flash-white h-dvh">
      <header>
        <h1 className="text-center font-bold text-lg py-4 uppercase">
          Your contacts
        </h1>
      </header>
      <main className="p-2 flex justify-center">
        <div className="flex justify-center items-center bg-silver shadow-lg grow-1 w-full max-w-2xl text-white min-h-52 rounded">
          list of contacts
        </div>
      </main>
    </div>
  )
}

export default App
