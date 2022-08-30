import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'AngBi2';
  mock_tbl_1 = [
    {
      shareholders:6747,peoples:1234,legal_person:24,normal_people:3459,total_course:59
    }
  ]
  mock_tbl_2 = [
    {
      activity_name:"Thaitrad",attendee:305,
    },
    {
      activity_name:"activiOnline Business Matching",attendee:23
    },
    {
      activity_name:"งานแสดงสินค้าในประเทศ",attendee:100
    },
    {
      activity_name:"งานแสดงสินค้าต่างประเทศ",attendee:28
    },
    {
      activity_name:"SMEs Proactive",attendee:9
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
  is_selected:any=[]
  resp:any
  constructor(private httpR:HttpClient){}
  ngOnInit(): void
  {
  }


}
