export const validateForm = (input,language)=>{
  const errors={}
  let isValid = false
  
  if(input.user_name.length <= 0){
    language === 'ES' ? errors.user_name = '*El nombre es requerido' :
    errors.user_name = '*Name is required'
  }

  if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(input.user_email)){
    language === 'ES' ? errors.user_email = '*Porfavor ingrese el mail':
    errors.user_email = '*Please enter a valid email'
  }

  if(input.user_email.length <= 0){
    language === 'ES' ? errors.user_email = '*El mail es requerido' :
    errors.user_email = '*Email is required'
  }
 
  if(input.user_subject.length < 3){
    language === 'ES' ? errors.user_subject= '*El tema necesita al menos 3 caractéres':
    errors.user_subject ='*Subject needs at least 3 characters'
  }
  if(input.user_subject.length <= 0 ){
    language === 'ES' ? errors.user_subject ='*El tema es requerido':
    errors.user_subject = '*Subject is required'
  }
  
  if(input.user_message.length < 10 ){
    language === 'ES' ? errors.user_message = '*El mensaje necesita al menos 10 caractéres':
    errors.user_message = '*Message needs at least 10 characters'
  }
  if(input.user_message.length <= 0){
    language === 'ES' ? errors.user_message = '*El mensaje es requerido':
    errors.user_message = '*Message is required'
  }
  

  if(Object.keys(errors).length === 0){
    isValid = true
  }else {
    isValid=false;
  }

  const info ={errors,isValid}
  return info
}