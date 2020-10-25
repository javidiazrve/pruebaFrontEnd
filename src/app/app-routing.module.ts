import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { SolicitudesComponent } from './Pages/solicitudes/solicitudes.component';
import { UsuariosComponent } from './Pages/usuarios/usuarios.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'solicitudes',
    component: SolicitudesComponent,
  },
  {
    path: 'usuarios',
    component: UsuariosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
