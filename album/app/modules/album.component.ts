import {Component} from '@angular/core';
import {DatePipe} from "@angular/common";
import {HTTP_PROVIDERS, Http} from "@angular/http";
import {DataTableDirectives} from 'angular2-datatable/datatable';
import * as _ from 'lodash';


@Component({
    selector: 'album',
    templateUrl: 'app/modules/album.component.html',
    providers: [HTTP_PROVIDERS],
    directives: [DataTableDirectives],
    pipes: [DatePipe]
})
export class AlbumComponent {

    private data;

    constructor(private http:Http) {
       var url = window.location.href;
       var hashValue = url.substring(url.indexOf('#')+1);
       console.error(hashValue);

       switch(hashValue) {
            case "animals":
                http.get("data/imageList.json")
                 .subscribe((data)=> {
                     setTimeout(()=> {
                         this.data = data.json().animals;
                     }, 1000);
                 });
                break;
            case "weddings":
                http.get("data/imageList.json")
                 .subscribe((data)=> {
                     setTimeout(()=> {
                         this.data = data.json().weddings;
                     }, 1000);
                 });
                break;
            default:
                console.error("Album not specified.");
      }
    }
}
