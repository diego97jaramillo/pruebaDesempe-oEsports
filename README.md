<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>


## Pasos para ejecutar la API

### 1. Revisar las variables de entorno:
Revisa el archivo `.env.template` para ver qué variables de entorno se necesitan:

```bash
./.env.template
```

### 2. levantar el docker:
```
docker compose up -d
```

### 3. instala todas las dependencias

"""
npm i
"""

### 4. pon a correr el programa con el commando:

"""
npm run start:dev
"""

### 5. Atacar los endpoints POST api/v1/player y POST api/v1/tournament

esto para poder poblar la base de datos y poder ensayar todos los endpoints

### 6. adjunto en el zip que se subio a moodle puedes encontrar la palabra secreta para por el guard:

"
x-api-key
"

### 7. tener en cuenta que en result:

la propiedad "winner" y "loser" son los id de las personas que participaron en base a esto se actualiza el score en el ranking
