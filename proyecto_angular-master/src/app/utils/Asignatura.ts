
export interface Asignatura{

    nombre:string;
    profesor: string;
    conocimientos:Conocimientos[];
    ciclo:string,
    curso:number


}

export interface Conocimientos{

    nombre:string,
    imagen:string
}