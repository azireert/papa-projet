import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder , Validators , FormGroup} from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {UserService} from '../../shared/services/user.service';
import {User} from '../../shared/model/user.model';
import {UpdateService} from '../../shared/services/update.service';


@Component({
    selector: 'app-cards',
    templateUrl: './cards.component.html',
    styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
    public tabUser: User[];
    constructor(private data: UserService, public dialog: MatDialog) {}


    ngOnInit() {
        this.data.getUser().subscribe(data => {
            this.tabUser = data;
            console.log(data);
        });
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(DialogComponent, {
            width: '250px',
            data: this.tabUser
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }

    getImc(): Number {
        const w = this.tabUser[0].weight;
        const h = this.tabUser[0].height;
        const imc = Math.round((w / (h * h)) * 10000);
        return imc;
    }
    getAge() {
        const dateNaissance = new Date(this.tabUser[0].age);
        const anneeNaissance = dateNaissance.getFullYear();
        const dateAjd = new Date();
        const anneeAjd = dateAjd.getFullYear();
        return Number(anneeAjd) - Number(anneeNaissance);
    }
}

@Component({
    selector: 'app-dialog',
    templateUrl: './dialog.component.html',
    styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
    name = this.data[0].name;
    username = this.data[0].username;
    age = this.data[0].age;
    height = this.data[0].height;
    weight = this.data[0].weight;
    userForm: FormGroup;

    constructor(
        public dialogRef: MatDialogRef<DialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: User,
        private updateService: UpdateService,
        private fb: FormBuilder) {}

    ngOnInit() {
        this.userForm = this.fb.group({
            name: [this.name, [Validators.required]],
            username: [this.username, [Validators.required]],
            age: [this.age, [Validators.required]],
            height: [this.height, [Validators.required]],
            weight: [this.weight, [Validators.required]]
        });
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    sendUser(form) {
        const formValue = this.userForm.value ;
        const user = new User(
            formValue['name'],
            formValue['username'],
            formValue['weight'],
            formValue['age'],
            formValue['height'],
        );
        console.log(user);
        this.updateService.updateUser(user).subscribe(
            next => {
                console.log(next);
                window.location.reload();
            }, error => {
                console.log(error);
            }
        );
    }

}


