import * as Yup from 'yup';

const schemaContacto = Yup.object().shape({
  nombre: Yup.string()
    .required('El nombre es obligatorio')
    .min(2, 'El nombre debe tener al menos 2 caracteres'),
  
  email: Yup.string()
    .email('El email no es válido')
    .required('El email es obligatorio'),

  telefono: Yup.string()
    .matches(/^[0-9]{7,15}$/, 'El teléfono debe tener entre 7 y 15 dígitos')
    .required('El teléfono es obligatorio'),

  mensaje: Yup.string()
    .required('El mensaje es obligatorio')
    .min(10, 'El mensaje debe tener al menos 10 caracteres'),
});

export default schemaContacto;