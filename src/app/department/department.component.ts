import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  constructor(private router: Router) { }
  department:any =[
    {id:1,name: "Node js"},
    {id:2,name: "Mongo DB"},
    {id:3,name: "Express Js"},
    {id:4,name: "React Js"},
    {id:5,name: "Angular Js"},
  ]

  ngOnInit(): void {
  }
  onSelect(item:any){
    this.router.navigate(['/department',item.id])
  }

}
