#!/usr/bin/python

# Import modules for CGI handling 
import cgi, cgitb 
 
print 'Content-Type: text/html\n\n'
print
with open('./templates/html/testForm.html') as f:
  print f.read() % 'World'