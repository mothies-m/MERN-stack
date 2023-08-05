import axios from 'axios';
import {useState} from 'react';

function App() {

  const [infos,setInfos] = useState("");

  function addsubmit(e){
    e.preventDefault();
    const name = e.target.add_item_name.value;
    const desc = e.target.add_item_description.value;
    axios.post(`http://localhost:3001/item/add`, {name, desc})
        .then(alert("added"))
  }
  function editsubmit(e){
    e.preventDefault();
    const name = e.target.old_item_name.value;
    const newname = e.target.edit_item_name.value;
    const newdesc = e.target.edit_item_description.value;
    axios.patch(`http://localhost:3001/item/${name}`, {newname, newdesc})
        .then(alert("edited"))
  }

  function getdata(){
    axios.get('http://localhost:3001/item')
      .then(res => {
       setInfos(res.data);
    })
  }
  return (
    <div className="flex flex-col h-screen">
    <div className="text-2xl bg-gray-950">
      <h1 className="text-center p-10 text-white">CRUD Application Using MERN Stack</h1>
    </div>
    <div className = "flex flex-col md justify-center my-auto">
      <div className="">
      <div className="flex flex-col my-8 gap-6 items-center justify-around mx-4">
        <form onSubmit={addsubmit} className="flex flex-col items-center gap-4 py-4 px-2 bg-slate-300 w-full rounded-md border-2 border-gray-700 ">  
          <div className = "text-xl text-center">
            <h2 className="font-bold">New Data</h2>
          </div>
            <div className="text-base flex flex-col items-center gap-4">
              <div className="">
                <label htmlFor="add_item_name">Name :</label>
                <input type="text" name="add_item_name" className="mx-4 rounded-md w-80 bg-gray-200 border-2 border-gray-400"/>
              </div>
              <div>
                <label htmlFor="add_item_description">Description :</label>
                <input type="text" name="add_item_description" className="mx-2 rounded-md w-80 bg-gray-200 border-2 border-gray-400" />
              </div>
          </div>  
              <div>
              <button className="m-2 mx-1 px-2 py-1 rounded-lg bg-indigo-400 hover:bg-gray-950 hover:text-white">SAVE</button>
              </div>
        </form>
        <form onSubmit={editsubmit} className="text-base flex flex-col gap-4 items-center py-4 px-2 bg-slate-300 w-full rounded-md border-2 border-gray-700">  
          <div className = "text-xl">
            <h2 className="text-center font-bold">Edit Data</h2>
          </div>
          <div className="">
              <label htmlFor="old_item_name">Previous Name :</label>
              <input type="text" name="old_item_name" className="mx-2 rounded-md w-80 bg-gray-200 border-2 border-gray-400 "/>
            </div>
            <div className="">
              <label htmlFor="edit_item_name">Add Name :</label>
              <input type="text" name="edit_item_name" className="mx-2 rounded-md w-80 bg-gray-200 border-2 border-gray-400"/>
            </div>
            <div>
              <label htmlFor="edit_item_description">Add Description :</label>
              <input type="text" name="edit_item_description" className="mx-2 rounded-md w-80 bg-gray-200 border-2 border-gray-400"/>
            </div>
              <div>
              <button className="m-2 mx-1 px-2 py-1 rounded-lg bg-indigo-400 hover:bg-gray-950 hover:text-white">EDIT</button>
              </div>
        </form>
      </div>
      </div>
      <div className="flex flex-col gap-6 justify-center items-center pb-8">
        <h2 className="text-xl text-center font-bold">Items</h2>
        <button onClick={getdata} className="w-fit m-2 px-2 py-1 rounded-lg bg-indigo-400 hover:bg-gray-950 hover:text-white">Fetch</button>
        <div className='text-center'>{JSON.stringify(infos)}</div>
      </div>
    </div>
    </div>
  );
}

export default App;
