import { Component, OnInit } from '@angular/core';
import {DataService} from '../../shared/services/data.service';
import {Training} from '../../shared/model/training.model';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
    public tabData: Training[];
    public chartType = 'line';
    public chartDatasets: Array<any> = [
        {data: [65 , 59, 80, 81, 56, 55, 40 , 85, 150 , 33 , 65, 15], label: 'Vélo'},
        {data: [28, 48, 40, 19, 86, 27, 90], label: 'Course à Pieds'}
    ];

    public chartLabels: Array<any> = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

    public chartColors: Array<any> = [
        {
            backgroundColor: 'rgba(220,220,220,0.2)',
            borderColor: 'rgba(220,220,220,1)',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(220,220,220,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(220,220,220,1)'
        },
        {
            backgroundColor: 'rgba(151,187,205,0.2)',
            borderColor: 'rgba(151,187,205,1)',
            borderWidth: 2,
            pointBackgroundColor: 'rgba(151,187,205,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(151,187,205,1)'
        }
    ];

    public chartOptions: any = {
        responsive: true
    };
    public chartClicked(e: any): void { }
    public chartHovered(e: any): void { }
    constructor(private dataService: DataService) {}
    ngOnInit() {
        this.dataService.getAllData().subscribe(data => {
            this.tabData = data;
            console.log(data);
        });
    }


}
