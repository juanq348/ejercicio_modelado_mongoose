import { Schema, model } from "mongoose";

const productoSchema = new Schema({
    nombre: { 
        type: String, 
        required: true 
    },
    descripcion: String,
    precio: { 
        type: Number, 
        required: true 
    },
    stock: { 
        type: Number, 
        default: 0 
    }
    });

export const Producto = model('Producto', productoSchema);
