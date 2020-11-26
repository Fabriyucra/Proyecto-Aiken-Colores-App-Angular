import{Component} from '@angular/core'

@Component({
    selector:'mi-componente',
    templateUrl: './mi-componente.component.html'
})
 export class MiComponente {
     public titulo: string;
     public comentario: string;
     public year: number;

     constructor(){
         this.titulo = "Hola mundo,  soy un componente";
         this.comentario="esto es una mierda";
         this.year = 2020;
         console.log("componente ,mi-componente carga");
     }
 }