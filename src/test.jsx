/* eslint-disable react/prop-types */
function Test(props) {
    return (
        <>
            <h1 className="text-emerald-800 text-3xl" key={props.key}>name is {props.name}, age is {props.age}</h1>

        </>
        
    )  
}

export default Test