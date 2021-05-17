import React, { useState } from 'react';
import apiGetService from '../../../services/apiGetService';
import apiUpdateService from '../../../services/apiUpdateService';
import { successAlert } from '../../Alert/Alert';
const TestimonialItem = ({id, name, content, deleteTestimonial}) => {
    
    const [testimonial, setTestimonial] = useState({id, name, content});
    const [isEdit, setIsEdit] = useState(false);

    const handleOnChange = e => {

        setTestimonial({
            ...testimonial,
            [e.target.name]: e.target.value
        })

    }
    const handleSubmit = async e => {
        e.preventDefault()
        try{
            const res = await apiUpdateService('testimonials', id, testimonial)

            if(res){

                await successAlert();
                
            }
            setIsEdit(false);

        }catch(err){
            console.log(err)
        }

    }
    const handleCancel = async (id) => {

        try{

            const res = await apiGetService('testimonials', id);
            setTestimonial(res)
            setIsEdit(false)
        }catch(err){
            console.log(err)
        }
    }
    
        return(

            <div className="TestimonialItem__content">
                
                <h5 className="TestimonialItem__h5" >{testimonial.name}</h5>
                <p className="TestimonialItem_p" >{testimonial.content}</p>
                <i className="fas fa-edit" onClick={ () => setIsEdit(!isEdit) } ></i>
                <i className="fas fa-trash-alt" onClick={deleteTestimonial} ></i>
                
            
                {
                    isEdit && (
                        <div className="TestimonialItem__modal-content">    
                            <form onSubmit={handleSubmit} >
                                <input type="text" name="name" autoComplete="off" value={ testimonial.name } onChange={handleOnChange}/>
                                <textarea type="textarea" name="content" autoComplete="off" value={ testimonial.content } onChange={handleOnChange}></textarea>
                                <button type="submit">Guardar Cambios</button>
                                <button type="button" onClick = { () => handleCancel(id) } > Cancelar </button>
                            </form>
                        </div>
                        )
                }

            </div>
        )
}
export default TestimonialItem;