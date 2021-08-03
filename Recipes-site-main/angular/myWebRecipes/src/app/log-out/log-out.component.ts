import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';







@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.css']
})
export class LogOutComponent implements OnInit {
 

  constructor(private route:Router) { }

 
  ngOnInit(): void {
   
    Swal.fire({
      title: '?האם הינך מעוניין להתנתק',
      text: 'משתמש שאינו רשום, אינו יכול לצפות בפרטי המתכונים',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancal'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'ההתנקות בוצעה בהצלחה',
          'success',
          
        ),
        localStorage.removeItem("user");
        this.route.navigate(["allRecipes"]);
       
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'בחירה נכונה',
          'שמחים שנשארת איתנו :)',

          
        ),
        this.route.navigate(["allRecipes"]);
      }
    })
}
}