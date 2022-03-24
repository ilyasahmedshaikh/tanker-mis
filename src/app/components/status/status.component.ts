import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {

  selectedTab: string = 'tab1';

  available: any = [];
  progress: any = [];
  completed: any = [];
  

  constructor() { }

  ngOnInit(): void {
    this.available = [
      {
        id: 1,
        vehicle: 'SDR-3812',
        petrol: '8000',
        diesel: '16000',
        usedBy: 'Used By : Assadullah',
        date: '18/08/2022',
        time: '01:00 To 11:30 PM',
      },
      {
        id: 2,
        vehicle: 'BGK-2567',
        petrol: '8000',
        diesel: '16000',
        usedBy: 'Used By : Assadullah',
        date: '23/02/2022',
        time: '09:00 To 10:30 PM',
      },
      {
        id: 3,
        vehicle: 'DSQ-5991',
        petrol: '8000',
        diesel: '16000',
        usedBy: 'Used By : Farhan',
        date: '18/08/2022',
        time: '01:00 To 11:30 PM',
      },
      {
        id: 4,
        vehicle: 'ZWE-9956',
        petrol: '8000',
        diesel: '16000',
        usedBy: 'Used By : Salahudin',
        date: '08/03/2022',
        time: '02:30 To 05:00 PM',
      },
      {
        id: 5,
        vehicle: 'BAJ-2215',
        petrol: '8000',
        diesel: '16000',
        usedBy: 'Used By : Assadullah',
        date: '13/09/2022',
        time: '03:00 To 06:30 PM',
      },
      {
        id: 6,
        vehicle: 'ZER-8780',
        petrol: '8000',
        diesel: '16000',
        usedBy: 'Used By : Salahudin',
        date: '20/05/2022',
        time: '05:00 To 12:30 PM',
      }
    ]

    this.progress = [
      {
        id: 1,
        vehicle: 'DSQ-5991',
        petrol: '8000',
        diesel: '0',
        usedBy: 'Used By : Farhan',
        date: '18/08/2022',
        time: '01:00 To 11:30 PM',
      },
      {
        id: 2,
        vehicle: 'ZWE-9956',
        petrol: '0',
        diesel: '16000',
        usedBy: 'Used By : Salahudin',
        date: '08/03/2022',
        time: '02:30 To 05:00 PM',
      },
      {
        id: 3,
        vehicle: 'BAJ-2215',
        petrol: '8000',
        diesel: '16000',
        usedBy: 'Used By : Assadullah',
        date: '13/09/2022',
        time: '03:00 To 06:30 PM',
      },
      {
        id: 4,
        vehicle: 'ZER-8780',
        petrol: '8000',
        diesel: '0',
        usedBy: 'Used By : Salahudin',
        date: '20/05/2022',
        time: '05:00 To 12:30 PM',
      }
    ]

    this.completed = [
      {
        id: 1,
        vehicle: 'BGK-2567',
        petrol: '0',
        diesel: '0',
        usedBy: 'Used By : Assadullah, Farhan',
        date: '23/02/2022',
        time: '09:00 To 10:30 PM',
      },
      {
        id: 2,
        vehicle: 'DSQ-5991',
        petrol: '0',
        diesel: '0',
        usedBy: 'Used By : Farhan, Salahudin',
        date: '18/08/2022',
        time: '01:00 To 11:30 PM',
      },
      {
        id: 3,
        vehicle: 'ZWE-9956',
        petrol: '0',
        diesel: '0',
        usedBy: 'Used By : Salahudin, Assadullah, Farhan',
        date: '08/03/2022',
        time: '02:30 To 05:00 PM',
      }
    ]
  }

  onChangeTab(tabName: any) {
    this.selectedTab = tabName;
  }

}
