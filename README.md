# Proceso de reserva

El sistema contará con tres pasos para realizar el proceso de reserva de un vuelo, hotel y confirmación de la misma.

## Selección de Vuelo

El primer paso consta de listar los aviones en base al listado proporcionado en el servicio de vuelos que muestra:

![image](https://github.com/fpiemontesi/utn-dabd-booking-process/assets/32469880/2548a97d-f100-4294-a9b6-ffebbe95672a)

    * Logo empresa
    * Ciudad destino
    * Pais destino
    * Precio
    * Fecha y hora despegue (formato: Mes, Dia, Año, Hora)
    * Fecha y hora aterrizaje (formato: Mes, Dia, Año, Hora)

Aquí el usuario podrá seleccionar un vuelo lo cual lo llevará a la siguiente pantalla en la cual se deben mostrar todas las habitaciones disponibles para el destino seleccionado (existe una variable que asocia los identificadores de los destinos tanto para los vuelos como para los hoteles).

## Selección de Habitación

![image](https://github.com/fpiemontesi/utn-dabd-booking-process/assets/32469880/e9bc6f84-7a23-4d15-91e2-2aae5a72c304)

- En esta sección podrá ver:
    * Foto
    * Hotel (mayusculas) - Tipo habitación => ej: PALLADIUM - Habitación Simple
    * Descripción
    * Cantidad de Revisiones
    * Servicios
Dicha información debe ser obtenida desde el servicio de hoteles. Cada habitación podrá seleccionarse por medio de un botón.

## Checkout
Una vez elegida la habitación el sistema debe mostrar el último paso para cargar la información donde se visualizará:

![image](https://github.com/fpiemontesi/utn-dabd-booking-process/assets/32469880/a6ca23ac-ee77-47d4-82b9-8d28d614dc76)

  * Resumen reserva:
    - Información vuelo:
      * Logo empresa
      * Ciudad origen - Ciudad destino
      * Duración viaje
      * Hora vuelo ida + Ciudad origen
      * Hora vuelo vuelta + Ciudad Destino
    - Información habitación
      * Foto
      * Hotel
      * Tipo habitacion
      * Servicios
  * Formulario información personal
    - Nombre (requerido, maxLenght: 50)
    - Apellido (requerido, maxLenght: 50)
    - Tipo documento (requerido, select)
        => DNI - Pasaporte 
    - Numero documento (requerido, numerico)
    - Dirección (requerido, maxLenght: 500)
    - Pais (requerido, maxLenght: 100)
    - Ciudad (requerido, maxLenght: 100)
  * Formulario pago tarjeta
    - Tipo tarjeta (credito, debito)
    - Nombre titular (requerido, maxLenght: 12)
    - Numero tarjeta (requerido, validar formato: XXXX-XXXX-XXXX-XXXX)
    - Expiración (requerido, maxLenght: 4)
    - CCV (requerido, maxLenght: 3, password)

Una vez que el usuario completó todos los datos para que el formulario sea válido se debe realizar una validación adicional que el hotel esté disponible por medio de la propiedad disponible en las habitaciones.

En caso de que todo lo mencionado anteriormente sea correcto se debe mostrar un mensaje con un alert informando al usuario que la operación se realizó con exito y que se realizó el cobro por el Monto Total = Precio Vuelo + Precio Habitación.

Solo se debe mostrar un paso a la vez a medida que el usuario va seleccionando el producto deseado.

## Notas:
  - Utilizar servicios
  - Utilizar comunicación entre componentes según lo requiera
  - Utilizar Template Driven Forms mostrando validaciones especificas en donde corresponda.
  - Utilizar bootstrap para el diseño propuesto
