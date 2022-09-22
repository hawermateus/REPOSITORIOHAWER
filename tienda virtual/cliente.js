class cliente {
    nombre_cliente 
        tel
            direccion 
                id_usuario
                    identificacion_de_producto
                        id_envio
    constructor(nombre_cliente,tel,direccion,id_usuario,identificacion_de_producto,id_envio) {
            this.nombre_cliente = nombre_cliente;
                this.tel = tel;
                    this.direccion = direccion;
                        this.id_usuario = id_usuario;
                            this.identificacion_de_producto = identificacion_de_producto;
                                this.id_envio = id_envio;
    }
            get tel() {
                return this.tel;
                }
            static setid(tel) {
                this.tel =this.tel;
                }
                    static setemail(direccion) {
                        this.direccion = this.direccion;
                        }                                 
}
module.exports=cliente
    const cliente1 = new cliente ('alejandra','3202027938','calle22 1B-10 este','123','56784','excelente','2534');
        const cliente2 = new cliente ('paula','3022089904','cra54 1A-10 sur','456','93745','excelente','2543');
            const cliente3 = new cliente ('sofia','300360940','calle 25 D oeste','789','123123','excelente','2524');
                console.log(cliente1);
                    console.log(cliente2);
                        console.log(cliente3);