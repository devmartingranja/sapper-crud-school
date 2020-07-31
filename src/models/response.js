export class Response {

    constructor(estado = true, datos = null, msg = '') {
        this.estado = estado
        this.datos = datos
        this.msg = msg        
    }

}