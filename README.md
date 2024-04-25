# Cloud Calculator

The Cloud Calculator is a simple web service that performs basic math operations based on URL pathname and query parameters.

## Usage

The Cloud Calculator supports the following operations:

- Addition (+)
- Subtraction (-)
- Multiplication (*)
- Division (/)

### Example

To perform an operation, make a GET request to the Cloud Calculator server with the desired operation and operands as part of the URL path and query parameters.

#### Request

(http://localhost:3000/add?a=3&b=6)


#### Response

9


## Operations

### Addition (+)

To perform addition, use the `/add` endpoint with two query parameters `a` and `b` representing the operands.

Example:

(http://localhost:3000/add?a=3&b=6)



### Subtraction (-)

To perform subtraction, use the `/subtract` endpoint with two query parameters `a` and `b` representing the operands.

Example:

(http://localhost:3000/subtract?a=3&b=6)


### Multiplication (*)

To perform multiplication, use the `/multiply` endpoint with two query parameters `a` and `b` representing the operands.

Example:

(http://localhost:3000/multiply?a=3&b=6)


### Division (/)

To perform division, use the `/divide` endpoint with two query parameters `a` (dividend) and `b` (divisor) representing the operands.

Example:

(http://localhost:3000/divide?a=3&b=6)
