package com.example.demo.obs.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.obs.model.Transaction;
import com.example.demo.obs.repository.TransactionRepository;



@Service
@Transactional
public class TransactionService {
	
	@Autowired
	private TransactionRepository trepo;
	
	public List<Transaction> listAll() {
        return trepo.findAll(); // defined in JPA repo
    }
    
    public void save(Transaction transaction) { // save is user defined method in service class
        trepo.save(transaction); // save method defined in JPA repo
    }
    
    public Transaction get(long email) {
        return trepo.findById(email).get();  // defined in JPA repo
    }
    
    public void delete(long email) {
        trepo.deleteById(email);  // defined in JPA repo
    }
	
	
	

}
