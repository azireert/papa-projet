import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder , Validators , FormGroup} from '@angular/forms';
import {TrainingService} from '../../shared/services/training.service';
import {Training} from '../../shared/model/training.model';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  trainingForm: FormGroup;
  constructor(private fb: FormBuilder, private trainingService: TrainingService) { }

  ngOnInit() {
      this.trainingForm = this.fb.group({
          kilometre: ['', [Validators.required]],
          dateSortie: ['', [Validators.required]],
          duree: ['', [Validators.required]],
          forme: ['', [Validators.required]],
          isVelo: ['']
      });
  }
  sendTraining(form) {
    console.log(this.trainingForm.value);
    const formValue = this.trainingForm.value ;
    const training = new Training(
        formValue['kilometre'],
        formValue['isVelo'],
        formValue['dateSortie'],
        formValue['duree'],
        formValue['forme'],
    );
    this.trainingService.postTraining(training).subscribe(
        next => {
            console.log(next);
            window.location.reload();
        }, error => {
            console.log(error);
        }
    );
  }

}
