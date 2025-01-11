import Test from './test';
import './App.css';
import { useState } from 'react';



function App() {
    const [datas, setDatas] = useState([
        {name: 'hal', age: 2, id: 1},
        {name: 'hol', age: 4, id: 2},
        {name: 'dal', age: 6, id: 3}
    ])

    const handleClick = () => {
        setDatas(datas[0].age = 8)
    }

    return (
        <>
            <h1 className="text-blue-800">haloo</h1>
            {datas.map((data) => {return(
                // eslint-disable-next-line react/jsx-key
                <Test name={data.name} age={data.age}/>
            )})}
            <button onClick={handleClick}> click me</button>
        </>
    );
}

export default App;
