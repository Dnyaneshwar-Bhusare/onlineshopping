import { Component, OnInit } from '@angular/core';
import{HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
deptId:String;

  constructor(private http: HttpClient) { }
 //name:any;
  ngOnInit() {
  //  this.getDeptList();
  }
//   getDeptList(){
        
//     var url="http://localhost:8686/Spring130_REST/deptList"
//     this.http.get(url).subscribe(data=>{
//         for(let i of data[0]) {
//             this.deptId=i.deptNm;
//             alert(i.deptNm);

//         }
//     })

// }



}
