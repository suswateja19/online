<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
     <%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Transtractions</title>
<link rel="stylesheet" href="/obs/resources/static/css/style1.css">
</head>
<body>
<div align="center">
Welcome ${customer.fname}  ${customer.lname} - ${customer.address.city}
<div align="right"><a href="logout">Log Out <% out.print(request.getSession().getAttribute("user")); %></a></div>
<hr color="blue">
    <h1>Transactions List</h1>
    <img src="/obs/resources/static/images/bank.jpg" width="300px" height="200px"><br><br>
    <hr color="blue">
   
   <a href="new">Create New Transaction</a>
    <br/><br/>
    <table border="1" cellpadding="10">
        <thead>
            <tr>
                <th>transtractionId</th>
                <th>Name</th>
                <th>Amount</th>
                
            </tr>
        </thead>
        <tbody>
        <c:forEach var="transtraction" items="${listTranstractions}">
        
         <!-- construct an "update" link with transtraction id -->
                            <c:url var="updateLink" value="/edit">
                                <c:param name="id" value="${Transtraction.transtractionId}" />
                            </c:url>

 

                            <!-- construct an "delete" link with customer id -->
                            <c:url var="deleteLink" value="/delete">
                                <c:param name="id" value="${Transtraction.transtractionId}" />
                            </c:url>
        
            <tr>
                <td>${Transtraction.transtractionId}</td>
                <td>${Transtraction.name}</td> 
                <td>${Transtraction.amount}</td>
               <!--   <td>
                      display the update link --> 
                          <!--            <a href="${updateLink}">Update</a>
                                   | <a href="${deleteLink}"
                                    onclick="if (!(confirm('Are you sure you want to delete this Transtraction?'))) return false">Delete</a>
                </td>
               -->
            </tr>
             </c:forEach>
        </tbody>
    </table>
</div>
    
    
    
    
    
    </div>
    
    
    
    
    
</body>
</html>