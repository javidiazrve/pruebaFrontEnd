import { Injectable } from '@angular/core';
import { CreditoService } from './credito.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private creditoService: CreditoService) { }

  getUsuarios(){

    return new Promise((resolve, rejected)=> {

      this.creditoService.getCreditos().subscribe(res => {
        
        let usuarios = [];
        
        res.forEach((credito:any) => {
          const creditoValue = credito.payload.doc.data()
          
          const index = usuarios.findIndex(usuario => usuario.cedula === creditoValue.cedula)
          
          if(index >=0){
            usuarios[index].creditos.push(creditoValue);
          }else{
            usuarios.push({
              cedula: creditoValue.cedula,
              nombre: creditoValue.nombre,
              correo: creditoValue.correo,
              creditos: [creditoValue]
            })
          }
          
        })
        
        setTimeout(()=>{
          resolve(usuarios);
        },1000)
        
      })
      
    })
  }
}
