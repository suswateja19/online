<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
     <%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
    
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Add New Transaction</title>

</head>
<body>
<div align="center">
        <h1>Create New Transaction</h1>
        <br />
        <form:form id="transtractionform" action="save" method="post" modelAttribute="transtraction">
         

            <table border="0" cellpadding="10">
                <tr>
                    <td>Transferee AccountNo:</td>
                    <td><input type="text" name="transtractionId" /></td>
                </tr>
                <tr>
                    <td>Name:</td>
                    <td><input type="text" name="name" /></td>
                </tr>
                
                <tr>
                    <td>Amount:</td>
                    <td><input type="text" name="amount" /></td>
                </tr>                           
                <tr>
                    <td colspan="2"><button type="submit" style="background-color:violet">Continue</button> </td>
                </tr>
            </table>
        </form:form>
    </div>
</body>
</html>