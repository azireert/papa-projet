import { Component, OnInit} from '@angular/core';
import {CalendarEvent, CalendarView} from 'angular-calendar';
import { Training} from '../../shared/model/training.model';
import { DataService} from '../../shared/services/data.service';
import {
    isSameDay,
    isSameMonth,
} from 'date-fns';
const colors: any = {
    red: {
        primary: '#ad2121',
        secondary: '#FAE3E3'
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF'
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
    }
};

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  public tabData: Training[];
  view: CalendarView = CalendarView.Month;
  viewDate: Date = new Date();
    events: CalendarEvent[] = [
        {
            title: 'Click me',
            color: colors.yellow,
            start: new Date('2018-10-11')
        },
        {
            title: 'Or click me',
            color: colors.blue,
            start: new Date()
        }
    ];
    activeDayIsOpen = true;
  constructor(private dataService: DataService) { }

    eventClicked({ event }: { event: CalendarEvent }): void {
        console.log('Event clicked', event);
    }

    dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
        if (isSameMonth(date, this.viewDate)) {
            this.viewDate = date;
            if (
                (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0
            ) {
                this.activeDayIsOpen = false;
            } else {
                this.activeDayIsOpen = true;
            }
        }
    }
  ngOnInit() {
      this.getData();
  }
  getData(): void {
      this.dataService.getAllData().subscribe(data => {
          this.tabData = data;
      });
}

}
