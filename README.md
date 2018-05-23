## Ionic / Angular mobile front end for Tell The Landlord

Tell the Landlord is a service for tenants to report repairs to their landlord, usually a Housing Association.

There is a seperate admin UI, this one wil lbe deployed on IOS/Android as a mobile app.  Its uses a JSON API REST interface to talk to the Ruby on Rails backend.

Each Housing Association will be a seperate database tenant, and requests will use a different subdomain for each landlord. 

App users can post repairs without any authentication, apart from typing the name of the landlord.  In practice this has worked before.


## To run

Start the backend and run 

npm start

The URL for the backend is configured in datastore.ts, for now.


