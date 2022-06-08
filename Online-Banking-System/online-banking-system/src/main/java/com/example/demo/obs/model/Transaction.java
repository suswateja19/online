package com.example.demo.obs.model;

import javax.persistence.*;

@Entity
public class Transaction {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
	
	 private String accountNo;
     private String name;
     private String email;
     private float balance;
	public Transaction() {
		
	}
	public Transaction(Long id, String accountNo, String name, String email, float balance) {
		super();
		this.id = id;
		this.accountNo = accountNo;
		this.name = name;
		this.email = email;
		this.balance = balance;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getAccountNo() {
		return accountNo;
	}
	public void setAccountNo(String accountNo) {
		this.accountNo = accountNo;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public float getBalance() {
		return balance;
	}
	public void setBalance(float balance) {
		this.balance = balance;
	}
	@Override
	public String toString() {
		return "Transaction [id=" + id + ", accountNo=" + accountNo + ", name=" + name + ", email=" + email
				+ ", balance=" + balance + "]";
	}
	
	
     
}