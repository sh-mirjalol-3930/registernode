import { useState } from 'react';

const Main = () => {
  const [fname, setFname] = useState("");
  const [date, setDate] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [gender, setGender] = useState("");
  const [occupation, setOccupation] = useState("");

  const [userList, setUserList] = useState([]); 

  const handleClick = () => {
    const user = {
      fname,
      date,
      email,
      number,
      gender,
      occupation,
    };

    setUserList([...userList, user]); 

    setFname("");
    setDate("");
    setEmail("");
    setNumber("");
    setGender("");
    setOccupation("");
  };

  return (
    <main>
      <div className="container">
        <div className="form">
          <b>register</b>
          <div className="row">
            <input
              type="text"
              placeholder="enter full name"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
            />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <input
              type="email"
              placeholder="enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="form">
          <div className="row">
            <input
              type="number"
              placeholder="enter mobile number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
            <input
              type="text"
              placeholder="enter your gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            />
            <input
              type="text"
              placeholder="enter occupation"
              value={occupation}
              onChange={(e) => setOccupation(e.target.value)}
            />
          </div>
          <button onClick={handleClick}>click</button>
        </div>
      </div>

      <section className="container">
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
            {userList.map((user, index) => (
              <tr key={index}>
                <td>{user.fname}</td>
                <td>{user.date}</td>
                <td>{user.email}</td>
                <td>{user.number}</td>
                <td>{user.gender}</td>
                <td>{user.occupation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
};

export default Main;
