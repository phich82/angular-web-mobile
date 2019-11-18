import { Routes, GuardsCheckEnd, NavigationEnd, NavigationStart } from '@angular/router';

export const componentDeclarations: any[] = [
];

export const providerDeclarations: any[] = [
];

export const routes: Routes = [
];

// Ignore a specific http requests
export const apisIgnored = [
  //'https://reqres.in',
];

export const configNgProgressModule = {
  // direction: "'ltr+'",	// Progress bar direction (ltr+, ltr-, rtl+, rtl-) [default: ltr+]
  // trickleSpeed: 300,	// Progress trickling speed in ms [default: 300]
  // //trickleFunc: () => {}, //Function	A function that returns the trickling amount
  // debounceTime: 0, //	Debounce time before starting the progress bar in ms [default: 0]
  // speed: 200,	// Transition speed in ms [default: 200]
  // min: 20,	// Progress initial starting value [default: 20]
  // max: 100,	// Progress maximum value[default: 100]
  // ease: "'linear'",	// Progress ease function [default: linear]
  // spinner: true,	// Display spinner [default: true]
  // spinnerPosition: 'right',	// Spinner position. (right, left) [default: right]
  // color: '#1B95E0',	// Progress bar color [default: #1B95E0]
  // thick: true,	// A thicker size of the progress bar [default: true]
  // fixed: true,	// Progress bar fixed position [default: true]
  // meteor: true	// Meteor style [default: true]
};

export const configNgProgressRouterModule = {
  // id:	'root',	//Progress bar ID [default: root]
  // delay:	0,	// The delay before completing the progress bar in ms [default: 0]
  // startEvents: [NavigationStart],	// Router events that starts the progressbar [default: NavigationStart]
  // completeEvents: [NavigationEnd]	// Router events that completes the progressbar [NavigationEnd, NavigationCancel, NavigationError]
};
