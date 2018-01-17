import { Component } from '@angular/core';
//import { AngularFirestore } from 'angularfire2/firestore';
//import { Observable } from 'rxjs/Observable';

import { ChatService } from './services/chat.service'


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	//title = 'app';
	//public items: Observable<any[]>;
	constructor(public _cs: ChatService/*db: AngularFirestore*/) {
		//this.items = db.collection('chats').valueChanges();
		
	}
	
}
