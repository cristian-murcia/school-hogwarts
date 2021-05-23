import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() { }

  /**
   * Verify a img and encode to base64
   * @param fileInput
   * @param id
   * @returns
   */
  public async verifyImg(fileInput: any): Promise<String> {
    const sizeMax = 5120; //tamaño en bytes (5mb)
    const uploadImgText = window.document.getElementById('text-image')!;
    let imgEncode: any = '';

    if (fileInput.target.files.length > 0) {
      let nameImg = fileInput.target.files[0].name;
      let extImg = nameImg.slice(
        ((nameImg.lastIndexOf('.') - 1) >>> 0) + 2
      );
      let sizeImg = parseInt(
        String(fileInput.target.files[0].size / sizeMax)
      );

      if (extImg === 'jpg' || extImg === 'png' || extImg === 'jpeg') {
        if (sizeImg > sizeMax) {
          uploadImgText.innerHTML = 'La imagen excede el tamaño permitido';
          uploadImgText.style.color = 'red';
        } else {
          uploadImgText.innerHTML = 'La imagen es correcta';
          uploadImgText.style.color = 'green';

          imgEncode = await this.toBase64Img(fileInput.target.files[0]);
        }
      } else {
        uploadImgText.innerHTML = 'Las extensiones validas son: jpg, jpeg, png';
        uploadImgText.style.color = 'red';
      }
    } else {
      uploadImgText.innerHTML = 'La imagen es requerida';
      uploadImgText.style.color = 'red';
    }

    return imgEncode;
  }

  /**
   * Encode Img to base64
   * @param file
   */
   toBase64Img = (file: any) =>
   new Promise((resolve, reject) => {
     const reader = new FileReader();
     reader.readAsDataURL(file);
     reader.onload = () => resolve(reader.result);
     reader.onerror = (error) => reject(error);
   });


}
