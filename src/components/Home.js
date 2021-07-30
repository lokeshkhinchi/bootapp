import React, {useState} from 'react';

const Home = (props) => {

  const [list, setList] = useState([
    {name: 'hello', color: 'green'}, 
    {name: 'world', color: 'red', hidden: true},
    {name: 'everyone', color: 'blue'},
  ])

  const doHide = (id) => {
    let listItems = [...list]
    let itemNew = listItems[id]
    itemNew.hidden = true
    listItems[id] = itemNew
    setList(listItems)
  }

  return (
    <>
      {list.length > 0 &&
        list.map((item, index) => (
          <>
          {!item.hidden && 
          <div key={index} id={index} style={{backgroundColor: item.color}}>
          {item.name}
          <button onClick={() => doHide(index)}>Hide</button>
          </div>
          }
          </>
        ))
      }
      
    </>
  )
  
}


export default Home;