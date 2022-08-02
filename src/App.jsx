import React from 'react';

function App() {
  const NewElement = () => React.createElement(
    'div',
    {
      style: {
        backgroundColor: `rgb(${Math.floor(Math.random() * 255)},
        ${Math.floor(Math.random() * 255)},
        ${Math.floor(Math.random() * 255)})`,

        padding: '20px'
      },
      id: 'some'
    },
    ''
    )
  
  const createTree = (event) => {
    const elem = event.target

    if (event.ctrlKey) {
        elem.remove()
        return
    }

    // elem.append(<NewElement />)

    // alternate strategy
    elem.innerHTML += `<div style="background-color: rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}); padding: 20px"></div>`;
  
    // third strategy
    // const children = [<NewElement />, <NewElement />, <NewElement />, <NewElement />];

  }

  return (
    <>
      <div id='main' onClick={createTree}>
        {/* {children} */}
      </div>
    </>
  );
}

export default App;
