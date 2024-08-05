# React + Vite


// function App () {

//   const [counter, setCounter] = useState(0);

// useEffect (() => {
//   console.log("useEffect"),[];
// })

// useEffect(() => {
//   console.log("useEffect");
// })

  // useEffect(() => {
  //   console.log("useEffect");
  // }, [counter]);

//   return(
//     <div>
//       <h1>
//       {counter}
//       </h1>
//       <button onClick={() => {
//         setCounter(counter + 1)
//       }}>increment</button>
//     </div>
//   )
// }
// ________________________________________________________
// function App() {
//   const nameRef = useRef(null);
//   const ageRef = useRef(null);
//   const descRef = useRef(null);

//   function validateForm() {
//     if (nameRef.current.value === "") {
//       alert("Name is required");
//       return false;
//     }
//     if (ageRef.current.value === "") {
//       alert("Age is required");
//       return false;
//     }
//     if (descRef.current.value === "") {
//       alert("Description is required");
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
//       name: nameRef.current.value,
//       age: ageRef.current.value,
//       desc: descRef.current.value
//     };

//     console.log(test);

//     nameRef.current.value = "";
//     ageRef.current.value = "";
//     descRef.current.value = "";
//   }

//   return (
//     <div className="App">
//       <form>
//         <input
//           ref={nameRef}
//           type="text"
//           placeholder="Name"
//         />
//         <input
//           ref={ageRef}
//           type="number"
//           placeholder="Age"
//         />
//         <textarea
//           ref={descRef}
//           placeholder="Description"
//         />
//         <button onClick={handleSubmit}>Submit</button>
//       </form>
//     </div>
//   );
// }

// function App() {
//   const [form, setForm] = useState({
//     name: "",
//     age: "",
//     desc: ""
//   });

//   function handleName(event) {
//     setForm({ ...form, name: event.target.value });
//   }

//   function handleAge(event) {
//     setForm({ ...form, age: event.target.value });
//   }

//   function handleDesc(event) {
//     setForm({ ...form, desc: event.target.value });
//   }

//   return (
//     <div className="App">
//       <form>
//         <input
//           onChange={handleName}
//           value={form.name}
//           type="text"
//           placeholder="Name"
//         />
//         <input
//           onChange={handleAge}
//           value={form.age}
//           type="number"
//           placeholder="Age"
//         />
//         <input
//           te
//           value={form.desc}
//           type="text"
//           placeholder="Description"
//         />
//       </form>
//     </div>
//   );
// }


// function App() {
//   const [user, setUser] = useState({
//     name: "Javlon",
//     age: 45,
//   });

//   function increment(event) {
//     event.preventDefault();

//     const copiedUser = { ...user, age: user.age + 1 };

//     setUser(copiedUser);
//   }

//   return (
//     <div className="App">
//       <h1> {user.name}</h1>
//       <h1> {user.age}</h1>
//       <button className="btn" onClick={increment}>Increment</button>
//     </div>
//   );
// }

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
