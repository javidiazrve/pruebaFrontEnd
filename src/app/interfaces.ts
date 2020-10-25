export interface Credito {
    id?: string,
    nombre: string,
    correo: string,
    cedula: string,
    valorSolicitado: number,
    fechaAPagar?: Date,
    estadoDeCredito: boolean,
    pagoCredito: boolean
}

export interface Usuario{
    nombre: string,
    correo: string,
    cedula: string,
    creditos: Credito[]
}
