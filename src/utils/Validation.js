export const CheckFormValidation =(name,emailorphone, password,isSignIn)=>{
    if (!isSignIn) {
        const isNameValid = /^[a-zA-Z][a-zA-Z0-9_]{5,19}$/.test(name);
        if (!isNameValid) return "Name is invalid";
      }
        const  isPhoneNumvalid = /^\d{10}$/.test(emailorphone)
        const  isEmailVaild = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailorphone)
        const  isPasswordValid =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(password);

         if(!isEmailVaild && !isPhoneNumvalid )return "Email or phone Number is invalid";
         if(!isPasswordValid)return"Password is invalid";
         return null;
}