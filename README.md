## Operación juego de quasar.
Esta aplicación fue desarrollada para el challenge de admisión al bootCamp MeLi.
Las tecnologías utilizadas fueron: **nodeJs**, **expressJS**, **Heroku**.

### Objetivos alcanzados.
- Nivel 1 ✅
- Nivel 2 ✅
- Nivel 3 ✅</br>
En el nivel 3 tenia varias dudas. Mi conclusion fue que el endpoint **POST /topsecret_split** recibe los mensajes de los satélites para generar tanto la posición del emisor como el mensaje secreto, y con el endpoint **GET /topsecret_split** se puede obtener la información generada en método POST.</br>
Es importante resaltar que para generar una nueva ubicación y mensaje será necesario enviar la información pertinente, de lo contrario siempre el método GET devolverá la ultima generada.

### Endpoints
- POST /topsecret
- POST /topsecret_split
- GET /topsecret_split

## Instrucciones
### Local:
Ejecutar desde la terminal de preferencia los comandos a continuación.

#### _Paso 1_
- Clonar el repositorio del proyecto.
```termina
git clone git@github.com:IGUNUBLUE/quasar-operation-MeLi.git
```

#### _Paso 2_
- Ingresar al directorio raíz.
```termina
cd quasar-operation-MeLi
```

#### _Paso 3_
- Instalar los módulos.
```terminal
$ yarn install
```
- Iniciar la aplicación.
```terminal
$ yarn nodemon
```

#### _Paso 4_
Utilizar postman u otro API-testing para probar los endpoints declarados en [Endpoint](https://github.com/IGUNUBLUE/quasar-operation-MeLi#endpoints).</br>
Para las pruebas locales la URL base es: http://localhost:3001.

### Online - deploy:
- La aplicación fue desplegada en heroku. Para las pruebas se puede usar el link:</br>
https://quasar-operation-meli.herokuapp.com/

## Adicionales
- En el repositorio se encuentran la carpeta *resources* con el archivo de nombre **MeLi.postman_collection.json**, dicho archivo contiene el template de postman con el cual realice las pruebas.
