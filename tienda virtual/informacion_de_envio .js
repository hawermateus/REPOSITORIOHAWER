const pedido = require("./pedido");

class informacion_de_envio {
        Codigo_del_producto
            nombre_del_libro
                cantidad
                    costo_unitario
                        subtotal
    constructor(Codigo_del_producto,nombre_del_libro,cantidad,costo_unitario,subtotal) {
            this._Codigo_del_producto = pedido.Codigo_del_producto;
                this._nombre_del_producto = nombre_del_libro;
                    this._cantidad = cantidad;
                        this._costo_unitario = costo_unitario;
                            this._subtotal = subtotal;
    }
    get nombre_del_libro() {
        return this.nombre_del_libro;
        }
            get cantidad() {
                return this.cantidad;
                }
                    get costo_unitario() {
                        return this.costo_unitario;
                        }
                            get subtotal() {
                                return this.subtotal;
                                }
    static setnombre_del_libro(nombre_del_libro) {
        this.nombre_del_libro = this.nombre_del_libro;
        }
            static setcantidad(cantidad) {
                this.cantidad = this.cantidad;
                }
                    static setcosto_unitario(costo_unitario) {
                        this.costo_unitario = this.costo_unitario;
                        }
                            static setsubtotal(subtotal) {
                                this.subtotal = this.subtotal;
                                }
}
module.exports=informacion_de_envio
const informacion_de_envio1 = new informacion_de_envio('328475307548','cronica de una muerte','1','120.0000','115.0000');
    const informacion_de_envio2 = new informacion_de_envio('548475346548','coronel no tiene quien el escriba,cuchilla ','2','160.0000','140.0000');
        const informacion_de_envio3 = new informacion_de_envio('988464507548','maestro ciruela,procesos a un angel,gaviota herida','3','220.0000','190.0000');
            console.log(informacion_de_envio1);
                console.log(informacion_de_envio2);
                    console.log(informacion_de_envio3);