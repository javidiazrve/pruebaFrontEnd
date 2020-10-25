import { Injectable } from '@angular/core';
import { Credito, Usuario } from '../interfaces';
import { AngularFirestore } from '@angular/fire/firestore';
import { Collection } from '@angular-devkit/schematics';
import { resolve } from 'dns';

@Injectable({
  providedIn: 'root'
})
export class CreditoService {

  constructor(private firestore: AngularFirestore) { }

  validarCredito(credito: Credito) {

    return new Promise((resolve, rejected) => {


      this.firestore.collection('creditos', ref => ref.where('cedula', '==', credito.cedula)).snapshotChanges().subscribe((res: any) => {

        if (res.length === 0) {
          resolve({
            ok: true,
            estadoCredito: this.setEstadoSolicitud()
          })
        } else {
          const credito: Credito = res[0].payload.doc.data();

          if (!credito.estadoDeCredito) {
            resolve({
              ok: false,
              message: 'El credito del usuario ha sido rechazado'
            })
          }

          if (!credito.pagoCredito) {
            resolve({
              ok: false,
              message: 'El usuario tiene un pago pendiente'
            })
          }

          resolve({
            ok: true,
            estadoCredito: true
          })

        }

      })

    })
  }

  nuevoCredito(credito) {
    return this.firestore.collection('creditos').add(credito)
  }

  getCreditosPorUsuario() {

    let usuarios: Usuario[] = [];

    return new Promise((resolve, rejected) => {

      this.firestore.collection('creditos').snapshotChanges().subscribe(res => {
        res.forEach((res: any) => {
          const credito: Credito = {
            id: res.payload.doc.id,
            ...res.payload.doc.data()
          };

          const index = usuarios.findIndex(usuario => usuario.cedula === credito.cedula);
          if (index >= 0) {
            usuarios[index].creditos.push(credito);
          } else {
            usuarios.push({
              nombre: credito.nombre,
              correo: credito.correo,
              cedula: credito.cedula,
              creditos: [credito]
            })
          }
        })

        setTimeout(() => {
          resolve(usuarios)
        }, 1000)
      })

    })

  }

  getCreditosAprobados() {

    return this.firestore.collection('creditos',ref => ref.where('estadoDeCredito', '==', true).where('pagoCredito','==',false)).snapshotChanges();

  }

  getCreditosRechazados() {

    return this.firestore.collection('creditos',ref => ref.where('estadoDeCredito', '==', false)).snapshotChanges();

  }

  getCreditos() {
    
    return this.firestore.collection('creditos').snapshotChanges();

  }

  setEstadoSolicitud() {
    const numeroAzar = Math.round(Math.random() * 9)

    if (numeroAzar <= 4) {
      return true;
    } else {
      return false;
    }
  }

}
