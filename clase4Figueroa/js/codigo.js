let nombre;
let pregunta;
let album1;
let album2;
let album3;
let album4;
let album5;
let album6;
let album7;
let album8;
let album9;
let invalido = "N";

nombre = prompt("Ingrese su nombre. Escriba SALIR para finalizar el cuestionario.");
const nom_album = ["Taylor Swift (Debut)", "Fearles", "Speak Now", "Red", "1989", "Reputation", "Lover", "Folklore", "Evermore"]; 

if (nombre != "SALIR"){
    alert('Bienvenido '+nombre+".. A continuación, vamos a pedirle que califique los 9 álbums de Taylor Swift del 1 al 10");

    while (pregunta != "SALIR"){
        pregunta = prompt("Del 1 al 10, califique "+nom_album[0]);

        if (parseInt(pregunta) <= 10){
            album1 = parseInt(pregunta);
            pregunta = prompt("Del 1 al 10, califique "+nom_album[1]);

            if (parseInt(pregunta) <= 10){
                album2 = parseInt(pregunta);
                pregunta = prompt("Del 1 al 10, califique "+nom_album[2]);
                
                if (parseInt(pregunta) <= 10){
                    album3 = parseInt(pregunta);
                    pregunta = prompt("Del 1 al 10, califique "+nom_album[3]);
                    
                    if (parseInt(pregunta) <= 10){
                        album4 = parseInt(pregunta);
                        pregunta = prompt("Del 1 al 10, califique "+nom_album[4]);
            
                        if (parseInt(pregunta) <= 10){
                            album5 = parseInt(pregunta);
                            pregunta = prompt("Del 1 al 10, califique "+nom_album[5]);
                            
                            if (parseInt(pregunta) <= 10){
                                album6 = parseInt(pregunta);
                                pregunta = prompt("Del 1 al 10, califique "+nom_album[6]);

                                if (parseInt(pregunta) <= 10){
                                    album7 = parseInt(pregunta);
                                    pregunta = prompt("Del 1 al 10, califique "+nom_album[7]);
                                    
                                    if (parseInt(pregunta) <= 10){
                                        album8 = parseInt(pregunta);
                                        pregunta = prompt("Del 1 al 10, califique "+nom_album[8]);

                                        if (parseInt(pregunta) <= 10){
                                            album9 = parseInt(pregunta);
                                            break
                                        }
                                        else{
                                            invalido = "S";
                                            break
                                        }
                                    }
                                    else{
                                        invalido = "S";
                                        break
                                    }
                                }
                                else{
                                    invalido = "S";
                                    break
                                }
                            }
                            else{
                                invalido = "S";
                                break
                            }
                        }
                        else{
                            invalido = "S";
                            break
                        }
                    }
                    else{
                        invalido = "S";
                        break
                    }
                }
                else{
                    invalido = "S";
                    break
                }      
            }
            else{
                invalido = "S";
                break
            }
        }
        else{
            invalido = "S";
            break
        }
    }
}

if (invalido == "S" && pregunta != 'SALIR'){
    alert("El dato es inválido. Debe comenzar nuevamente.");
}
else if (invalido == "S" && pregunta == 'SALIR'){
    alert("Lo esperamos nuevamente para realizar el cuestionario.");
}
else if (invalido == "N"){

    const albums = [album1, album2, album3, album4, album5, album6, album7, album8, album9]; 

    let l_mayor = albums[0];
    let l_array = 0;

    // FN para cCalcular promedio de puntaje a los 9 discos
    function promedio(n1, n2, n3, n4, n5, n6, n7, n8, n9){
        let l_promedio = ((n1+n2+n3+n4+n5+n6+n7+n8+n9) / 9);
        alert("El puntaje promedio es "+l_promedio);
    }
    // FN para obtener el mejor puntuado
    function mayor(nro, nro_array){  
        if (l_mayor < nro){
            l_mayor = nro;
            l_array = nro_array;
        }
    }    

    promedio(album1, album2, album3, album4, album5, album6, album7, album8, album9);

    for (let i = 0; i <= albums.length; i++){
        mayor(albums[i], i);
        l_array = parseInt(l_array);
    }

    let l_ambum_fav = nom_album[l_array]; 

    // PUede que haya puntuado dos con el mismo puntaje pero ya era más elaborado guardar en otro array todos los mejor puntuados por igual
    alert('El album mejor puntuado es '+l_ambum_fav); 
    alert('¡Gracias por participar!');
}
