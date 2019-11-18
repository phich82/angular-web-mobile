import { Component, OnInit } from '@angular/core';
// import { EventData } from 'tns-core-modules/data/observable/observable';
// import { ActivityIndicator } from 'tns-core-modules/ui/activity-indicator';
// import { Color } from 'tns-core-modules/color';
// import * as enums from "tns-core-modules/ui/enums";
// import { View } from 'tns-core-modules/ui/core/view';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  isBusy: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  // onBusyChanged(args: EventData) {
  //   let indicator: ActivityIndicator = <ActivityIndicator>args.object;
  //   console.log("indicator.busy changed to: " + indicator.busy);
  // }

  // toggleIndicator() {
  //   console.log('isBusy', this.isBusy);
  //   this.isBusy = !this.isBusy;
  // }

  // animate(layout: View) {
  //   // >> animation-animating-properties-code
  //   layout.animate({
  //       opacity: 0.75,
  //       backgroundColor: new Color("Blue"),
  //       translate: { x: 200, y: 200 },
  //       scale: { x: 2, y: 2 },
  //       rotate: 180,
  //       duration: 3000,
  //       delay: 20,
  //       iterations: 5,
  //       curve: enums.AnimationCurve.easeIn
  //   }).then(() => {
  //       console.log("Animation finished.");
  //   }).catch((e) => {
  //       console.log(e.message);
  //   });
  //   // << animation-animating-properties-code
  // }
}
