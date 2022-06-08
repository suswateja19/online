package com.example.demo.obs.repository;



import org.springframework.data.jpa.repository.JpaRepository;




//import com.example.demo.obs.model.Customer;
import com.example.demo.obs.model.Transaction;

public interface TransactionRepository extends JpaRepository<Transaction, Long> {

	// public  Transaction findById(String i);

		


}
