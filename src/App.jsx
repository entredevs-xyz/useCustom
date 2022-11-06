import { useRef } from "react";


const App = () => {
  
  const pokemon = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
  const inputRef = useRef()

  return (<>
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      margin: 20,
      gap: 10
    }} >

      <input ref={inputRef} type="text" />
      <button onClick={() => {
        alert(inputRef.current.value)
      }
      }> Pesquisar </button>

    </div>
    <div
      style={{
        height: 96,
        width: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${pokemon})`
      }}
    >
    </div>
  </>
  );
}

export default App;
