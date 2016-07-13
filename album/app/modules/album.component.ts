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

    // Takes values placed in json file that correspond to the images
    constructor(private http:Http) {
       http.get("data/imageList.json")
            .subscribe((data)=> {
                setTimeout(()=> {
                    this.data = data.json();
                }, 1000);
            });
    }

    //takes in a value and compares it to the url to see if there is a value specified there.
    public checkHash(x){
      var url = window.location.href;
      var hashValue = url.substring(url.indexOf('#')+1);

      if (x == hashValue){
        return true;
      }
      return false;
    }
}
