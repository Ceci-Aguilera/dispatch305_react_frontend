# Dispatch305 React Frontend ![alt text](./screenshots/navbar_logo.jpeg)

## Table of Contents

1. [Quick Installation for testing using Docker](#docker)
2. [Custom Installation](#installation)
3. [Brief Introduction and Basic Workflow of the Website](#frontend)
4. [Screenshots of the Frontend React App](#screenshots_frontend)
5. [Screenshots of the Admin Panel Backend](#screenshots)
6. [Screenshots of the Original Frontend Design](#screenshots_original)


<a name="docker"></a>

### Quick Installation for testing using Docker

1. Clone the repo:

   ```bash
   git clone https://github.com/Ceci-Aguilera/dispatch305_react_frontend.git
   ```

1. Install Docker and Docker Compose

1. Configure the environment variables: Create an .env file inside the root folder and set up the following environment variables:

   ```text
    REACT_APP_API_DOMAIN_NAME (The url of the backend, for example, https://backend_api.com)
   ```

1. Run the command:

   ```bash
   docker-compose up -d --build
   ```

1. Congratulations =) !!! the app should be running in [localhost:80](http://localhost:80)


<a name="installation"></a>

### Custom Installation

1. Clone the repo:

   ```bash
   git clone https://github.com/Ceci-Aguilera/dispatch305_react_frontend.git
   ```

1. Install dependencies:
   ```bash
   npm install
   ```

1. Configure the environment variables: Create an .env file inside the root folder and set up the following environment variables:

   ```text
    REACT_APP_API_DOMAIN_NAME (The url of the backend, for example, https://backend_api.com)
   ```

1. Run the app

   ```bash
   npm start
   ```

1. Congratulations =) !!! the app should be running in [localhost:3000](http://localhost:3000)


<a name="frontend"></a>

#### Brief Introduction

Dispatch305 is a service that helps dispatchers to communicate with both drivers and brokers. From now on, we call DISPATCH305 to the company only, and so we call  _drivers_ to the _clients_ while _dispatchers_ will be often called _staff members_. In addition, the services offered by the website will be referred as:

- _Searching a Cargo_: When a client requests the dispatcher to look out for an Agency with a Cargo to transport. In this case the staff member should contact a broker (Agency) and make the arraignments.
- _Sending Analytics_: Every Friday, a bill should be sent to every client with the weekly pending bill amount and a description of the charges. In addition, for the clients with a VIP account, an analytics resume of the week should also be sent.
- _Managing POD_: When a Cargo is delivered, the VIP clients may request the staff member assigned to them to manage the sending of the _Rate Conf_ and the _POD_ (this are 2 PDF files needed as proof of service and delivery).

#### Basic Workflow of the Website

1. __User Registration:__ First, the client registers at [dispatch305.com](https://www.dispatch305.com/create-account) (the Frontend website created using REACT js). During this step, the client should provide basic account information such as name, company, ..., and should also upload the 4 basic PDF files that most brokers require for hiring them to deliver cargo.
2. __Account Activation:__ When the new account is created, it is set to inactive and the _Admin User_ is notified. The, the _Admin User_ assigns a staff member to the client. From this point on, the staff member is said to be the client's dispatcher. The client must download the PDF that is under the section Agreement in the Frontend app. Once this steps are completed, the client's account is set to active.
3. __Requesting Services and Billing:__ Now and while the account is active, a client with a plan BASICO (basic account) can request the dispatcher to offer the service of _Searching a Cargo_, while VIP clients can ask for the services of _Searching a Cargo_, _Sending Analytics_, and  _Managing POD_. Regardless of which type of account a client has, a Bill will be sent to them with the pending amount to pay for the services offered in that week from DISPATCH305. When a user fails to pay the weekly bill (usually a timeline of 3 days offered), the account becomes inactive until the bill is paid.
4. __Factoring:__ After the user requests a _Searching a Cargo_ service, and the Cargo is found by the staff member, and later delivered by the client, if the client has a VIP account, the staff member can be requested to offer a _Managing POD_ service. In order to do that, the client must send the PDF files required, and the staff member should upload them to DISPATCH305's Admin Panel.


<a name="screenshots_frontend"></a>

### Screenshots of the Frontend React App

![alt text](./screenshots/driver_0.png) ![alt text](./screenshots/driver_2.png)

![alt text](./screenshots/driver_3.png) ![alt text](./screenshots/driver_4.png)

![alt text](./screenshots/services.png)

![alt text](./screenshots/driver_6.png)


<a name="screenshots"></a>

### Screenshots of the Admin Panel

![alt text](./screenshots/admin_dispatcher_view.png)  ![alt text](./screenshots/admin_dispathcer_user_trucks_cargo_detail_view.png)

![alt text](./screenshots/admin_edit_trucks_cargo.png)  ![alt text](./screenshots/admin_edit_save_trucks_cargo.png)

---

![alt text](./screenshots/admin_dispatcher_user_view.png)

---

![alt text](./screenshots/admin_dispatcher_trucks_cargo_view.png)




<a name="screenshots_original"></a>

### Screenshots of the Original Frontend Design

__NOTE:__ Some of the components of the original design have been changed, such as banner images, and name of the service (from ALL4LOADS to Dispatch305). This original design does not include the client's views after log in.

![alt text](./screenshots/Original_1_1.jpg)

![alt text](./screenshots/Original_2.jpg)

![alt text](./screenshots/Original_3.jpg)