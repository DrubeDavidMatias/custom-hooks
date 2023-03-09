import { useState } from 'react';

export const useForm = ( initialForm = {}) => {

    const [formState, setFormState] = useState(initialForm);

    const onInputChange = ({target}) => {
        const { name , value } = target;
        setFormState({
            ...formState,
            [ name ]:value
        });
    }

    const onResetForm = () => {
        setFormState(initialForm);
    }

    return{
        //con el operador spread retorno el formState desestructurado
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }
}
