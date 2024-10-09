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
    productos: [{
        producto:{
            type: Schema.Types.ObjectId,
            ref: 'Producto',
            required: true
        },
        cantidad: {
            type: Number,
            required: true,
            min:1
        },
        precioUnitario:{
            type: Number,
            required: true
        }
    }],
    total:{
        type: Number,
        required: true
    }
});

export const Venta = model('Venta', ventaSchema);
