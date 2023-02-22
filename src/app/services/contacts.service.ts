import { Injectable } from '@angular/core';

export interface IContact {
  firstName: string;
  lastName: string;
  mobile: string;
  photo: string;
  popular: boolean;
  whatsapp:boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  private contacts: IContact[] = [
    { firstName: 'Mahesh', lastName: 'Chejarla', mobile: '9959100100', photo: '', whatsapp:true, popular: true },
    { firstName: 'Pramod', lastName: 'Kamatham', mobile: '9959200200', photo: '',whatsapp:true, popular: false },
    { firstName: 'Pream', lastName: 'Desh', mobile: '9959300200', photo: '',whatsapp:false, popular: true },
    { firstName: 'Mahrsh', lastName: 'Heshe', mobile: '9959400400', photo: '',whatsapp:true, popular: false }
  ];

  getContacts(): IContact[] {
    return this.contacts;
  }

  getPopularContacts(): IContact[] {
    return this.contacts.filter((contact: IContact) => {
      return (contact.popular === true);
    });
  }

  addContactInfo(data){
    this.contacts.push(data)
    alert(JSON.stringify(data))
  }

}
