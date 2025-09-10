import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserServiceService } from '../../../services/user-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})
export class UserFormComponent {

  user:any={name:'',email:''};
  isEditing=false;
  userId:number|null = null;

  constructor(
    private userService: UserServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit():void{
    this.route.paramMap.subscribe(params=>{
      const idParam = params.get('id');
      if (idParam) {
        this.userId = +idParam;
        this.isEditing = true;
        this.userService.getUserById(this.userId).subscribe(user => {
          this.user = user;
        });
      }
    });
  }
 onsubmit(){
    if(this.isEditing && this.userId !== null){
      this.userService.updateUser(this.userId,this.user).subscribe(() => {
        this.router.navigate(['/users']);
      });
    }
    else{
      this.userService.createUser(this.user).subscribe(() => {
        this.router.navigate(['/users']);
      });
    }
  }
  onCancel(){
    this.router.navigate(['/users']);
  } 
}