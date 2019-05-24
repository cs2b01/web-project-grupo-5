# Web Project

Este proyecto final del curso tiene como objetivo que te enfrentes a un desafío que te permita practicar los conocimientos adquiridos en el curso de Desarrollo Basado en Plataformas creando una aplicación para ambas versiones: Web y Móvil. Para el logro de este objetivo deberás implementar una aplicación Web y otra aplicación Móvil sobre un tema que consideres factible y que te interese siguiendo el diagrama de arquitectura de software descrito en

La aplicación web deberá cumplir con las restricciones que las plataformas web ponen a los desarrolladores tales como:

## Cliente-Servidor

Las primera restricción añadida es del estilo arquitectónico cliente-servidor. La separación de responsabilidades es el principio detrás de la restricción cliente-servidor. Al separar las responsabilidades de la interfaz de usuario de las  de almacenamiento de datos, mejoramos la portabilidad de la interfaz de usuario en múltiples plataformas y mejoramos la escalabilidad al simplificar los componentes del servidor.

## Stateless - Stateful
Esta restricción indica que la comunicación debe ser de naturaleza sin estado (stateless), de modo que cada solicitud del cliente a el servidor debe contener toda la información necesaria para comprender la solicitud y no puede aprovechar el contexto almacenado en el servidor. Por lo tanto, el estado de la sesión se mantiene completamente en el cliente.

## Cache
Para mejorar la eficiencia de la red, agregamos restricciones de caché para formar el estilo cliente-caché-servidor-sin-estado . Las restricciones de caché requieren que los datos dentro de una respuesta a una solicitud se etiqueten implícita o explícitamente como cacheables o no. Si una respuesta es almacenable en caché, se le da a un caché de cliente el derecho de reutilizar los datos de respuesta para solicitudes equivalentes posteriores.

## Uniform Interface
Al aplicar el principio de generalización de la ingeniería del software a la interfaz del componente, se simplifica la arquitectura general del sistema y se mejora la visibilidad de las interacciones. Las implementaciones están desacopladas de los servicios que proporcionan, lo que fomenta la capacidad de evolución independiente. La desventaja, sin embargo, es que una interfaz uniforme degrada la eficiencia, ya que la información se transfiere de forma estandarizada en lugar de una que sea específica para las necesidades de una aplicación.


## Uniform Interface
Con el fin de mejorar aún más el comportamiento para los requisitos de escala de Internet, agregamos restricciones del sistema en capas, el estilo de sistema en capas permite que una arquitectura se componga de capas jerárquicas al restringir el comportamiento de los componentes de modo que cada componente no pueda "ver" más allá de la capa inmediata con la que están interactuando. Al restringir el conocimiento del sistema a una sola capa, establecemos un límite en la complejidad general del sistema y promovemos la independencia del sustrato. Las capas se pueden usar para encapsular servicios heredados y para proteger servicios nuevos de clientes heredados, simplificando los componentes al mover la funcionalidad utilizada con poca frecuencia a un intermediario compartido. Los intermediarios también se pueden usar para mejorar la escalabilidad del sistema al permitir el equilibrio de carga de los servicios en múltiples redes y procesadores.

## Code-On-Demand
La adición final al conjunto de restricciones proviene del estilo de código según demanda. Esto permite extender la funcionalidad del cliente descargando y ejecutando código en forma de applets o scripts. Esto simplifica a los clientes al reducir el número de características requeridas para ser implementadas previamente. Permitir que las funciones se descarguen después de la implementación mejora la extensibilidad del sistema.
