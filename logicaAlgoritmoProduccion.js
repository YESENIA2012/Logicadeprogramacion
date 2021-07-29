Hacer un algoritmo que dado N numero de clientes se solicite la cantidad de sobres, 
el ancho y el alto. Determinar cuantos sobres deben producirse y cuantos estan dispnibles en inventario. 
Sabiendo que se tienen en inventario, 300 sobres de 10X15 y 200 sobres de 20X15.

INICIO
  contador_clientes = 1
  sobres_grandes_ancho = 20
  sobres_grandes_alto = 15
  sobres_grandes_cantidad = 200

  sobres_pequeños_ancho= 10 
  sobres_pequeños_alto= 15
  sobres_pequeños_cantidad = 300

  LEA N_numero_de_clientes

  MIENTRAS contador_clientes <=  N_numero_de_clientes HAGA:
    Lea cant_sobres, ancho_sobre_persona, alto_sobre_persona 

    Si sobres_grandes_cantdad > 0 y ancho_sobre_persona <= sobres_grandes_ancho y alto_sobre_persona <= sobres_grandes_alto entonces:
      cantidad_sobres = (sobres_grandes_cantidad - cant_sobres) 
      sobres_a_producir = (cantidad_sobres * -1)
      
      // no tengo que producir sobres
      Escriba "La cantidad de sobres disponibles es = sobres_grandes_cantidad"
      Escriba "La cantidad de sobres a produir es = sobres_a_producir"

      Si sobres_grandes_cantidad > 0:
          sobres_grandes_cantidad = sobres_grandes_cantidad - cant_sobres

          Si sobres_grandes_cantidad <= 0 :
            sobres_grandes_cantidad = 0
          Finsi 
      Finsi
    Finsi

    SiNo si sobres_pequeños_cantidad > 0 y ancho_sobre_persona <= sobres_pequeños_ancho y alto_sobre_persona <= sobres_pequeños_alto entonces:
      cantidad_sobres = (sobres_pequeños_cantidad - cant_sobres) 
      sobres_a_producir = (cantidad_sobres * -1)
      
      // no tengo que producir sobres
      Escriba "La cantidad de sobres disponibles es = sobres_pequeños_cantidad"
      Escriba "La cantidad de sobres a produir es = sobres_a_producir"

      Si sobres_pequeños_cantidad > 0:
          sobres_grandes_cantidad = sobres_grandes_cantidad - cant_sobres

          Si sobres_pequeños_cantidad <= 0 :
              sobres_pequeños_cantidad = 0
          Finsi     
      Finsi
    Finsi

    SiNo entonces:
      // no tengo disponibles en inventario para las tallas dadas
      Escriba "La cantidad de sobres disponibles es = 0"
      Escriba "La cantidad de sobres a produir es = cant_sobres"
    Finsi
    contador_clientes = contador_clientes + 1
  FIN_MIENTRAS
FIN_INICIO