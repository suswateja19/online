<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
     <%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Customer login</title>

<link rel="stylesheet" href="/obs/resources/static/css/login.css">
</head>
<body>
<div class="form">

  <span href="#" class="button" id="toggle-login">General Bank</span>

<div id="login">
  <div id="triangle"></div>
  <h1>Customer Log in</h1>
 <form:form id="eloginform" action="loginCustomer" method="post" modelAttribute="euser">
    <input type="text" placeholder="Email" name="email"/>
    <input type="password" placeholder="Password" name="password" />
    <input type="submit" value="Log in" />
 </form:form>
</div>
  
</div>
<div style="color: red">${error}</div>
</body>
</html>