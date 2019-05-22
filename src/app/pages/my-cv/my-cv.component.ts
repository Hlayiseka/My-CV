import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-cv',
  templateUrl: './my-cv.component.html',
  styleUrls: ['./my-cv.component.css']
})
export class MyCvComponent implements OnInit {
  title = 'Hlayiseka Collins Mathebula';
  school = 'High School Education';
  role = 'Mobile Application Developer @CodeTribe2019';
  constructor() { }

  ngOnInit() {
  }

}
