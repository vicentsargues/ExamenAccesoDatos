export interface IProducto {
    Id:number,
    Nombre: string,
    Descripcion: string,
    Precio: number
    Tipo: string,
}
export interface IMotor extends IProducto{
  
    Km: number
    Ano: number,
    TipoC: string,
}
export interface IHogar extends IProducto{

    Mertos: number,
    Habitaciones: number,
    Banos: number,
    Localidad: string,
}
export interface ITecno extends IProducto{


    Estado: string,

}