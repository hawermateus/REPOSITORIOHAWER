console.log('---------------',inventario,'------------------')
carrito_de_envio = new carrito_de_envio(usuario1,informacion_de_envio1)
carrito_de_envio.agregarproducto(libro1,inventario1)
carrito_de_envio.agregarproducto(libro2,informacion_de_envio2)
carrito_de_envio.agregarproducto(libro2,informacion_de_envio2) 
carrito_de_envio.agregarproducto(libro3,informacion_de_envio3)

carritocliente.mostrarlista
                    console.log('-------- aca se agrega los libros ----------------')
                    
                    carrito_de_envio.quitarproducto(libro1,detalles_del_pedido1,informacion_de_envio1)
                    carrito_de_envio.mostrarlista
                    console.log('-------- aqui se quita algunos libros  ----------------')
                    console.log(carrito_de_envio)
                    
                    pedido1= new Pedido(carrito_de_envio.confirmacion(),usuario1)
                    console.log(pedido1)
                    pedido1.generarfactura()
                    console.log(pedido1._informacion_de_envio)
                    
                    comentarios = new libro(libro1)
                    comentarios.añadircomentario('llego en en buen estado el libro')
                    comentarios.añadircomentario('no llego el libro en buenas condiciones')
                    console.log(comentarios)
                    comentarios.mostrarcomentarios()
                    
