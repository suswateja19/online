package com.example.demo.obs.model;

import javax.persistence.*;

@Entity
@Table(name="account")
public class Account {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long accountNo;
	private float balance;
	private float deposit;
	private float withdraw;
	
	
	@OneToOne
	@JoinColumn(name="customer_id")
	private Customer customer;


	public Account() {
		
	}


	public long getAccountNo() {
		return accountNo;
	}


	public void setAccountNo(long accountNo) {
		this.accountNo = accountNo;
	}


	public float getBalance() {
		return balance;
	}


	public void setBalance(float balance) {
		this.balance = balance;
	}


	public float getDeposit() {
		return deposit;
	}


	public void setDeposit(float deposit) {
		this.deposit = deposit;
	}


	public float getWithdraw() {
		return withdraw;
	}


	public void setWithdraw(float withdraw) {
		this.withdraw = withdraw;
	}


	public Customer getCustomer() {
		return customer;
	}


	public void setCustomer(Customer customer) {
		this.customer = customer;
	}

}