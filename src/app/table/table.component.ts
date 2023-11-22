import { Component } from '@angular/core';


interface TableItem {
  [key: string]: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
    showTable = false;
    columns = ['Name', 'Place','Branch','College'];
    data: TableItem[] = [
      { 'Name': 'Mayoora', 'Place': 'Goa','Branch': 'CSE','College':'COET' },
      {'Name':'Anusree', 'Place':'Calicut','Branch': 'EEE','College':'COET'},
      { 'Name': 'Anitta', 'Place': 'Kannur','Branch': 'CIVIL','College':'COET' },
      { 'Name': 'Theertha', 'Place': 'Wayanad','Branch': 'EC' ,'College':'COET'},
      { 'Name': 'Nayana', 'Place': 'Kottayam','Branch': 'MECH' ,'College':'COET'},
      { 'Name': 'Keerthana', 'Place': 'Idukki','Branch': 'MCA' ,'College':'COET'},
      { 'Name': 'Athira', 'Place': 'Palakad','Branch': 'MBA' ,'College':'COET'},
      
    ];
    columnStyles: { [key: string]: any } = {};

    toggleTable() {
      this.showTable = !this.showTable;
    }
  
    changeStyle() {

      // Change styles for each column
      this.columns.forEach((column) => {
        this.columnStyles[column] = {
          'font-weight': 'bold',
          'color': 'white',
          'background-color':'slategray',
        };
       
      });
    }
  
    getColumnStyle(column: string): { [key: string]: any } {
      return this.columnStyles[column] || {};
    }
    

}
