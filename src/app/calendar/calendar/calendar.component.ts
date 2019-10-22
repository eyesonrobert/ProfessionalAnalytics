import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';
import * as moment from 'moment';
import 'fullcalendar';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  @Input()
  set configurations(config: any) {
    if (config) {
      this.defaultConfigurations = config;
    }
  }
  @Input() eventData: any;

  defaultConfigurations: any;
  constructor() {

    this.eventData = [
      {
        title: 'client1',
        start: moment(),
      },
      {
        title: 'client2',
        start: moment(new Date()).add(2, 'days'),
        // end: moment().add(2, 'days'),

      },
    ];

    this.defaultConfigurations = {
      editable: true,
      eventLimit: true,
      titleFormat: 'MMM D YYYY',
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      buttonText: {
        today: 'Today',
        month: 'Month',
        week: 'Week',
        day: 'Day'
      },
      views: {
        agenda: {
          eventLimit: 2
        }
      },
      allDaySlot: false,
      slotDuration: moment.duration('00:15:00'),
      slotLabelInterval: moment.duration('01:00:00'),
      firstDay: 1,
      selectable: true,
      selectHelper: true,
      events: this.eventData,
    };
  }
  ngOnInit() {
    $('#full-calendar').fullCalendar(
      this.defaultConfigurations
    );

  }
}
