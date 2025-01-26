# Running Goals Web App - AWS Setup Guide

## Overview
This project aims to develop a subscription-based website that integrates with Strava and Garmin to analyze users' training habits and generate personalized running programs using AWS services.

## AWS Services Used

### 1. AWS RDS (Relational Database Service)
- **Purpose:**
  - Provides a managed PostgreSQL database to store user data such as training logs, fitness metrics, and personalized running programs.
- **Setup Steps:**
  1. Create an RDS PostgreSQL instance.
  2. Configure security groups to allow inbound traffic on port `5432`.
  3. Connect via PostgreSQL CLI using:
     ```bash
     psql -h <your-rds-endpoint> -U <your-username> -d <your-database>
     ```

### 2. AWS IAM (Identity and Access Management)
- **Purpose:**
  - Manages user permissions and access control to AWS services.
- **Setup Steps:**
  1. Create IAM roles with appropriate permissions (e.g., access to RDS, Lambda, S3).
  2. Attach policies for least privilege access.

### 3. AWS Lambda
- **Purpose:**
  - Runs serverless functions to process data from Strava and Garmin APIs.
- **Setup Steps:**
  1. Create Lambda functions to fetch and analyze training data.
  2. Trigger Lambda functions via API Gateway.

### 4. AWS API Gateway
- **Purpose:**
  - Provides RESTful API endpoints to interact with backend services.
- **Setup Steps:**
  1. Create API Gateway endpoints to receive user requests.
  2. Integrate endpoints with AWS Lambda functions.

### 5. AWS S3 (Simple Storage Service)
- **Purpose:**
  - Stores user-generated content such as workout summaries and training plans.
- **Setup Steps:**
  1. Create an S3 bucket.
  2. Configure access policies to allow secure data storage.

### 6. AWS CloudWatch
- **Purpose:**
  - Monitors AWS resources and logs events.
- **Setup Steps:**
  1. Enable CloudWatch for logging Lambda executions.
  2. Set up alarms to monitor service health.

### 7. Strava & Garmin API Integration
- **Purpose:**
  - Collects fitness data to analyze and generate personalized training plans.
- **Setup Steps:**
  1. Register for API access.
  2. Implement OAuth 2.0 authentication.
  3. Fetch user activity data.

### 8. AWS Elastic Beanstalk / EC2
- **Purpose:**
  - Hosts the web application (frontend and backend services).
- **Setup Steps:**
  1. Deploy the frontend (React) and backend (Node.js/Flask) via Elastic Beanstalk or EC2.
  2. Configure load balancing and auto-scaling.

### 9. AWS Cognito
- **Purpose:**
  - Provides user authentication (signup, login, password recovery).
- **Setup Steps:**
  1. Create a user pool for authentication.
  2. Integrate with the frontend for secure login.

## Local Development Setup

### Required Tools:
1. **Node.js and npm:** Used for frontend development (React.js)
2. **PostgreSQL CLI:** Used to interact with the RDS database

### Installation Steps:
```bash
# Install React app
npx create-react-app my-app

# Install PostgreSQL CLI
brew install postgresql

# Connect to the database
psql -h <your-rds-endpoint> -U <your-username> -d <your-database>
```

### Troubleshooting:
- **Permission Issues with npm:**
  ```bash
  sudo chown -R $(whoami) ~/.npm
  npm cache clean --force
  ```
- **Database Connection Issues:**
  1. Ensure RDS instance is publicly accessible.
  2. Add local IP to the RDS security group.

## Next Steps
1. Finalize database schema.
2. Develop backend logic with AWS Lambda or EC2.
3. Build the frontend using React and deploy to AWS.
4. Implement user authentication using AWS Cognito.
5. Automate data processing workflows using Lambda and API Gateway.
6. Set up monitoring and alerts using CloudWatch.

---

For further questions, feel free to reach out or refer to AWS documentation.

