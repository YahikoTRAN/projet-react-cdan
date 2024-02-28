import { useReducer, useRef, useState } from "react";

export default function ThreeScreen() {
    const inputRef = useRef();
    const [isFormValidated, setFormValidation] = useState(false);
    const [items, dispatch] = useReducer((state: string[], action: { type: string, payload?: string, index?: number }) => {
      switch (action.type) {
        case 'add':
          state.push(action.payload ?? ''); return state;
        case 'remove': // keep every item except the one we want to remove
          return state.filter((_, index) => index != action.index);
        default:
          return state;
      }
    }, []);
    function handleSubmit(e: any) {
      e.preventDefault(); dispatch( {type: 'add', payload: inputRef.current?.value});
      inputRef.current!.value = ''; setFormValidation(!isFormValidated);
    }
  
    return (
      <>
        <form onSubmit={handleSubmit}>
          <input ref={inputRef} />
        </form>
        <ul> {items.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => dispatch({ type: 'remove', index })}>X</button>
          </li> ))}
        </ul>
      </> );
  }
  