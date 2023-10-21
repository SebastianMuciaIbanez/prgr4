//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import leon from "../leon.jpg"
import './App.css'

const elementOne = <h1>Hello, world! one</h1>;
const name = 'Josh Perez';
const element = <h1>Hello, {`2+2= ${2 + 2} ${name}`}</h1>;
const objExample = {
  name: 'John', 
  lastName: 'Villegas', 
  age: 30, 
  city: 'New York'
};

const tabIndexAux = 3;

function formatName(User){
  return User.name + " " + User.lastName;
}

const elementFullName = (
<div>
  <h1>Hola, nombre completo: {formatName(objExample)}</h1>
  <h1>Hola, nombre completo: {formatName(objExample)}</h1>
</div>
) 

function renderAge(user) {
  return (
    <>
      <h1>La edad es de: {user.age}</h1>
      <h1>La edad es de: {user.age}</h1>
    </>
  )
}

function App() {
  //const [count, setCount] = useState(0)
  const elementTwo = (
    <h1 id="id-unico" tabIndex={tabIndexAux} className='Hola'>
      Hello, world! two
    </h1>
  );
  return (
    <div>
      {elementOne}
      {elementTwo}
      {element}
      <p style={{
        border: 'red solid',
        borderRadius: '18px',
        backgroundColor: 'yellow'
      }}
      >
        El nombre completo es: {formatName(objExample)}</p>
      {elementFullName}
      {renderAge(objExample)}
      <img src={leon} alt="react-logo"/>
    </div>
  )
}

export default App
