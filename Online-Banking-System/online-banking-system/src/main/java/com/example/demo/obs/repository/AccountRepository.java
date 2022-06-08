package com.example.demo.obs.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.obs.model.Account;

public interface AccountRepository extends JpaRepository<Account, Long> {

	
	

}
