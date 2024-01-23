import { useState } from "react";
import "./App.css"
function App(){

 const [text,setText] = useState('')
 const [list, setList] =useState([])

 function textRecive(e){
  setText(e.target.value)
  }
 function clicked(){
  setList([...list,text])
  setText('')
  }
 function deleteItem(index){
  const updatelist = [...list]
  updatelist.splice(index,1)
  setList(updatelist)


 }

 const finalList = list.map((value,index) => <li key={index}>{ value }<button onClick={ ()=>deleteItem(index) } type="button" class=" float-right text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5  me-2 mb-2 ">X</button></li>);
  return(
    <div className=" flex justify-center h-screen mainDiv ">
      <div className="">
        <input placeholder="Enter Task..." onChange={ textRecive } value={ text }/>
        <button onClick={ clicked } type="button" className=" px-4 ml-2 text-white bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Add</button>
        <ul>{ finalList }</ul>

      </div>
    </div>
    
  );
  
}export default App;