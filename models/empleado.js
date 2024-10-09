import { Schema, model } from 'mongoose';

const empleadoSchema = new Schema({
    nombre: { 
        type: String, 
        required: true 
    },
    email: { 
        type: String, 
        required: true, 
        unique: true 
    },
    password: { 
        type: String, 
        required: true 
    }
});

export const Empleado = model('Empleado', empleadoSchema);