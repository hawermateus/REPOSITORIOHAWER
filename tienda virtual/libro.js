const pagina_del_libro = require("./pagina_del_libro");

class libro extends pagina_del_libro{
    portada
        contraportada
            titulo
                biografia
                    codigo    
    constructor(portada,contraportada,titulo,biografia,codigo) {  
        this.portada = portada;
            this.contraportada = contraportada;
                this.titulo = titulo;
                    this.biografia = biografia;
                    this.codigo = pagina_del_libro.codigo; 
    }
    get portada() {
        return this.portada;
        }
            get contraportada() {
                return this.contraportada;
                }
                    get titulo() {
                        return this.titulo;
                        }
                            get biografia() {
                                return this.biografia;
                                }
    static setportada(portada) {
        this.portada = this.portada;
        }
            static setcontraportada(contraportada) {
                this.contraportada = this.contraportada;
                }
                    static settitulo(titulo) {
                        this.titulo = this.titulo;
                        }
                            static setbiografia(biografia){
                                this.biografia = this.biografia;
                                }
}
module.exports=libro
const libro1 = new libro('texto libro','texto libro','la vuelta al mundo en 80 dias','texto libro','93274937');
    const libro2 = new libro('texto libro','texto libro','moby dick','texto libro','34578485');
        const libro3 = new libro('texto libro','texto libro','proceso a un angel','texto libro','77832547');
            console.log(libro1);
                console.log(libro2);
                    console.log(libro3);
                    