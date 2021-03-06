import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { TrainingService} from '../../shared/services/training.service';
import {Training} from '../../shared/model/training.model';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
    public dataSource;
    displayedColumns: string[] = ['kilometre', 'dateSortie', 'duree', 'forme'];
    @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private trainingService: TrainingService) { }

  ngOnInit() {
      this.getData();
  }
    getData(): void {
        this.trainingService.getAllData().subscribe(data => {
           this.dataSource =  new MatTableDataSource<Training>(data);
            this.dataSource.paginator = this.paginator;
        });
    }
}


