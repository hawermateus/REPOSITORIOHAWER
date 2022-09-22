const pedido = require("./pedido");

class detalles_del_pedido {
    fecha
        tipo_de_libro
            id_producto
                cantidad
                    valor
    constructor(fecha,tipo_de_libro,id_producto,cantidad,valor) {
        this.fecha = fecha;
            this.tipo_de_libro = tipo_de_libro;
                this.id_producto = id_producto;
                    this.cantidad = pedido.cantidad;
                        this.valor = valor;
    }
    get fecha() {
        return this.fecha;
        }
            get tipo_de_libro() {
                return this.tipo_de_libro;
                }
                    get id_producto() {
                        return this.id_producto;
                        }
                            get cantidad() {
                                return this.cantidad;
                                }
                                    get valor() {
                                        return this.valor;
                                        }
    static setfecha(fecha) {
        this.fecha = this.fecha;
        }
            static settipo_de_libro(tipo_de_libro) {
                this.tipo_de_libro = this.tipo_de_libro;
                }
                    static setid_producto(id_producto) {
                        this.id_producto = this.id_producto;
                        }
                            static setcantidad(cantidad) {
                                this.cantidad = this.cantidad;
                                }
                                    static setvalor(valor) {
                                        this.valor = this.valor;
                                        }
}
module.exports=detalles_del_pedido
const detalles_del_pedido1 = new detalles_del_pedido('10/27/2022','literatura linguistica','89035467283645','1','60.0000');
    const detalles_del_pedido2 = new detalles_del_pedido('07/17/2022','historia','9802454672433234','1','70.0000');
        const detalles_del_pedido3 = new detalles_del_pedido('05/07/2022','ciencia','567037667243234','1','35.0000');
            console.log(detalles_del_pedido1);
                console.log(detalles_del_pedido2);
                    console.log(detalles_del_pedido3);