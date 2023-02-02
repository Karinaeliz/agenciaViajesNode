import { Testimonial } from '../models/Testimoniales.js';

const guardarTestimonial = async (req, res)  => {
    const { nombre, correo, mensaje } = req.body;

    const errores = [];

    if(nombre ==='') {
        errores.push({mensaje: 'Agrega tu Nombre'});
    }
    if(correo === '') {
        errores.push({mensaje: 'Tu Correo es Obligatorio'});
    }
    if(mensaje === '') {
        errores.push({mensaje: 'El mensaje esta vacio'});
    }

    // revisar por erroes
    if(errores.length > 0 ){
        const testimoniales = await Testimonial.findAll();

        // muestra la vista con errores
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales
        })
    } else {
        // almacenalo en la BD
        try {
            await Testimonial.create({
                nombre, 
                correo,
                mensaje
            })
            res.redirect('/testimoniales');
        } catch (error) {
            console.log(error);
        }
    }
};



export {
    guardarTestimonial
}