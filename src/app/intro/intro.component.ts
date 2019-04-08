import { Component, OnInit } from '@angular/core';
import { FormsModule} from '@angular/forms';


@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})


export class IntroComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    public show:boolean= false;
    public email:string= "";
    public message:string= "";
    public confirm:boolean= false;

    public contactenos(){
        this.show=true;
        this.confirm=false;
    }

    public onSubmit(f:any){
        this.show=false;
        this.confirm=true;

    }
}
