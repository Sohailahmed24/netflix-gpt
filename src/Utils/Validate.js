


export const checkValidData=(email,password,name)=>{
 const isEmailValid=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
 const isPasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
 console.log(name)
 const isNameValid=/(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(name)
 if(!isEmailValid) return "Email is not Valid";
 if(!isNameValid) return "Please Enter Name your Full Name"
  
 if(!isPasswordValid) return "Password is not Valid";
 return null
}