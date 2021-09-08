import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-moviee',
  templateUrl: './moviee.component.html',
  styleUrls: ['./moviee.component.css']
})
export class MovieeComponent implements OnInit {
  movForm: FormGroup;
  showModal:boolean = false;
  editMode:boolean = false;

  constructor(
    private fb: FormBuilder
    ) { }

  ngOnInit(): void {
    this.movForm = this.fb.group({
      _id: [''],
      movie_name: [Validators.required],
      release_date: [ Validators.required],
      description: []
    })
  }

  onMovSubmit(){
    if(this.movForm.valid){
      console.log(this.movForm.value);
      this.onReset();
      this.onCloseModal();

    }else{
      let key = Object.keys(this.movForm.controls);
      key.filter(data =>{
        let control = this.movForm.controls[data];
        if(control.errors !=null){
          control.markAsTouched();
        }
      })
    }
  }

  onEditMovie(){
    this.editMode = true;
    this.showModal = true;;
  }

  onDeleteMovie(id: string){
    if(confirm('Do you want to delete this movie?')){
      
    }
  }

  onAddMovie(){
    this.showModal = true;
  }

  onCloseModal(){
    this.showModal = false;
    this.onReset();
    this.editMode = false;
  }

  onReset(){
    this.movForm.reset({
      movie_name: '',
      release_date: '',
      description: ''
    });
  }


}
