package com.example.demo.obs.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.obs.model.Customer;
import com.example.demo.obs.repository.CustomerRepository;
import com.example.demo.obs.repository.UserRepository;

 
@Service
@Transactional
public class CustomerService {
	
	@Autowired
	private CustomerRepository crepo;
	
	@Autowired
	private UserRepository urepo;
	
	public void saveCustomer(Customer customer) {
		
		crepo.save(customer);
	}

	public Customer findByEmail(String email) {
	 
		return urepo.findByEmail(email);
	}
}
