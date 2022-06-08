<%@page contentType="text/html"%>
<%@page pageEncoding="UTF-8"%>
<html>
    <head><title>四則運算</title></head>
    <body>
    <%      

	String x=request.getParameter("num");
	String star=request.getParameter("star");
	out.print(x+"\n"+star);

    %>
    </body>
</html>
