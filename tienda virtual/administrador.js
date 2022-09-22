const usuario = require("./usuario");

class administrador{
    nombre_administrador
        email
            id
                contraseña
    constructor(nombre_administrador,email,id,contraseña){
        this.nombre_administrador = nombre_administrador;
            this.email = email;
                this.id = id;
                    this.contraseña = usuario.contraseña;
    }
        get nombre_administrador(){
            return this.nombre_administrador;
            }
                get email(){
                    return this.email;
                    }
                        get id(){
                            return this.id;
                            }
                                static setnombre_administrador(nombre_administrador){
                                    this.nombre_administrador = this.nombre_administrador;
                                    }
                                        static setemail(email){    
                                            return this.email;
                                            }
                                                static setid(id) {
                                                    this.id = this.id;
                                                    }
    }
module.exports=administrador
    const administrador1 = new  administrador('hawer','hawerm.n@gmail.com','432318','7454554');
        const administrador2 = new administrador('luna','luna.n@gmail.com','5648318','7654534');
            const administrador3 = new administrador('jeremy','jeremym.n@gmail.com','3451267','0978896');
                console.log(administrador1);
                    console.log(administrador2);
                        console.log(administrador3);