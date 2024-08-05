import React, { useEffect, useRef, useState } from "react";
import "./App.css";

// function App() {
//   const [user, setUser] = useState([]);
//   const [filteredUser, setFilteredUser] = useState([]);
//   const boshlangichRef = useRef();
//   const tugashRef = useRef();

//   async function api(url) {
//     try {
//       const response = await fetch(url);
//       if (response.status === 200) {
//         const data = await response.json();
//         return data;
//       } else {
//         console.error("error");
//         return [];
//       }
//     } catch (error) {
//       console.log(error);
//       return [];
//     }
//   }

//   useEffect(() => {
//     api("https://jsonplaceholder.typicode.com/photos")
//       .then((data) => {
//         setUser(data);
//         setFilteredUser(data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   const handleFilter = () => {
//     const boshlangichId = boshlangichRef.current.value;
//     const tugashId = tugashRef.current.value;
//     const filtered = user.filter(
//       (item) => item.id >= boshlangichId && item.id <= tugashId
//     );
//     setFilteredUser(filtered);
//   };

//   return (
//     <div className="App">
//       <div className="filter">
//         <input
//           type="number"
//           placeholder="Boshlangich Id"
//           ref={boshlangichRef}
//         />
//         <input type="number" placeholder="Tugash Id" ref={tugashRef} />
//         <button onClick={handleFilter}>Filter</button>
//       </div>
//       <div className="cards">
//         {filteredUser.slice(0, 60).map((item) => (
//           <div className="user-card" key={item.id}>
//             <img src={item.thumbnailUrl} alt={item.title} />
//             <div className="card-content">
//               <h1>AlbumId: {item.albumId}</h1>
//               <h1>{item.title}</h1>
//               <p>Id: {item.id}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// 


// 2- fail
// __________________________________________________________________________




// function App() {
//   const fullNameRef = useRef(null);
//   const emailRef = useRef(null);
//   const usernameRef = useRef(null);
//   const passwordRef = useRef(null);
//   const descRef = useRef(null);

//   function validateForm() {
//     if (fullNameRef.current.value === "") {
//       alert("Full name  kiriting");
//       return false;
//     }
//     if (emailRef.current.value === "") {
//       alert("Email  kiriting");
//       return false;
//     }
//     if (usernameRef.current.value === "") {
//       alert("Username kiriting");
//       return false;
//     }
//     if (passwordRef.current.value === "") {
//       alert("Password  kiriting");
//       return false;
//     }
//     if (descRef.current.value === "") {
//       alert("Description  kiriting");
//       return false;
//     }
//     return true;
//   }

//   function handleSubmit(event) {
//     event.preventDefault();

//     const isValid = validateForm();
//     if (!isValid) {
//       return;
//     }

//     const test = {
//       fullName: fullNameRef.current.value,
//       email: emailRef.current.value,
//       username: usernameRef.current.value,
//       password: passwordRef.current.value,
//       desc: descRef.current.value,
//     };

//     console.log(test);

//     fullNameRef.current.value = "";
//     emailRef.current.value = "";
//     usernameRef.current.value = "";
//     passwordRef.current.value = "";
//     descRef.current.value = "";
//   }

//   return (
//     <div className="App">
//       <form className="form-container" onSubmit={handleSubmit}>
//         <h2>Create An Account</h2>
//         <p>Kindly fill the following details to create your account.</p>
//         <input
//           ref={fullNameRef}
//           type="text"
//           placeholder="Enter your full name"
//         />
//         <input
//           ref={emailRef}
//           type="email"
//           placeholder="Enter your email address"
//         />
//         <input
//           ref={usernameRef}
//           type="text"
//           placeholder="Enter your username"
//         />
//         <input ref={passwordRef} type="password" placeholder="Enter password" />
//         <textarea ref={descRef} placeholder="Your Biography" />
//         <button type="submit">CREATE ACCOUNT</button>
//         <p>You will receive an email after setting up your account</p>
//       </form>
//     </div>
//   );
// }





// 3 - fayl
// __________________________________________________________________________

function App() {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const lastNameRef = useRef("");
  const companyRef = useRef("");
  const addressRef = useRef("");
  const yearRef = useRef("");
  const monthRef = useRef("");
  const dayRef = useRef("");

  function handleSubmit() {
    if (
      !nameRef.current.value ||
      !emailRef.current.value ||
      !lastNameRef.current.value ||
      !companyRef.current.value ||
      !addressRef.current.value ||
      !yearRef.current.value ||
      !monthRef.current.value ||
      !dayRef.current.value
    ) {
      alert("Please fill in all inputs");
      return;
    }
    if (!emailRef.current.value.includes("@gmail.com")) {
      alert("Please correct your email");
      return;
    }
    if (addressRef.current.value.length < 5) {
      alert("Address is too short");
      return;
    }
    if (companyRef.current.value.length < 2) {
      alert("Company name is too short");
    }

    const formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      lastName: lastNameRef.current.value,
      company: companyRef.current.value,
      address: addressRef.current.value,
      birthday: {
        year: yearRef.current.value,
        month: monthRef.current.value,
        day: dayRef.current.value,
      },
    };

    console.log(formData);
  }

  return (
    <div className="form-container">
      <h1 className="form-heading">
        <i className="fa-regular fa-star"></i> YourEvent
      </h1>
      <p className="form-subheading">Online Registration</p>
      <div className="form-inputs">
        <div className="form-group">
          <div className="form-field">
            <label className="form-label">First Name</label>
            <input ref={nameRef} placeholder="First name" type="text" />
          </div>
          <div className="form-field">
            <label className="form-label">Last Name</label>
            <input ref={lastNameRef} type="text" placeholder="Last name" />
          </div>
        </div>
        <div className="form-field">
          <label className="form-label">Email Address</label>
          <input ref={emailRef} type="text" placeholder="Email Address" />
        </div>
        <div className="form-field">
          <label className="form-label">Company</label>
          <input ref={companyRef} type="text" placeholder="Company" />
        </div>
        <div className="form-field">
          <label className="form-label">Physical Address</label>
          <input ref={addressRef} type="text" placeholder="Physical Address" />
        </div>
        <div className="form-date">
          <label className="form-label">Date of Your Birthday</label>
          <input ref={yearRef} placeholder="Year" type="number" />
          <input ref={monthRef} placeholder="Month" type="number" />
          <input ref={dayRef} placeholder="Day" type="number" />
        </div>
      </div>
      <button className="submit-button" onClick={handleSubmit}>Continue</button>
    </div>
  );
}




export default App;
