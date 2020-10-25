import { Component, OnInit } from '@angular/core';
import { Credito, Usuario } from 'app/interfaces';
import { UsuarioService } from '../../Services/usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  usuarios: Usuario[] = [];
  creditos: Credito[];
  creditoModal: Credito;
  mostrandoCreditos: boolean = false;
  cargando:boolean = true

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.getUsuarios().then((res:any) => {
      this.usuarios = res;
      this.cargando = false;
    })
  }

  mostrarCreditos(usuario){
    this.mostrandoCreditos = false;
    setTimeout(()=>{
      this.creditos = usuario.creditos;
      this.mostrandoCreditos = true;
    },50)
  }

  mostrarCredito(e){
    this.creditoModal = e;
  }

  cerrarCreditos(){
    this.creditos = null;
    this.mostrandoCreditos = false;
  }
}
