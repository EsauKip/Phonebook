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
    { firstName: 'Jose', lastName: 'muliro', mobile: '89976544', photo: '', whatsapp:true, popular: true },
    { firstName: 'Barack', lastName: 'Kim', mobile: '243987654', photo: '',whatsapp:true, popular: false },
    { firstName: 'Noel', lastName: 'Desh', mobile: '9959300200', photo: '',whatsapp:false, popular: true },
    { firstName: 'ayuen', lastName: 'kiprop', mobile: '25400786655', photo: '',whatsapp:true, popular: false }
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
