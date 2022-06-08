package com.example.demo.obs.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.obs.model.Customer;

public interface CustomerRepository extends JpaRepository<Customer,Long> {

	
}
