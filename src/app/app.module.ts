import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsuariosComponent } from './Pages/usuarios/usuarios.component';
import { SolicitudesComponent } from './Pages/solicitudes/solicitudes.component';
import { InputMontoSolicitudComponent } from './Components/input-monto-solicitud/input-monto-solicitud.component';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment.prod';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DateAdapter, MatNativeDateModule } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TablaCreditoComponent } from './Components/tabla-credito/tabla-credito.component';
import { EstadoCreditoPipe } from './Pipes/estado-credito.pipe';
import { EstadoPagoPipe } from './Pipes/estado-pago.pipe';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsuariosComponent,
    SolicitudesComponent,
    InputMontoSolicitudComponent,
    TablaCreditoComponent,
    EstadoCreditoPipe,
    EstadoPagoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    FontAwesomeModule,
    MatListModule,
    MatSnackBarModule
  ],
  providers: [InputMontoSolicitudComponent, EstadoCreditoPipe, EstadoPagoPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
