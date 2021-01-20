import React, { useState } from 'react'
import './App.css'

function App() {
  const [inputList, setinputList] = useState([
    {
      firstName: 'test',
      lastName: 'testt',
    },
    {
      firstName: 'test2',
      lastName: 'testt2',
    },
  ])

  const handleChange = (e, index) => {
    const { name, value } = e.target
    const list = [...inputList]
    list[index][name] = value
    setinputList(list)

    setinputList(list)
  }

  const handleAddInput = () => {
    setinputList([...inputList, { firstName: '', lastName: '' }])
  }

  const handleRemove = (index) => {
    const list = [...inputList]
    list.splice(index, 1)
    setinputList(list)
  }

  return (
    <div className="App">
      <b>Input Filed Dinamis</b>
      {inputList.map((item, i) => {
        return (
          <div className="box" key={i}>
            <input
              type="text"
              name="firstName"
              value={item.firstName}
              placeholder="First Name"
              className="mr-10"
              onChange={(e) => handleChange(e, i)}
            />
            <input
              type="text"
              name="lastName"
              value={item.lastName}
              placeholder="Last Name"
              className="mr-10"
              onChange={(e) => handleChange(e, i)}
            />
            {inputList.length !== 1 && (
              <input
                type="button"
                value="Remove"
                className="mr-10"
                onClick={() => handleRemove(i)}
              />
            )}

            {inputList.length - 1 === i && (
              <input type="button" value="Add" onClick={handleAddInput} />
            )}
          </div>
        )
      })}
      <pre>{JSON.stringify(inputList, null, 2)}</pre>
    </div>
  )
}

export default App
