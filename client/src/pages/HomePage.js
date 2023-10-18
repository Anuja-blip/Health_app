import React,{useEffect} from 'react'

const HomePage = () => {
//   const [credentials, setCredentials] = useState({
//     email: "",
//     password: "",
//     });

// const onfinishHandler = async (values) => {
// console.log(credentials);
// const response = await fetch(`http://localhost:8080/api/v1/user/login`, {
// method: "POST",
// headers: {
// "Content-Type": "application/json",
// },
// body: JSON.stringify({ email: credentials.email, 
// password: credentials.password }),
// });
// const data = await response.json();
// console.log(data);


  const getUserData = async () => {
    try {
      const res = await fetch(
        "http://localhost:8080/api/v1/user/getUserData",

        {
          method:"POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          }
        }
      );
      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);
  return (
    <div>
      <h1>homepage</h1>
    </div>
  )
}

export default HomePage;