export const validateForm = (input)=>{
  const errors={}
  let isValid = false
  
  if(input.user_name.length <= 0){
    errors.user_name = '*User name is required'
  }

  if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(input.user_email)){
    errors.user_email = '*Pleas enter a valid email'
  }

  if(input.user_email.length <= 0){
    errors.user_email = '*User email is required'
  }
 
  if(input.user_subject.length < 3){
    errors.user_subject ='*Subject needs at least 3 characters'
  }
  if(input.user_subject.length <= 0 ){
    errors.user_subject = '*Subject is required'
  }
  
  if(input.user_message.length < 3 ){
    errors.user_message = '*Message needs at least 3 characters'
  }
  if(input.user_message.length <= 0){
    errors.user_message = '*User message is required'
  }
  

  if(Object.keys(errors).length === 0){
    isValid = true
  }else {
    isValid=false;
  }

  const info ={errors,isValid}
  return info
}