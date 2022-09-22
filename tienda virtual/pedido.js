const cliente = require("./cliente")

class pedido{
    direccion
        fecha_de_envio
            fecha_de_entrega
                nombre_cliente
                    id_cliente
                        id_envio
                                cantidad
                                    Codigo_del_producto
    constructor(direccion,fecha_de_envio,fecha_de_entrega,nombre_cliente,id_cliente,id_envio,cantidad,Codigo_del_producto) {
        this.direccion = direccion;
            this.fecha_de_envio = fecha_de_envio;
                this.fecha_de_entrega = fecha_de_entrega;
                    this.nombre_cliente = nombre_cliente;
                        this.id_cliente = id_cliente;
                            this.id_envio = cliente.id_envio;
                                    this.cantidad = cantidad;
                                        this.Codigo_del_producto = Codigo_del_producto;
    }
    get direccion() {
        return this.direccion;
        }
            get fecha_de_envio() {
                return this.fecha_de_envio;
                }
                get fecha_de_entrega() {
                    return this.fecha_de_entrega;
                    }
                    get nombre_cliente() {
                        return this.nombre_cliente;
                        }
                        get id_cliente() {
                            return this.id_cliente;
                            }
                                get id_envio() {
                                    return this.id_envio;
                                    }
    static setdireccion(direccion) {
        this.direccion = this.direccion;
        }
            static setfecha_de_envio(fecha_de_envio) {
                this.fecha_de_envio = this.fecha_de_envio;
                }
                static setfecha_entrega(fecha_de_entrega) {
                    this.fecha_de_entrega = this.fecha_de_entrega;
                    }
                    static setnombre_cliente(nombre_cliente) {
                        this.nombre_cliente = this.nombre_cliente;
                        }
                        static setid_cliente(id_cliente) {
                            this.id_cliente = this.id_cliente;
                            }
                                static setid_envio(id_envio) {
                                    this.id_envio = this.id_envio;
                                    }
}
module.exports=pedido
const pedido1 = new pedido('calle 35  A # 2A sur torre 20 apartamento 303 ','05/31/2022','06/20/2022','sofia','1029374659','2534','328475307548','1');
    const pedido2 = new pedido ('cra 20  B # 1B oeste ','03/07/2022','03/31/2022','paula','1014235678','2543','548475346548','1');
        const pedido3 = new pedido ('calle 19 A #1B este ','1O/10/2022','10/29/2022','alejandra','1013246751','2524','988464507548','1');
            console.log(pedido1);
                console.log(pedido2);
                    console.log(pedido3);