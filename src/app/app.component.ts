import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'AngBi2';
  xSum : number = 0
  mock_tbl_1 = [
    {
      shareholders:6747,peoples:1234,legal_person:24,normal_people:3459,total_course:59
    }
  ]
  mock_tbl_2 = [
    {
      activity_name:"Thaitrade.com",attendee:305,
    },
    {
      activity_name:"activiOnline Business Matching",attendee:23
    },
    {
      activity_name:"การแสดงสินค้านานาชาติในประเทศ",attendee:100
    },
    {
      activity_name:"งานแสดงสินค้าในต่างประเทศ",attendee:28
    },
    {
      activity_name:"SMEsPro-Active",attendee:9
    },
  ]

  mock_tbl_5 = [
    {
      countries:"Thailand",attendee:999,
    },
    {
      countries:"The United States of America",attendee:999
    },
    {
      countries:"China",attendee:777
    },
    {
      countries:"Japan",attendee:777
    },
    {
      countries:"Japan",attendee:777
    },
  ]
  mock_tbl_6 = [
    {
      countries:"Thailand",values:123,
    },
    {
      countries:"The United States of America",values:120
    },
    {
      countries:"China",values:119
    },
    {
      countries:"Japan",values:118
    },
    {
      countries:"Korea",values:117
    },
  ]
  mock_tbl_7= [
    {
      amounts:139,percentage:"3.46%" ,provinces:"เชียงราย" ,course_name:"สตาร์ทอัพเบื้องต้น"
    },
    {
      amounts:356.8,percentage:"86%" ,provinces:"นครราขสีมา" ,course_name:"คติเชิงออกแบบ"
    },
    {
      amounts:30,percentage:"0.7%" ,provinces:"ราชบุรี" ,course_name:"ธุรกิความงามระหว่างประเทศ"
    },
    {
      amounts:23,percentage:"0.57%" ,provinces:"พระนครศรีอยุธยา" ,course_name:"ภาษาจีนระหว่างประเทศ"
    },
    {
      amounts:1592,percentage:"39%" ,provinces:"กรุงเทพและปริมณฑล" ,course_name:"ออกแบบกราฟฟิคความงามภายในประเทศ"
    },
    {
      amounts:77,percentage:"1.92%" ,provinces:"ชลบุรี" ,course_name:"ออกแบบกราฟฟิคเพื่อการค้ายุคใหม่"
    },
    {
      amounts:117,percentage:"2.95%" ,provinces:"ภาคใต้" ,course_name:"สร้างแบรนด์ในยุคดิจิตอล"
    }
  ]
  mock_tbl_8=[
    {
      country_name:"อเมริกา",users:1,freq:2
    },
    {
      country_name:"ยุโรป",users:1,freq:5
    },
    {
      country_name:"ตะวันออกกลาง",users:1,freq:1
    },
    {
      country_name:"เอเชียใต้",users:1,freq:14
    },
    {
      country_name:"เอเชียตะวันออก",users:18,freq:18
    },
    {
      country_name:"อาเซียน",users:1,freq:93
    },
  ]
  is_selected:any=[]
  resp:any

  constructor(private httpR:HttpClient){}
  ngOnInit(): void
  {
  }
  getSumofCube():number
  {

    for(const [k,v] of Object.entries(this.mock_tbl_6))
    {
      this.xSum = this.xSum+v.values

    }
    return this.xSum/3
  }

}
