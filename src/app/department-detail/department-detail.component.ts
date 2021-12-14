import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Route,Router} from '@angular/router'

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {

  public deptId:any;
  constructor(private activateroute: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    // let id =this.activateroute.snapshot.paramMap.get('id');
    // this.deptId=id;
    this.activateroute.paramMap.subscribe((params:any)=>{
      let id =parseInt(params.get('id'));
      this.deptId =id;
    })
  }
  onPrevious(){
    let previousId =parseInt(this.deptId) -1;
    this.router.navigate(['/department',previousId])
  }
  onNext(){
    let nextId =parseInt(this.deptId) + 1;
    this.router.navigate(['/department',nextId])
  }

}
