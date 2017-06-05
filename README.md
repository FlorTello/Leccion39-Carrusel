# Ejercicio carousel en jQuery
  Desarrollar un carrucel con 5 imagenes diferentes
### Objetivo
* Practicar la sintaxis de jQuery
* Prácticar selectores jQuery
### Requerimientos
+ Agregar circulos que funcionaran como controles al darle click mostrar una imagen diferente

<img src="https://lh3.googleusercontent.com/FTwBbmektEYzr0utackq2QmiNReRPIca2rv-ellA8XFPGOpw3QGHnkzqBlNWEAEdZWrqN0reWjEE2ScCS4GUWJa-cgVKaWdl_kHR5OnNC8UZBDolAqXSDgiZHUoP73xk8A3kIY9ilag">
</img>

### Extra
+ Agregar antes y siguiente para que cambie la imagen según corresponda
<img src="https://lh6.googleusercontent.com/TBAv6U9TZbYjD2S9e9pmIGA5kN7M8wtvkmcOJjnoLwmq9HudHF7Y8j1jLiCDpmtOcQpxeLDb07Pn-IY7e6JH2uUHF2mIaLRY2XngPDTwqb29hVkAhahvPczcdwG7NxVDbP4ijUMKQ4A">
</img>
+ Cambiar de slide cada 5 segundos automáticamente

### Desarrollo

Se utilizaron lo siguientes del jQuery
* Para el autoplay cada 5 segundos 
```js
  setInterval(() => {moveRight(); }, 5000);
```
* Para seleccionar la ultima imagen y la primera imagen de la lista
```js
     $('#slider ul li:last-child').prependTo('#slider ul');
     $('#slider ul li:first-child').appendTo('#slider ul');
```
* Para ejecutar siguiente y anterior
```js
     $('div.btn-prev').click(function () {
        moveLeft();
    });

    $('div.btn-next').click(function () {
        moveRight();
    });
```
