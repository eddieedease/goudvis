import {
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  prefix: string = 'asdasda';
  selectedOption: string;
  editorcontent: string;
  someVar : string = 'Eddie';

  selects = [{
    val: "jipjip"
  }, {
    val: "tweej"
  }, {
    val: "oki"
  }, {
    val: "doemaardoen"
  }];

  tiles = [{
    text: 'One',
    cols: 3,
    rows: 1,
    color: 'lightblue'
  }, {
    text: 'Two',
    cols: 1,
    rows: 2,
    color: 'lightgreen'
  }, {
    text: 'Three',
    cols: 1,
    rows: 1,
    color: 'lightpink'
  }, {
    text: 'Four',
    cols: 2,
    rows: 1,
    color: '#DDBDF1'
  }, ];

  folders = [{
    name: 'Photos',
    updated: new Date('1/1/16'),
  }, {
    name: 'Recipes',
    updated: new Date('1/17/16'),
  }, {
    name: 'Work',
    updated: new Date('1/28/16'),
  }];
  notes = [{
    name: 'Vacation Itinerary',
    updated: new Date('2/20/16'),
  }, {
    name: 'Kitchen Remodel',
    updated: new Date('1/18/16'),
  }];

  // function
  showDebug() {
    console.log("Tjakkaaaa");
    this.someVar = 'Tanne';
  }

  // tinymce function
  keyupHandlerFunction(meh) {
    console.log(meh);
    this.editorcontent = meh;
    
  }
}
