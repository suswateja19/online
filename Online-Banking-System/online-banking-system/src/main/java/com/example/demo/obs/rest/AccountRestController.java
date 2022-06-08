/*package com.example.demo.obs.rest;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.obs.exception.ResourceNotFoundException;
import com.example.demo.obs.model.Account;
import com.example.demo.obs.repository.AccountRepository;

@RestController
@RequestMapping(value="/api")
@CrossOrigin(origins="http://localhost:4200")
public class AccountRestController {
	
	@Autowired
	private AccountRepository arepo;
	
	
	
	@GetMapping("/accounts")
	public List<Optional<Account>> getAllAccounts(){
		return arepo.findAll();
	}

	@GetMapping("/accounts/{id}")
    public ResponseEntity<Optional<Optional<Account>>> getAccountById(@PathVariable(value = "id") Long aId)
            throws ResourceNotFoundException {
		Optional<Optional<Account>> account = arepo.findById(aId);
               // .orElseThrow(() -> new ResourceNotFoundException("Transtraction not found for this id :: " + tId));
        return ResponseEntity.ok().body(account);
    }
	
	 @PostMapping("/accounts")
     public Account saveBalance(@Validated @RequestBody Account account) {
      return arepo.save(account) ;
                     
     }
	 
	/* @DeleteMapping("/accounts/{id}")
	    public Map<String, Boolean> deleteBalance(@PathVariable(value = "id") Long tId)
	            throws ResourceNotFoundException{
		 Transaction transaction = trepo.findById(tId)
	                .orElseThrow(() -> new ResourceNotFoundException("Product not found for this id :: " + tId));
	        trepo.delete(transaction);
	       
	        Map<String, Boolean> response = new HashMap<>();
	        response.put("Deleted", Boolean.TRUE);
	        return response;
	 }
	 
	 @PutMapping("/transactions/{id}")  //Update Mapping
	    public ResponseEntity<Optional<Account>> updateAccount(@PathVariable(value = "id") Long aId,
	            @Validated @RequestBody Account a) throws ResourceNotFoundException {
	    
		 Optional<Account> account = Optional.empty();
	              //  .orElseThrow(() -> new ResourceNotFoundException("Transaction not found for this id :: " + tId));
	    
	                   
				account.setBalance(a.getBalance());
		
	       
	        final Optional<Account> updatedAccount = arepo.save(account);
	        return ResponseEntity.ok(updatedAccount);
	    }

}
*/