import { useState } from "react";

const SearchBar = ({ changeOrder, changeNameProduct, ascendente }) => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = () => {
        changeOrder()
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        changeNameProduct(inputValue)
    }

    const handleInputChange = (e) => {
        if (e.target.value == ' ') return

        const newValue = e.target.value
        setInputValue(newValue)
        changeNameProduct(newValue)
    }

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <select onChange={handleChange} className={`${ascendente ? 'ascendente' : 'descendente'}`}>
            <option value="ascendente">ascendente</option>
            <option value="descendente">descendente</option>
        </select>
    </form>
  )
}

export default SearchBar