import { Component } from '@angular/core';
import { IConfig , DocumentEditorModule} from '@onlyoffice/document-editor-angular';

@Component({
  selector: 'app-only-office',
  standalone: true,
  imports: [DocumentEditorModule],
  templateUrl: './only-office.component.html',
  styleUrl: './only-office.component.css'
})
export class OnlyOfficeComponent {
   config: IConfig = {
    document: {
      fileType: "docx",
      key: "Khirz6zTPdfd7",
      title: "Example Document Title.docx",
      url: "https://arena-localhost-public.s3.ap-south-1.amazonaws.com/uploads/Inncircles+Non+Disclosure+Agreement_General.docx",
    },
    documentType: "word",
    editorConfig: {
      callbackUrl: "https://example.com/url-to-callback.ashx",
    },
  }
  onDocumentReady = () => {
    console.log("Document is loaded")
  }
  onLoadComponentError = (errorCode: any, errorDescription: any) => {
    switch (errorCode) {
      case -1: // Unknown error loading component
        console.log(errorDescription)
        break
      case -2: // Error load DocsAPI from http://documentserver/
        console.log(errorDescription)
        break
      case -3: // DocsAPI is not defined
        console.log(errorDescription)
        break
    }
  }
}
