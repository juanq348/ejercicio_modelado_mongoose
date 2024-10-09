import { Schema, model } from "mongoose";

const ventaSchema = new Schema({
    empleado: { 
        type: Schema.Types.ObjectId, 
        ref: 'Empleado',
        required: true 
    },
    fecha: { 
        type: Date, 
        default: Date.now 
    },
    total: { 
        type: Number, 
        required: true 
    }
});

export const Venta = model('Venta', ventaSchema);
