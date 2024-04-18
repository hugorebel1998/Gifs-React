import { useState } from "react"

export default function AddCategory({ onNewCatagory }) {

    const [inputValue, setinputValue] = useState('')

    function onInputChange({ target }) {
        setinputValue(target.value)
    }

    function onSubmit(event) {
        event.preventDefault()

        if (inputValue.trim().length <= 1) return;

        // setCategies(categories => [inputValue, ...categories])
        onNewCatagory(inputValue.trim())

        setinputValue('');
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="Buscar categoria" value={inputValue} onChange={onInputChange} />
        </form>

    )

}