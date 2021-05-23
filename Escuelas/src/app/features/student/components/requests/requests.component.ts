import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SwalPortalTargets } from '@sweetalert2/ngx-sweetalert2';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

import { GlobalService } from 'src/app/core/services/global.service';
import { StorageService } from 'src/app/core/services/storage.service';
import { IListTable } from 'src/app/shared/models/list-table.interface';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  public submitted: boolean;
  public students: Array<IListTable>;
  public newStudent: FormGroup;
  public swalPortal: SwalPortalTargets;

  constructor(
    public formBuilder: FormBuilder,
    private readonly _globalService: GlobalService,
    private readonly _storageService: StorageService,
    public readonly swalTargets: SwalPortalTargets,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.getAllRequestInTheStorage();
  }

  /**
   * Save a new request
   */
  public async saveRequest(): Promise<void> {

    if (this.newStudent.invalid) {
      return;
    }

    //Guardar solicitud
    this._storageService.saveStudent(this.newStudent.value);

    this.modalService.dismissAll();
    this.newStudent.reset();
    Swal.fire('Notificación', 'La solicitud ha sido guardada', 'success')
  }

  /**
   * Load request in table ag-grid
   */
  public getAllRequestInTheStorage(): void {

    this._storageService.requestStudent.subscribe(result => {
      this.students = result;
    });
    this._storageService.saveStudent();
  }

  /**
   * Encode a image for asign
   * @param fileInput Img upload
   */
  public async encodeImage(fileInput: any) {
    let result = await this._globalService.verifyImg(fileInput);

    if (result && result != '') {
      this.newStudent.controls.Imagen.setValue(result);
    }
  }

  /**
   * Register new student form
   */
  public createForm(): void {

    this.newStudent = this.formBuilder.group({
      Name: ['', [
        Validators.required,
        Validators.maxLength(30),
        Validators.pattern('^[a-zA-Z]+$')
      ]],
      Patronus: ['', [
        Validators.required,
        Validators.maxLength(30),
        Validators.pattern('^[a-zA-Z]+$')
      ]],
      Age: ['', [
        Validators.required,
        Validators.maxLength(30),
        Validators.pattern('^[0-9]+$')
      ]],
      Imagen: ['', Validators.required],
    });
  }

  /***
   * Open the form modal
   */
  public open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
  }

}
