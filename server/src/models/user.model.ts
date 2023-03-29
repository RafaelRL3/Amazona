import OrderEntity from '../entities/order.entity';
import BaseModel from './base.model';

class UserModel extends BaseModel {
  CPF: string;
  name: string;
  username: string;
  email: string;
  password: string; 
  payment: string;
  address: string[];
  phone: string;

  constructor({ 
    id,
    CPF, 
    name, 
    username,
    email, 
    password, 
    payment, 
    address, 
    phone,
  } : { 
    id: string,
    CPF: string; 
    name: string; 
    username: string; 
    email: string;  
    password: string;
    payment: string;
    address: string[];
    phone: string;
  }) {
    super(id);
    this.CPF = CPF;
    this.name = name;
    this.username = username;
    this.email =email;  
    this.password = password;
    this.payment = payment;
    this.address = address;
    this.phone = phone;
  }
}

export default UserModel;
