import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step-five-confim',
  templateUrl: './step-five-confim.component.html',
  styleUrls: ['./step-five-confim.component.scss']
})
export class StepFiveConfimComponent implements OnInit {
loading = true;

ngOnInit() : void{
  setTimeout(()=> {this.loading = false}, 3000)
}
}
