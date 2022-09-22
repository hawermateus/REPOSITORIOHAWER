const cliente = require("./cliente");

class carrito_de_envio extends cliente{
    identificacion_de_producto
        fecha_agregada
            cantidad
    constructor(identificacion_de_producto,fecha_agregada,cantidad) {
        this.identificacion_de_producto = cliente.identificacion_de_producto;
            this.fecha_agregada = fecha_agregada;
                this.cantidad = cantidad;
                    this.libro = []
    }
    get fecha_agregada() {
        return this.fecha_agregada;
            }
                get cantidad(){
                    return this.cantidad;
                        }
    static setfecha_agregada(fecha_agregada) {
        this.fecha_agregada = this.fecha_agregada;
            }
                static setcantidad(cantidad) {
                    this.cantidad = this.cantidad;
                        }
}
module.exports=carrito_de_envio


const carrito_de_envio1 = new carrito_de_envio ('56784','09/28/2022','dos libros');
    const carrito_de_envio2 = new carrito_de_envio ('93745','05/31/2022','cuatro libros');
        const carrito_de_envio3 = new carrito_de_envio ('123123','03/17/2022','cuatro libros');
            console.log(carrito_de_envio1);
                console.log(carrito_de_envio2);
                    console.log(carrito_de_envio3);
                        console.log('---------------',inventario,'------------------')