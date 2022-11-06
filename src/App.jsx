import { useRef } from "react";
import { usePokemon } from "./usePokemon";


const App = () => {
  

  const { pokemon, procurarPokemon } = usePokemon()
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
        procurarPokemon(inputRef.current.value)
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
