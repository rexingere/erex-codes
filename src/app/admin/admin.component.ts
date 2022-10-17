import { Component, OnInit } from '@angular/core';
import { Amplify, API, Storage } from 'aws-amplify';
import awsconfig from '../../aws-exports';


Amplify.configure(awsconfig);




@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //alert('hi');
    this.getHello('there');


    Storage.list('hs12/') // for listing ALL files without prefix, pass '' instead
          .then(result => console.log(result))
          .catch(err => console.log(err));

    }


    

  async getHello(str: string) {
    //get(apiName: any, path: any, init: any): Promise<any>;
    //API.get('sampleCloudApi', '/items?q=test');

    const response = await API.get('nodeapi', '/hello?q=test', {});
    console.log('hey');
    console.log(response);

    let image = await Storage.get('hs12/hs12_angle.png', { 
      level: 'public'
    });

    console.log(image);

  }

}
