const cliente = require("./cliente")

class usuario extends cliente {
    id_usuario
        contraseña
            estado_inicio_sesion
                registro_de_datos
                    cantidad_de_productos
    constructor(nombre_cliente,tel,direccion,identificacion_de_producto,id_envio,id_usuario,contraseña,estado_inicio_sesion,registro_de_datos,cantidad_de_productos) {
        super(nombre_cliente,tel,direccion,identificacion_de_producto,id_envio)
        this.id_usuario = cliente.id_usuario;
            this.contraseña = contraseña;
                this.estado_inicio_sesion = estado_inicio_sesion;
                    this.registro_de_datos = registro_de_datos;
                        this.cantidad_de_productos = cantidad_de_productos;
    }            
            get estado_inicio_sesion() {
                return this.estado_inicio_sesion;
                }
                    get registro_de_datos() {
                        return this.registro_de_datos;
                        }
                            get cantidad_de_productos() {
                                return this.cantidad_de_productos;
                                }
            static setestado_inicio_sesion(estado_inicio_sesion){
                this.estado_inicio_sesion = this.estado_inicio_sesion;
                }
                    static setregistro_de_datos(registro_de_datos) {
                        this.registro_de_datos = this.registro_de_datos;
                        }
                            static setcantidad_de_productos(cantidad_de_productos) {
                                this.cantidad_de_productos = this.cantidad_de_productos;
                                }

}
module.exports=usuario
    const usuario1 = new usuario ('alejandra','7454554','calle 35  A # 2A sur torre 20 apartamento 303','123','excelente','2534','7454554','activo','entregado','un libro');
        const usuario2 = new usuario ('paula','7654534','cra 20  B # 1B oeste','456','excelente','2543','7654534','activo','entregado','dos libros');
            const usuario3 = new usuario ('sofia','0978896','calle 19 A #1B este','789','excelente','2524','0978896','activo','entregado','tres libros');
                console.log(usuario1);
                    console.log(usuario2);
                        console.log(usuario3);