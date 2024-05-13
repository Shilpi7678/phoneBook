
// q=1Create a simple phone book application functionality using JavaScript objects. Your application should
//  allow users to add new contacts, search for contacts by name, update existing contacts, and delete contacts.
// Implement the following functionalities:
// a) Add a new contact:  Allow users to add a new contact by providing their name, phone number, 
// and email address.
// b) Search for a contact: Allow users to search for a contact by entering their name. If the contact
//  is found, display their details (name, phone number, email). If not found, display a message 
// indicating that the contact does not exist.
// c) Update a contact: Allow users to update the phone number and email address of an existing
//  contact by providing their name and the updated information.
// d) Delete a contact: Allow users to delete a contact by entering their name.*/




let phoneBook={
    contacts:[],
    addcontact: function(name, phoneNumber, email){
        let user={
            name:name,
            phoneNumber:phoneNumber,
            email:email
        }
        this.contacts.push(user);
        console.log(`${name} add new contact`);
    },
    searchContact: function(name){
        let found=this.contacts.find(contact=>contact.name===name);
        if (found){
            console.log(`contact: ${found.name}, phone: ${found.phoneNumber}, email: ${found.email}`)
        }else{
            console.log(`contact: ${name} not found`);
        }
    },
    updateContact: function(name,phoneNumber,email){
        let contact=this.contacts.find(contact=> contact.name===name);
        if (contact){
            contact.phoneNumber=phoneNumber;
            contact.email=email;
            console.log(`contact "${name}" update`);

        }else{
            console.log(`contact "${name}" not found`);
        }
    },
    deleteContact: function(name){
        let index= this.contacts.findIndex(contact => contact.name=== name);
        if (index !== -1){
            this.contacts.splice(index,1);
            console.log(`Contact "${name}" deleted.`);

        }else{
            console.log(`Contact ${name} not found`);
        }
    }    
}
phoneBook.addcontact("sandiya", "1234567890", "sandiya@navgurukul.com");


phoneBook.addcontact("Ram", "9876543210", "Ram@navgurukul.com");

phoneBook.searchContact("sandiya");
phoneBook.searchContact("Arti");

phoneBook.updateContact("Ram", "5555555555", "mohan@navgurukul.org");
phoneBook.searchContact("Ram");

phoneBook.deleteContact("Ram");
phoneBook.searchContact("Ram"); 

