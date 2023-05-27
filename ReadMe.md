
### Removed the top texts

### For the following you may write code to demonstrate or just describe how it could be done

1. Is DbContext used in a thread safe manner?

  A. No, DbContext in Entity Framework Core is not designed to be used in a thread-safe manner. 

2. What would be the server side steps to add an ability to input a new Person record?
    
	a. Design the Person entity and create a database context.
    b. Implement a server-side endpoint to handle the HTTP POST request.
    c. Validate and bind the input data to a Person object.
    d. Save the Person record using the DbContext's SaveChanges() method.
    e. Return a response indicating the success or failure of the operation. 

3. What are the security concerns with data UPSERT?  How would you resolve those concerns?
   a. Access control: Ensure only authorized users can perform UPSERT operations.
   b. Data validation: Validate incoming data to prevent malicious or incorrect input.
   c. Injection attacks: Protect against SQL injection or code injection by using parameterized queries.
   d. Data confidentiality: Implement encryption mechanisms to safeguard sensitive data.
   e. Auditing and logging: Maintain detailed logs of UPSERT operations for auditing purposes.