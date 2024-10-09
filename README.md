# Ejercicio Práctico de Modelado con Mongoose

El proyecto consiste en la creación de modelos para poder registrar las ventas de cada uno de los empleados. Los modelos que fueron creados son los siguientes:
- **Empleado:** Va a representar a los empleados que trabajan en el comercio.
  
    `nombre`: Va a tener el nombre del empleado.
  
    `email`: Va a tener el email único del empleado.
  
    `contrasenia`: Va a contar con una contraseña para poder acceder al sistema.
- **Producto:** Contiene información acerca de los productos que se venden en el comercio.

    `nombre`: Va a tener el nombre del producto.
  
    `precio`: Va a tener el precio del producto.
  
    `stock`: Va a tener la cantidad disponible del producto.
  
- **Venta:** Representa las ventas realizadas por un empleado.

    `empleado`: Referencia al empleado que realizó la venta
  
    `fecha`: Va a tener la fecha de la venta
  
    `total`: Total de la venta

# Relación entre Venta y Empleado
 - Es una relación de uno a muchos ya que un empleado puede tener varias ventas, para realizar esto, el empleado es referenciado en el modelo de ventas, que es almacenado en un `ObjectId` para identificar que empleado esta realizando la venta.
   
`venta.js`
 ```bash
 empleado: { 
        type: Schema.Types.ObjectId, 
        ref: 'Empleado',
        required: true 
    },
 ```
Lo hice de una forma referencial debido a que queria evitar la duplicación de datos, al ser referenciado por un `objectId` se hace posible que cualquier cambio que se realice en la información del empleado, como su contraseña o email, se refleje de forma automática en todas las ventas que hizo. 

Podra notar que los esquemas estan separados en distintos archivos, esto se hizo para poder entender el código con mayor claridad y organizarlo mejor.

El diagrama gráfico va a estar incluido en el classroom.
