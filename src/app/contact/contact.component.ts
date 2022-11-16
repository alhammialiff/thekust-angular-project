// ViewChild allows viewing of child elements in the DOM
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { controlNameBinding } from '@angular/forms/src/directives/reactive_directives/form_control_name';
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

  // Helps to tracks any errors in the form
  formErrors = {
    'firstname': '',
    'lastname': '',
    'telnum': '',
    'email': ''
  };

  validationMessages = {
    'firstname': {
      'required': 'First name is required',
      'minlength': 'First name must be at least 2 characters long',
      'maxlength': 'First name cannot be more than 25 characters long'
    },
    'lastname': {
      'required': 'First name is required',
      'minlength': 'First name must be at least 2 characters long',
      'maxlength': 'First name cannot be more than 25 characters long'
    },
    'telnum': {
      'required': 'Tel. number is required.',
      'pattern': 'Tel. number must contain only numbers.'
    },
    'email': {
      'required': 'Email is required',
      'email': 'Email not in valid format'
    }
  };

  // This enables us to get access to the template form ad the completely reset form
  @ViewChild('fform') feedbackFormDirective;

  constructor(private fb: FormBuilder) {
    // Instantiate creation of form
    this.createForm();
  }

  ngOnInit() {
  }

  // Create form 
  createForm() {

    // Create form with specified structure
    this.feedbackForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      lastname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      telnum: [0, [Validators.required, Validators.pattern]],
      email: ['', [Validators.required, Validators.email]],
      agree: [false, Validators.required],
      contacttype: ['None', Validators.required],
      message: ['', Validators.required]
    });

    this.feedbackForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    // Reset validation messages
    this.onValueChanged();

  }

  // ? in parameter: '?' means parameter is optional
  onValueChanged(data?: any) {
    console.log("this.feedbackForm:", this.feedbackForm);

    if (!this.feedbackForm) {
      return;
    }

    const form = this.feedbackForm;

    // Populate formError keys-value pairs if a particular form field is invalid
    for (const field in this.formErrors) {

      // If formErrors object has values..
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error
        this.formErrors[field] = '';

        const control = form.get(field);
        console.log("control,", control);

        // If form fields are invalid and dirty and is not null,
        // extract error values and add into this.formError[field] key-value pair
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          console.log(control.errors);
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }

    }

  }

  onSubmit() {
    // Because it so happens that we created the feedbackForm structure 
    // identical to the datatype structure, We are able to map the 
    // this.feedback var with the feedbackForm.value like so (no frills)
    this.feedback = this.feedbackForm.value;
    console.log(this.feedback);
    this.feedbackForm.reset({
      firstname: '',
      lastname: '',
      telnum: 0,
      email: '',
      agree: false,
      contacttype: 'None',
      message: ''
    });

    // This is to ensure that we have completely reset our form
    this.feedbackFormDirective.resetForm()
  }

}
