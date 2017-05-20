#!/usr/bin/python

# Import modules for CGI handling 
import cgi, cgitb 
 
print 'Content-Type: text/html\n\n'

# Create instance of FieldStorage 
form = cgi.FieldStorage() 

# Get data from fields
name = form.getvalue('name')
language = form.getvalue('language')
rank = form.getvalue('rank')

if form.getvalue('name'):
	name = form.getvalue('name')
else:
	name = 'World'
	
if form.getvalue('language'):
	language = form.getvalue('language')
else:
	language = 'Python'
	
if form.getvalue('rank'):
	try:
		rank = int(form.getvalue('rank'))
	except:
		rank = 1
else:
	rank = 1
	
heading = '<h3>Hello, %s! I love %s!! It is my number %i language.</h3>'
print (heading % (name,language,rank))


 

