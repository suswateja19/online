package com.example.demo.obs.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;

//import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.obs.model.Customer;
import com.example.demo.obs.model.CustomerAddress;

@Repository
public interface UserRepository extends CrudRepository<Customer, Long> {

	// Fetch record/object based on email - non Id field
		/*Optional is a container object which may or may not contain a non-null value.
		If a value is present, isPresent() returns true. If no value is present, the object is considered empty and isPresent() returns false.
		*/
	    public  Customer findByEmail(String email);

		
		
		
	
		//Custom queries using jpql in crud repo
	    @Query("SELECT new com.example.demo.obs.model.CustomerAddress(c.id,c.email,c.fname,c.lname,"
	            + "c.password,c.dob,c.phoneNo,c.accountNo,a.street,a.city,a.pincode) "
	            + "FROM Customer c INNER JOIN c.address a")
	    List<CustomerAddress> fetchCustomerInnerJoin();
}
