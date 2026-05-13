1. Base
Un lenguaje tan antiguo como el propio internet. El primero que consiguió que las páginas pasaran de ser estáticas a dinámicas. Pero no caigáis en el error, no esta ni obsoleto ni viejo: ¡esta más vivo que nunca!. Ha sabido adaptarse a los nuevos tiempos: orientación a objetos, bibliotecas, gestión de imágenes, etc. Actualmente es tan estable que es utilizado por grandes sitios como Wikipedia y Facebook. Además que grandes CMS, como WordPress, están escritos en este lenguaje.

Os ofrezco un curso gratuito de PHP (versión 8.x). Aprenderás las técnicas más modernas para el desarrollo del backend y las bases para cualquier persona que quiera crear páginas dinámicas. Si tienes alguna durante las lecciones, o crees necesario ampliar alguna sección, no dudes en dejar un comentario en el final de la página.

Creación de ficheros
PHP se ejecuta en un fichero plano. Para ello debes crear un documento con la extensión .php y dentro tu HTML.

<html>
    <head></head>
    <body>
        <h1>Mi primer fichero en PHP</h1>
    </body>
</html>
Por ahora no tienes razones para asustarte. Es prácticamente igual a hacer una página estática en HTML, salvo que hemos cambiado la extensión.

Para añadir tus scripts de PHP debes usar <?php ?>. También existen los short tags <? ?>, pero están desaconsejados y no deberías usarlos, ya que pueden estar deshabilitados en el servidor y causar problemas de compatibilidad.

<html>
    <head></head>
    <body>
        <h1>Mi primer fichero en PHP</h1>
        <?php echo 'Y funciona perfecto!'; ?>
    </body>
</html>
Toda sentencia, la instrucción, debe terminar con un ;. Independientemente de donde se abra o se cierre el script. Eres libre de añadir tabulaciones y saltos de línea para dejarlo más ordenado.

<html>
    <head></head>
    <body>
        <h1>Mi primer fichero en PHP</h1>
        <?php
            echo 'Y funciona perfecto!';
        ?>
    </body>
</html>
Existe un atajo de <?php echo 'Hola Mundo'; ?> muy sencillo: <?= 'Hola Mundo' ?>. Durante el curso será utilizado muy poco.

Levantar un servidor PHP rápidamente
Si intentas abrir el archivo comprobarás que no ha pasado nada. Necesitamos procesar el archivo PHP para que se muestre el HTML final.

La misión de PHP es generar HTML, el navegador no entiende PHP. Todo archivo de PHP debe ejecutarse con un software.

En el caso de tener instalado PHP en tu sistema operativo, y saber trabajar con el terminal, rápidamente puedes ejecutar el servidor interno que incorpora.

php -S localhost:8000
Y abrir, en tu navegador favorito, localhost:8000.

En caso de no ser tan geek, te recomiendo la forma que usa el 99,9% de la gente. Instalar una software.

En Windows: XAMPP.

En Mac OS: MAMP.

En Linux: Nginx + PHP o XAMPP.

Después de instalarlo aparecerá una carpeta con el nombre htdocs donde colocarás tus activos PHP.

Si tienes dudas del proceso, puedes buscar más información en Google. En el curso me voy a centrar en temas relacionado con el lenguaje, no de software.

Imprimir
La palabra reservada echo sirve para imprimir por pantalla. Eso significa que cualquier texto que pongamos a continuación de echo aparecerá en el lugar donde se ha declarado el script.

<html>
    <head></head>
    <body>
        <h1>Mi primer fichero en PHP</h1>
        <?php
            echo '<p>Y funciona perfecto!</p>';
        ?>
    </body>
</html>
Terminará siendo.

<html>
    <head></head>
    <body>
        <h1>Mi primer fichero en PHP</h1>
            <p>Y funciona perfecto!</p>
    </body>
</html>
Si deseas realizar varias líneas tienes varias opciones.

La más sencilla es utilizando varios echo.

<html>
    <head></head>
    <body>
        <h1>Mi primer fichero en PHP</h1>
        <?php
            echo '<p>En un lugar de la mancha,</p>';
            echo '<p>de cuyo nombre no quiero acordarme...</p>';
        ?>
    </body>
</html>
Otra es añadiendo un salto de línea representado como PHP_EOL.

<html>
    <head></head>
    <body>
        <h1>Mi primer fichero en PHP</h1>
        <?php
            echo '<p>En un lugar de la mancha,</p>' . PHP_EOL . '<p>de cuyo nombre no quiero acordarme...</p>';
        ?>
    </body>
</html>
En la red verás miles de ejemplos donde se usa \n para realizar saltos de línea. Si lo utilizas podrías encontrarte problemas de compatibilidad entre sistemas operativos ya que la forma de realizar un salto de línea varía en cada uno. PHP_EOL te hace la vida más fácil ya que selecciona automáticamente el correcto.

Y la última es Usando <<<. Recuerda dejar END; al principio de la línea.

<html>
    <head></head>
    <body>
        <h1>Mi primer fichero en PHP</h1>
        <?php
        echo <<<END
            En un lugar de la mancha,
            de cuyo nombre no quiero acordarme...
END;
        ?>
    </body>
</html>
Concadenar
Debes utilizar un punto entre ambos textos. Los espacios son opcionales, pero te ayudará a visualizar con más facilidad.

<html>
    <head></head>
    <body>
        <h1>Dos Beatles</h1>
        <?php
            echo 'John Lennon' . ' y ' . 'Paul McCartney';
        ?>
    </body>
</html>
Comentarios
Existe dos tipos de comentarios: línea y multilínea.

// Esto es un comentario de una sola línea
echo 'Esto es una prueba';
/* Esto es un comentario multilínea
    y otra lína de comentarios */
echo 'Esto es otra prueba';
echo 'Una prueba final';
# Esto es un comentario al estilo de consola de una sola línea
Los de una línea empiezan con // o #, seguido de un espacio.

Mientras que los multilinea empiezan con /* y terminan con */.

Si quieres dejar secciones bien delimitadas y ordenadas J. Prettyman te propone la siguiente estructura.

//======================================================================
// CATEGORIA EN MAYUSCULA
//======================================================================

//-----------------------------------------------------
// Sub-Categoria En Minúscula
//-----------------------------------------------------

/* Título con Letras Capital */

# Opción 1
# Opción 2
# Opción 3

/*
* Larga explicación de alguna
* funcionalidad o bloque de código
* que lo merezca.
*/

// Anotación