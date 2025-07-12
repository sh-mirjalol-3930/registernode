import { useRef } from 'react';
// import './main.scss';


const Main = () => {
  // console.log("render");
  const fnameRef = useRef(null)
  const dateRef = useRef(null)
  const emailRef = useRef(null)
  const numberRef = useRef(null)
  const genderRef = useRef(null)
  const occRef = useRef(null)

  const handleClick = () => {
    const user = {
      fname : fnameRef.current.value,
      date : dateRef.current.value,
      email : emailRef.current.value,
      number : numberRef.current.value,
      gender : genderRef.current.value,
      occupation : occRef.current.value,
    }
    console.log(user);
    
  }
  
  return (
    <>
    <div className="container">
      <div className="form">
    <b>register</b>
        <div className="row">
          <input ref={fnameRef} type="text" placeholder='enter full name'/>
          <input ref={dateRef} type="date"/>
          <input ref={emailRef} type="email" placeholder='enter your email'/>
        </div>
      </div>
      <div className="form">
        <div className="row">
          <input ref={numberRef} type="number" placeholder='enter mobile number'/>
          <input ref={genderRef} type="text" placeholder='enter your gender'/>
          <input ref={occRef} type="text" placeholder='enter occupation'/>
        </div>
       <button onClick={handleClick}>click</button>
      </div>
    </div>
    <section className='container'>
      <table>
      <h2>list</h2>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Date</th>
            <th>Email</th>
            <th>Mobile Number</th>
            <th>Gender</th>
            <th>Occupation</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{fnameRef.current.value}</td>
            <td>{dateRef.current.value}</td>
            <td>{emailRef.current.value}</td>
            <td>{numberRef.current.value}</td>
            <td>{genderRef.current.value}</td>
            <td>{occRef.current.value}</td> 
          </tr>
        </tbody>
      </table>
    </section>
    </>
  )
}

export default Main