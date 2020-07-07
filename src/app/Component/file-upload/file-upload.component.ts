import { ToastrService } from 'ngx-toastr';
import { CrudService } from './../../crud.service';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  fileData: File = null;
  previewUrl:any = null;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;

  constructor(private http: HttpClient, private service:CrudService,private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  fileProgress(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];
    this.preview();
}

preview() {
  // Show preview 
  var mimeType = this.fileData.type;
  if (mimeType.match(/image\/*/) == null) {
    return;
  }

  var reader = new FileReader();      
  reader.readAsDataURL(this.fileData); 
  reader.onload = (_event) => { 
    this.previewUrl = reader.result; 
  }
}
 
onSubmit() {
  const formData = new FormData();
  formData.append('files', this.fileData);
   
  this.fileUploadProgress = '0%';

  this.http.post('http://localhost:51152/api/FileUplode', formData, {
    reportProgress: true,
    observe: 'events'   
  })
  .subscribe(events => {
    if(events.type === HttpEventType.UploadProgress) {
      this.fileUploadProgress = Math.round(events.loaded / events.total * 100) + '%';
      console.log(this.fileUploadProgress);
    } else if(events.type === HttpEventType.Response) {
      this.fileUploadProgress = '';
      console.log(events.body);   
      this.toastr.success('File Uploaded Successfully!!');       
      // alert('SUCCESS !!');      
    }       
  }) 
}

}
