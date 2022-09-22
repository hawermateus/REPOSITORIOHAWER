class pagina_del_libro {
    nombre_tienda
        nombre_cliente
            tipo_de_libro
                codigo
                    tel
    constructor(nombre_tienda,nombre_cliente,tipo_de_libro,codigo,tel) {
            this.nombre_tienda = nombre_tienda; 
                this.nombre_cliente = nombre_cliente;
                this.tipo_de_libro = tipo_de_libro;
                    this.codigo = codigo;
                        this.tel = tel;
    }
    get nombre_tienda() {
        return this.nombre_tienda;
        }
            get nombre_cliente() {
                return this.nombre_cliente;
            }
                get tel() {
                    return this.tel;
                        }
    static setnombre_tienda(nombre_tienda) {
        this.nombre_tienda = this.nombre_tienda;
        }
            static setnombre_cliente(nombre_cliente) {
                this.nombre_cliente = this.nombre_cliente;
                }
                    static settel(tel) {
                        this.tel = this.tel;
                        }   
}

module.exports=pagina_del_libro
const pagina_del_libro1 = new pagina_del_libro('librosluna','alejandra','literatura','93274937','3202022339');
    const pagina_del_libro2 = new pagina_del_libro('librosluna','paula','historico','34578485','30037452696');
        const pagina_del_libro3 = new pagina_del_libro('librosluna','sofia','ciencia','77832547','32226758345');
            console.log(pagina_del_libro1);
                console.log(pagina_del_libro2);
                    console.log(pagina_del_libro3);