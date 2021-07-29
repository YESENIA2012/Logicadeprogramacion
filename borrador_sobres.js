INICIO 
    LEA N_num_clientes      
    cont_N_clientes = 1
    ancho_sobres_pequeños = 10
    alto_sobres_pequeños = 15
    sobres_pequeños_disponibles = 200
    ancho_sobres_grandes = 15
    alto_sobres_grandes = 20
    sobres_grandes_disponibles = 300
   

    MIENTRAS cont_N_clientes <= N_num_clientes HAGA 
      LEA cant_sobres, ancho, alto

      SI ancho <= ancho_sobres_pequeños and alto <= alto_sobres_pequeños entonces:
        Escriba "Sobres 15x10 disponibles = sobres_pequeños_disponibles"

        sobres_pequeños_producir = cant_sobres - sobres_pequeños_disponibles
        sobres_pequeños_disponibles_2 = sobres_pequeños_disponibles - cant_sobres

        SI sobres_pequeños_disponibles <= cant_sobres
          Escriba "Sobres 15x10 a producir= sobres_pequeños_producir"
      SINO
          Escriba "No es necesario producir sobres 15x10"
      FIN_SI
      SI sobres_pequeños_disponibles_2 > 0
        Escriba "Sobres disponibles 15x10 en inventario= sobres_pequeños_dosponibles_2"
      SINO
        Escriba "No hay sobres 15x10 disponibles en inventario"
      FIN_SI
      SINO
        SI ancho <= ancho_sobres_grandes and alto <= alto_sobres_grandes entonces:

          Escriba "Sobres 20x15 disponibles = sobres_grandes_disponibles_"

          sobres_grandes_producir = cant_sobres - sobres_grandes_disponibles // = 100
          sobres_grandes_disponibles_2 = sobres_grandes_disponibles - cant_sobres // 300 - 400 = -100

        SI sobres_grandes_disponibles_2 <= cant_sobres entonces: 300 
        Escriba "Sobres 20x15 a producir= sobres_grandes_producir"
        SINO
          Escriba "No es necesario producir sobres 20x15"
        FIN_SI

        SI sobres_grandes_disponibles_2 > 0
          Escriba "Sobres disponibles 20x15 en inventario= sobres_grandes_dosponibles_2"
        SINO
        Escriba "No hay sobres 20x15 disponibles en inventario"
        FIN_SI
        FIN_SI 
    FIN_MIENTRAS
cont_N_clientes = cont_N_clientes + 1
FIN_INICIO
