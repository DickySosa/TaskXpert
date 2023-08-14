import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useRegister = (initialForm, formValidation) => {

    const [form,setForm] = useState({initialForm})
    const [errors,setErrors] = useState({})
    const [loading, setLoading] = useState(false)
    const [serverError, setServerError] = useState(null)
    const navigate = useNavigate()
    const handleNavigation = (path) =>{
        navigate(path)
    }

    const handleBlur = () =>{

    }

    const handleSubmit = (e) =>{
      e.preventDefault()
      console.log(initialForm)
    }

    return{
        form,
        errors,
        loading,
        serverError,
        handleBlur,
        handleSubmit
    }
}