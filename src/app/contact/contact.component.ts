import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator } from '@angular/forms';
import { Feedback, ContactType } from '../shared/feedback';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  feedbackForm: FormGroup;
  feedback: Feedback;
  contactType = ContactType;

  constructor(private fb: FormBuilder) { 
    // Instantiate creation of form
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(){

    // Create form with specified structure
    this.feedbackForm = this.fb.group({
      firstname: '',
      lastname: '',
      telnum: 0,
      email: '',
      agree: false,
      contacttype: 'None',
      message: ''
    });

  }

  onSubmit(){
    // Because it so happens that we created the feedbackForm structure identical to the datatype structure,
    // We are able to map the this.feedback var with the feedbackForm.value like so (no frills)
    this.feedback = this.feedbackForm.value;
    console.log(this.feedback);
    this.feedbackForm.reset();
  }

}
