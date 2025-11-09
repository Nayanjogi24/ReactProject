import React from "react";
import CustomButton from "./Components/Buttom/CustomButton";
import CustomInput from "./Components/Input/TextInput";
import { useState } from "react";

function UserForm() { 
  const[user,setUsers] = useState( {
    name: "",
    email: "",
    Address: "",
  })

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

//   const handleChange=(e)=> { 
//       const{ id,value} = e.target;
//       setUsers((prev) = ({...prev, [id]: value}));
//   }

const handleChange = (e) => {
  const { id, value } = e.target;
  setUsers((prev) => ({ ...prev, [id]: value })); // use => not =
};




    const handleSubmit = () => {
    let newErrors = {};

    if (!user.name) newErrors.name = "Name is required";
    if (!user.email.includes("@")) newErrors.email = "Enter a valid email";

    setErrors(newErrors);
    setTouched({ name: true, email: true });

    if (Object.keys(newErrors).length === 0) {
      alert(`Form submitted!\nName: ${user.name}\nEmail: ${user.email}\nAddress: ${user.Address}`);
      // You can later replace alert() with API call logic here
    }
  };
 


return ( 
 <> 
<div className="p-4 " style={{ 
    maxWidth: 400,
     margin: "20px" ,
     border: "1px solid #ccc",
      borderRadius: "8px",
       padding: "20px"  
     }}>
      <h4 className="mb-3 text-center">User Form</h4>

<CustomInput 
 id="name"
 label="Full Name"
 value={user.name}
 onChange={handleChange}
 placeholder="Enter your name"
 error={errors.name}
 touched={touched.name}
 required
/> 
      <CustomInput
        id="email"
        label="Email Address"
        type="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Enter your email"
        error={errors.email}
        touched={touched.email}
        required
      />

<CustomInput
        id="Address"
        label=" Address"
        type="Address"
        value={user.Address}
        onChange={handleChange}
        placeholder="Enter your email"
        error={errors.Address}
        touched={touched.Address}
        required
      />



  <CustomButton label="Submit" color="success" onClick={handleSubmit} /> 


</div>


 </> 
)

}

export default UserForm;