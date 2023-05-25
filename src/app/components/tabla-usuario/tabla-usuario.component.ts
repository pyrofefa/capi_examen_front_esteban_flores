import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-tabla-usuario',
  templateUrl: './tabla-usuario.component.html',
  styleUrls: ['./tabla-usuario.component.scss']
})
export class TablaUsuarioComponent implements OnInit {
  usuarios:any = [];
  constructor(public usuario: UsersService ) { }


  ngOnInit(): void {
    this.getUsuarios()
  }
  getUsuarios(){
    this.usuario.getServicesUsers().then((res:any) =>{
      if(res.status == 'success'){
        this.usuarios = res.data;
      }
      else{
        alert(res.message);
      }
    }).catch(error=>{
      console.log(error)
    })
  }
}
