import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useRegister = (initialForm, formValidation) => {

    const [form,setForm] = useState(initialForm)
    const [errors,setErrors] = useState({})
    const [loading, setLoading] = useState(false)
    const [serverError, setServerError] = useState(null)


  
    const navigate = useNavigate()
    const handleNavigation = (path) =>{
        navigate(path)
    }

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setForm((previousForm) => ({
            ...previousForm,
            [name]: value
        }))
    }

    const handleBlur = (e) =>{
        handleChange(e)
        setErrors(formValidation(form))
    }

    const handleSubmit = async (e) =>{
      e.preventDefault()
      console.log(form)
      if(Object.keys(errors.length > 0)){
        return
      }

      setLoading(true)
      try {

        const fetchRequest = await fetch ('',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })

        if(!fetchRequest.ok){
            throw new Error('Network response was not ok')
        }
        const data = await fetchRequest.json
        setLoading(false)

        if(!data.registerErrors){
            console.log('user saved successfully')
            handleNavigation('/dashboard')
        }
      } catch (fetchError) {
       console.log(fetchError) 
      }

    }

    return{
        form,
        errors,
        loading,
        serverError,
        handleBlur,
        handleSubmit,
        handleChange
    }
}
export default useRegister;