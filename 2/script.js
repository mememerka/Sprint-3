 /* Exercicis 1 i 2 */

 var nom = "oRi3oL";
 var lletres = nom.split("");

 function exercici12(){
    for (i=0; i<lletres.length; i++){
        console.log(lletres[i]);
    }

    for (i=0; i<lletres.length; i++){
        if (lletres[i]== "a"||lletres[i]== "e"||lletres[i]== "i"||lletres[i]== "o"||lletres[i]== "u"){
            console.log("He trobat la VOCAL: "+lletres[i]);
        }else if(lletres[i].match(/^[0-9]+$/)){
            console.log("Els noms de persones no contenen el número "+lletres[i]);
        }else{
            console.log("He trobat la CONSONANT: "+lletres[i]);
        }
    }
}

 /* Exercici 3 */
function exercici3(){
 
   const m = new Map;

    for (i=0; i<lletres.length; i++){
        if (m.has(lletres[i])){
            m.set(lletres[i], (m.get(lletres[i])+1));
        }else{
            m.set(lletres[i],1);
        }
    }

 console.log(m)
}

 /* Exercici 4 */

function exercici4(){

 let nom_4 = "oriol";
 let cognom_4 = "mercader"
 let lletresnom = nom_4.split("");
 let lletrescognom = cognom_4.split("");
 let espai = [" "]

 let fullname = (lletresnom.concat(espai)).concat(lletrescognom);
 
    for (i=0; i<fullname.length; i++){
        console.log(fullname[i]);
    }
}

 /* NIVELL 2 */
 function findmails(){
     var str = 'Una dirección de correo electrónico es la dirección que utiliza para recibir y enviar correos electrónicos. Se muestra a los destinatarios de sus correos electrónicos para que sepan quién le envió un correo electrónico. Cada dirección de correo electrónico sólo se puede asignar una vez en todo el mundo y, por lo tanto, está disponible exclusivamente para usted. No puede cambiar las direcciones de correo electrónico, pero puede eliminarlas en cualquier momento. Una dirección de correo electrónico consiste en el signo @ (arroba), el nombre de usuario delante y el dominio detrás, por ejemplo, nombre-de-usuario@ionos.es: La parte del dominio depende del dominio bajo el cual se crea la dirección de correo electrónico: en nuestro ejemplo es ionos.es. Esta información varía de proveedor a proveedor, por lo que una parte del dominio también puede ser gmail.com o gmx.es si utiliza una dirección de correo electrónico de estos proveedores. Si ha registrado su propio dominio, por ejemplo, www.el-nombre-de-sus-sueños.es, las direcciones de correo electrónico que configura para el dominio lo tienen como parte del dominio (nombre-de-usuario@el-nombre-de-sus-sueños.es o nombre-de-usuario@el-nombre-de-sus-sueños.ES). El nombre de usuario es la parte de una dirección de correo electrónico que puede seleccionar libremente en la medida de lo posible. Puede, por ejemplo, utilizar su propio nombre o el nombre o departamento de una empresa. Si utiliza una dirección de correo electrónico con un proveedor de correo como gmail.com o gmx.es, es posible que la combinación con la parte del dominio deseada ya esté registrada. En este caso, deberá considerar alternativas para el nombre de usuario de su dirección de correo electrónico. Si utiliza su propio dominio, estas restricciones no se aplican porque sólo usted puede crear direcciones de correo electrónico que coincidan con su propio dominio. En resumen, nombre-de-usuario@ionos.es es un email'; 
     var strfinal = str.split(" ");
     var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
     var mails = [];

         for (i=0; i<strfinal.length; i++){ /*comprova cada element*/
             if(strfinal[i].match(regex)){
                 if(!mails.includes(strfinal[i])){
                     mails.push(strfinal[i]);
                 }
             }
         }
     console.log(mails)
 }