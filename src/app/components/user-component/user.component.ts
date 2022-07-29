import { Component, OnInit } from '@angular/core';

interface User{
  id:string,
  name:{
    firstname:string,
    lastname:string
  }
  birthdate:string,
  email:string,
  phone:string,
  address:string
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit  {


  arrayOfUser:any[]=[]
  isShowForm:boolean = false
  errorMassage:boolean = false
  onclickAdd:boolean = false
  per1:Required<User>={
    id: '',
    name: {
      firstname: '',
      lastname: ''
    },
    birthdate: '',
    email: '',
    phone: '',
    address: ''
  }

  // add all Items
  fillUsersArray(){
    this.per1 ={
      id:'1111',
      name:{
        firstname:'Robert',
        lastname:'Lewandowski'
      },
      birthdate:'30/10/1990',
      email:'Lewandowski@gmail.com',
      phone:'0533201168',
      address:'Barcelona'
    }
    this.arrayOfUser.push(this.per1)
    this.per1 ={
      id:'2222',
      name:{
        firstname:'Raphinha',
        lastname:'Raphinha'
      },
      birthdate:'01/12/1996',
      email:'Raphinha@gmail.com',
      phone:'0533201168',
      address:'Barcelona'
    }
    this.arrayOfUser.push(this.per1)

    this.per1 ={
      id:'3333',
      name:{
        firstname:'Ousmane',
        lastname:'Dembélé'
      },
      birthdate:'24/5/1998',
      email:'Dembélé@gmail.com',
      phone:'0533201168',
      address:'Barcelona'
    }
    this.arrayOfUser.push(this.per1)
    this.per1 ={
      id:'4444',
      name:{
        firstname:'Ansu',
        lastname:'Fati'
      },
      birthdate:'25/7/2000',
      email:'Fati@gmail.com',
      phone:'0533201168',
      address:'Barcelona'
    }
    this.arrayOfUser.push(this.per1)
    this.per1 ={
      id:'5555',
      name:{
        firstname:'Franck',
        lastname:'Kessié'
      },
      birthdate:'12/8/1996',
      email:'Kessié@gmail.com',
      phone:'0533201168',
      address:'Barcelona'
    }
    this.arrayOfUser.push(this.per1)
    this.per1 ={
      id:'6666',
      name:{
        firstname:'Jules',
        lastname:'Koundé'
      },
      birthdate:'23/8/1995',
      email:'Koundé@gmail.com',
      phone:'0533201168',
      address:'Barcelona'
    }
    this.arrayOfUser.push(this.per1)
    this.per1 ={
      id:'7777',
      name:{
        firstname:'Pedri',
        lastname:'Pedri'
      },
      birthdate:'05/2/2000',
      email:'Pedri@gmail.com',
      phone:'0533201168',
      address:'Barcelona'
    }
    this.arrayOfUser.push(this.per1)
    this.per1 ={
      id:'8888',
      name:{
        firstname:'Andreas',
        lastname:'Christensen'
      },
      birthdate:'15/7/1992',
      email:'Christensen@gmail.com',
      phone:'0533201168',
      address:'Barcelona'
    }
    this.arrayOfUser.push(this.per1)
    this.per1 ={
      id:'9999',
      name:{
        firstname:'Ronald',
        lastname:'Araújo'
      },
      birthdate:'14/7/1995',
      email:'Araújo@gmail.com',
      phone:'0533201168',
      address:'Barcelona'
    }
    this.arrayOfUser.push(this.per1)
    this.per1 ={
      id:'10101010',
      name:{
        firstname:'Marc-André',
        lastname:'ter Stegen'
      },
      birthdate:'10/3/1990',
      email:'terStegen@gmail.com',
      phone:'0533201168',
      address:'Barcelona'
    }
    this.arrayOfUser.push(this.per1)
}









  clickAddBut(){
    this.per1={
      id:'',
      name:{
        firstname:'',
        lastname:''
      },
      birthdate:'',
      email:'',
      phone:'',
      address:''
    }
    this.isShowForm = true
    this.onclickAdd= true
  }


  // Edit Item
  editItem(index:number){

    console.log(index);
    this.per1 = this.arrayOfUser[index]

    this.isShowForm =true
    this.onclickAdd = false
  }



  // Creatte Item
  createItem(){

    if(this.per1.id && this.per1.name.firstname && this.per1.birthdate && this.per1.address && this.per1.name.lastname && this.per1.phone && this.per1.email){
      this.arrayOfUser.push(this.per1={
        id:this.per1.id,
      name:{
        firstname:this.per1.name.firstname,
        lastname:this.per1.name.lastname
      },
      birthdate:this.per1.birthdate,
      email:this.per1.email,
      phone:this.per1.email,
      address:this.per1.address
      })
      this.isShowForm=false
    }else{
      this.errorMassage = true
    }
  }


  // save Item
  saveItem(){
    this.isShowForm=false

   }

  // delete Item
  deleteItem(index:number):void{
    console.log(index);
    this.arrayOfUser.splice(index,1)
  }
  constructor() { }

  ngOnInit(): void {
    this.fillUsersArray()
    // this.arrayOfUser=[...this.arrayOfUser]

  }

}
