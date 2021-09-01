import { ICard } from './card'

const cards: ICard[] = [
  {
    "What is cloud computing?": [
      "Cloud computing is the on-demand delivery of IT resources over the internet with pay-as-you-go pricing.",
      "Instead of buying, owning, & maintaining physical data centers and servers, you can access computing power, storage, and databases on an as-needed basis from a cloud provider."
    ]
  },
  {
    "What are the four benefits of cloud computing?": [
      "Agility – access to a broad range of technologies, ability to spin up resources (infrastructure services like storage and databases, IoT like machine learning/analytics) on demand without paying to maintain & implement those services",
      "Elasticity – no need to over-provision to handle peak activity levels that scale as needs change, benefit instead from economies of scale.",
      "Global Deployment – global infrastructure means your content can be deployed globally in minutes. Proximity to end users reduces latency & improves experience.",
      "Minimize Expenses – Trade upfront Expenses for variable expenses that benefit from economies of scale."
    ]
  },
  {
    "What are the three types of cloud computing?": [
      "•	Infrastructure as a Service (IaaS): provides access to networking features, computers (virtual or on dedicated hardware), and data storage space.",
      "•	Platform as a Service (PaaS): removes the need to manage underlying infrastructure (ex. hardware and OS’s), allowing you to focus on app deployment & management.",
      "•	Software as a Service (SaaS): provides a complete product that is run an managed by the service provider."
    ]
  },
  {
    "What are the three cloud computing deployment models?": [
      "•	Cloud-based deployment: A cloud-based application is fully deployed in the cloud and all parts of the app run in the cloud. Cloud-based apps were either designed & built in or migrated to the cloud from an existing infrastructure.",
      "•	Hybrid deployment: A hybrid deployment is a way to connect infrastructure and applications between cloud-based resources and existing resources that are not located in the cloud. The most common hybrid deployment extends between an existing on-premises infrastructure and an organization’s growing cloud infrastructure.",
      "•	On-Premises deployment: Deploying resources on-premises using virtualization and resource management tools is sometimes called “private cloud” deployment. This model is largely aligned with legacy IT infrastructure."
    ]
  },
  {
    "What is EC2?": [
      "EC2 is a service for spinning up instances of virtual machines (with provisions such as OS, software, and DBs) that allows you to access virtual servers. (EC2 instances are sometimes referred to as virtual servers.)",
      "An EC2 instance runs on top of a physical host machine managed by AWS.",
      "A given EC2 instance will often share the host machine with multiple other instances (multi-tenancy)."
    ]
  },
  {
    "What are the three steps to initialize an EC2 instance?": [
      "1. Launch: spin up an instance, select a template with basic config for your instance including OS, server, apps, and security settings to control traffic flow in the instance. ",
      "2.	Connect: connect the instance, including your programs and apps, and allowing users to connect to the instance.",
      "3.	Use: run commands to install software, add storage, copy, organize files, and more."
    ]
  },
  {
    "What are the four EC2 instance types?": [
      "Compute optimized instances: are ideal for compute-intensive tasks that benefit from High-Performance Processors like gaming servers, high performance computing or HPC, and even scientific modeling. This is good for batch processing workloads.",
      "Memory optimized instances: are designed to deliver fast performance for workloads that process large datasets in memory (a temporary storage area). Accelerated computing are good for floating point number calculations, graphics processing, or data pattern matching, as they use hardware accelerators.",
      "Accelerated computing instances: use hardware accelerators, or coprocessors, which expedite data processing, to perform some functions more efficiently than is possible in software running on CPUs.",
      "Storage optimized instances: are designed for workloads that require high performance for read and write access to large datasets on locally stored data (including online transaction processing)."

    ]
  },
  {
    "What are the five EC2 pricing models?": [
      "On demand: pay for the duration that your instance runs. No long-term commitments or upfront payments. Ideal for short-term, irregular workloads.",
      "Savings: lower prices in exchange for a 1- or 3-year commitment. Any usage beyond the commitment is charged at on-demand rates.",
      "Reserved Instances: steady-state workloads with predictable usage. Requires a 1- or 3-year min commitment and can be paid upfront, partial upfront, or not upfront.",
      "Spot Instances: allow you to request spare EC2 computing capacity for 90% off the on-demand price. AWS can, however, reclaim the instance at any time if they need it with 2-minute warning.",
      "Dedicated Hosts: physical hosts dedicated for your use for EC2. This is usually for compliance requirements that require nobody shares tenancy of that host."
    ]
  },
  {
    "What is scalability?": [
      "Scalability is the way that app capacity can grow or shrink based on business needs, which shift over time.",
      "When building an app, design your architecture to automatically respond to changing demand by scaling out or in. Amazon EC2 Auto-Scaling automates this process.",
    ]
  },
  {
    "What is Amazon EC2 Auto-Scaling?": [
      "Amazon EC2 Auto-Scaling automates the dynamic scaling of EC2 instances to maintain app availability, including by using predictive scaling to anticipate demand."
    ]
  },
  {
    "What is scaling up?": [
      "Scaling up is adding more power to the EC2 instances that are running."
    ]
  },
  {
    "What is scaling out?": [
      "Scaling out is adding more instances to accommodate increased demand and then decomissioning them when they are no longer needed."
    ]
  },
  {
    "What is Amazon ELB?": [
      "Elastic Load Balancing is the AWS service that automatically distributes incoming application traffic across multiple resources such as EC2 instances.",
      "A load balancer is a single point of contact that routes all web traffic incoming to your Auto Scaling group to healthy targets."
    ]
  },
  {
    "What is a microservices application?": [
      "A microservices application loosely couples its architecture so that a failure in a single isolated component will not cause cascading failures throughout the architecture."
    ]
  },
  {
    "What is Amazon Simple Queue Service (SQS)?": [
      "Amazon Simple Queue Service allows you to send, store, and receive messages between software components.",
      "The application sends messages into a queue, then the user/service retrieves messages from the queue, processes them, and deletes them from the queue."
    ]
  },
  {
    "What is Amazon Simple Notification Service (SNS)?": [
      "Amazon Simple Notification Service is a publish/subscribe service which publishes messages to subscribers to a topic.",
      "To use SNS  create an SNS topic/channel for messages, configure subscriptions to that topic, and then publish messages to configured subscribers.",
      "Subscribers can be servers, emails, lambdas, etc."
    ]
  },
  {
    "What is AWS Lambda?": [
      "AWS Lambda is a Serverless computing service. Serverless computing allows you to build and run applications and services without thinking about servers. With serverless computing, your application still runs on servers, but all the server management is done by AWS."
    ]
  },
  {
    "What is a Docker Container": [
      "Docker is a platform that uses OS level virtualizatin to deliver software in containers.",
      "A Container is a package for your application, dependencies, and configurations that runs on top of an EC2 instance, giving you full access to the underlynig OS."
    ]
  },
  {
    "What is a serverless environment?": [
      "A serverless environment is a compute option in which AWS manages the underlying infrastructure (provisioning, scaling, availability, maintenance) to your application. ",
      "Ex. AWS Lambda allows you to upload your code into a Lambda function and configure a trigger event. The function will run but AWS will maintain the environment."
    ]
  },
  {
    "What is ECS?": [
      "Elastic Container Service is a scalable, high performance container management system (CMS) that enables you to run and scale containerized AWS applications.",
      "Amazon Elastic Container Service (Amazon ECS) has two modes: Fargate launch type (serverless) and EC2 launch type (server-based). The Fargate launch type allows you to run containers without having to manage servers or clusters. The EC2 launch type allows you to have server-level, more granular control over the infrastructure that runs your container applications."
    ]
  },
  {
    "What is Elastic Kubernetes Service (EKS)?": [
      "Elastic Kubernetes Service is a managed service that can be used to run Kubernetes, an open source software that enables deployment and management or containerized apps at scale."
    ]
  },
  {
    "What is AWS Fargate?": [
      "AWS Fargate is a serverless compute engine for containers which manages server infrastructure."
    ]
  },
  {
    "What are AWS Regions?": [
      "AWS Regions are large groups of physically separated AWS data centers with redundant power, networking, and connectivity.",
      "Choose your region on the basis of:",
      "•	Compliance: with local data governance and legal requirements",
      "•	Proximity: to customer base, helps minimize latency",
      "•	Feature Availability: not all AWS features are availabile at each region",
      "•	Pricing: certain regions are more expensive to operate in"
    ]
  },
  {
    "What is an Availability Zone?": [
      "An Availability Zone is a discrete data center or group of data centers within a Region. It is a fully isolated portion of the AWS global infrastructure."
    ]
  },
  {
    "What is an Edge Location?": [
      "An Edge Location is a location far from an AWS Region. An AWS customer can push content from inside a region to a collection of Edge Locations to accelerate content delivery to users.",
      "Edge locations are used by CloudFront to cache the most recent responses to calls for content."
    ]
  },
  {
    "What is a Amazon Cloudfront?": [
      "Amazon Cloudfront is Amazon's Content Delivery Network (CDN), which helps deliver data, video, applications, and APIs to customers around the world with low latency.",
      "Content Delivery Networks allow you to locally cache data being requested by users far from either the Region where data is hosted or any other Region.",
      "Cost is determined by number of requests and distribution of those requests.",
      "All CloudFront distributions are defended by default against the most frequently occurring DDoS attacks that target your websites or applications with AWS Shield Standard."
    ]
  },
  {
    "What is a Domain Name Service?": [
      "Edge locations run Domain Name Services, directing customers to the correct web locations with low latency."
    ]
  },
  {
    "What is an AWS Outpost?": [
      "An AWS Outpost is a mini-region installed inside an Edge Location data center."
    ]
  },
  {
    "What is the AWS Management Console?": [
      "AWS Management Console is a web-based interface for accessing and managing individual AWS services.",
      "AWS Management Console allows you to monitor resources, view alarms, and access billing information."
    ]
  },
  {
    "What is AWS Command Line Interface?": [
      "AWS Command Line Interface allows you to control multiple AWS services directly from the command line.",
      "It also allows you to write scripts to automate service actions.",
      "A user must provide access keys in order to interact with AWS services using the CLI."
    ]
  },
  {
    "What are SDKs?": [
      "Software Development Kits make it easier to use AWS services through an API designed for relevant languages/platforms.",
      "SDKs offer APIs tailored to your programming language of choice."
    ]
  },
  {
    "What is AWS Elastic Beanstalk?": [
      "AWS Elastic Beanstalk is an application container on top  of Amazon Web Services. Elastic Beanstalk makes it easy for developers to quickly deploy and manage applications in the AWS Cloud.",
      "Developers simply upload their application code, and Elastic Beanstalk automatically handles the deployment details of capacity provisioning, load balancing, auto-scaling, and application health monitoring."
    ]
  },
  {
    "What is AWS CloudFormation?": [
      "AWS CloudFormation allows you to treat your infrastructure as code.",
      "You define what you want to build in a simple text file without specifying the exact details of how to build it. CloudFormation will automatically provision (and update) your infrastructure, completing the details on API calls to build it out."
    ]
  },
  {
    "What is Amazon VPC?": [
      "Amazon Virtual Private Cloud is a private, logically isolated network provisioned in AWS that is dedicated to your AWS account.",
      "You control what traffic gets into your VPC by provisioning your private IP range.",
      "VPC resources can be public/user facing subnets or private subnets with no internet access."
    ]
  },
  {
    "What is a subnet?": [
      "A subnet is a seciton of a VPC that allows you to control whether a group of resources are privately or publicly available.",
      "A Public Subnet contains resources that need to be accessible to the public such as an online store's website.",
      "A Private Subnet contains resources that should  be accessible only through your private network, such as a database that contains customers personal information."
    ]
  },
  {
    "What is an Internet Gateway (IGW)? Virtual Private Gateway?": [
      "An Internet Gatewat is a doorway to your VPC that is open to the public. It allows you to regulate traffic from the public internet in & out of your VPC.",
      "A Virtual Private Gateway is an access point to private VPC roseources  that only allows users in if they have a Virtual Private Network connection (VPN)."
    ]
  },
  {
    "What is AWS VPN?": [
      "AWS Virtual Private Network is comprised of site-to-site VPN, which allows you to connect your on-premises network to AWS, and client VPN, which allows you to securely connect to users."
    ]
  },
  {
    "What is AWS Direct Connect?": [
      "AWS Direct Connect allows you to establish a dedicated, private, direct physical fiber connection from your data center to AWS."
    ]
  },
  {
    "What is a Network ACL?": [
      "Every packet that crosses the boundaries of a subnet gets checked against the network's Access Control List (ACL) to see if it has permissions to either leave or enter the subnet based on whence it was sent and how it is trying to communicate.",
      "By default an ACL allows all inbound and outbound traffic.",
      "Network Access Control Lists perform stateless packet filtering, meaning they remember nothing and check every packet passing in and out.",
      "Network ACLs act at the subnet level, but security groups act at the instance level."
    ]
  },
  {
    "What is a Security Group?": [
      "A Security Group is a virtual firewall that evaluates permissions for the resources within a subnet that a package is requesting.",
      "At its instantiation, a Security Group denies all inbound traffic to and denies all outbound traffic from the EC2 instance, but it should be modified to allow specific types of traffic.",
      "Security Groups are stateful, meaning they remember previous decisions made for incoming packets.",
      "Network ACLs act at the subnet level, but security groups act at the instance level."
    ]
  },
  {
    "What is a Domain Name System (DNS)?": [
      "A Domain Name System translates website names into IP addresses, registers, and manages domain names.",
      "It also directs traffic to different endpoints based on latency, geolocation, and a weighted round robin system."
    ]
  },
  {
    "Describe the four steps involved in Domain Name Resolution.": [
      "1.	When a customer enters a domain name into a browser, their request is sent to a customer DNS resolver.",
      "2.	The customer DNS resolver asks the company DNS server for the IP address that corresponds to the company’s website.",
      "3.	The company DNS server responds by providing the IP address for the company’s website.",
      "4.	The customer’s request is sent to the nearest Region or edge location through Amazon CloudFront. Amazon Cloudfront connects to the Application Load Balancer, which sends the incoming packet to an Amazon EC2 instance."
    ]
  },
  {
    "What is Amazon Route 53?": [
      "Amazon Route 53 is a DNS web service that gives developers and businesses a reliable way to route end users to internet apps/infrastructure hosted in AWS.",
      "Amazon Route 53 can be used for:",
      "• Registering domain names",
      "• DNS routing",
      "• Configuring health checks to route traffic only to healthy endpoints",
      "• Managing global application traffic (cross-regions) through a variety of routing types."
    ]
  },
  {
    "What is Amazon EBS?": [
      "Elastic Block Store allows you to create virtual hard drives called EBS volumes that can be attached to EC2 instances but aren't directly tied to the host your EC2 is running on. Thi means that the data persists even if you terminate the EC2 instance.",
      "Upon change, block storage only updates the blocks where changed elements live.",
      "EBS Volumes allow for incremental backups called EBS snapshots of only the data that has been changed.",
      "A broad range of workloads, such as relational databases (including Amazon RDS databases) and non-relational databases (including Cassandra and MongoDB), enterprise applications, containerized applications, big data analytics engines, file systems, and media workflows are widely deployed on Amazon EBS."
    ]
  },
  {
    "What is an Instance Store?": [
      "An Instance Store provides temporary block-level storage for an EC2 instance. Disc storage is physically attached to the host computer and therefore is lost when the instance is terminated."
    ]
  },
  {
    "What is Amazon S3?": [
      "Amazon Simple Storage Service is a service that allows you to store and retrieve an unlimited amount of object-level data of any type as objects in buckets. It also allows you to set permissions for visibility and access.",
      "Data in S3 can include any data type and are stored as objects -- data, metadata, and keys with a max size of 5 terabytes -- in buckets which can be assigned permissions tiers.",
      "S3 treats any file as a complete, discrete object, meaning any change to stored files is expensive",
      "Amazon S3 is an object level storage that cannot be used to store running operating systems or live databases.",
      "Amazon S3 scales automatically & offers volume discounts based on usage."
    ]
  },
  {
    "Describe the S3 Storage Classes:" : [
      "-	S3 Standard: Designed for frequently accessed data (high data availability), stored in 3 separate facilities. Higher storage cost. 90 day lifecycle, then moves to S3-IA.",
      "-	S3 Infrequent access (S3-IA): Ideal for infrequently accessed data which requires rapid access when needed. Lower storage, higher retrieval price. Backups, disaster recovery files, or long-term storage. 30 day lifecycle, then moves to S3 Glacier.",
      "-	S3 One Zone-Infrequent Access (S3 One Zone-IA): Stores data in a single Availability Zone. Lower storage prices than S3 Standard-IA.",
      "-	S3 Intelligent Tiering: Ideal for data with unknown/changing access patterns. Requires monthly monitoring & automation fee per object. If not accessed for 30 day period, automatically moved to S3-IA, if accessed often moved to S3 Standard.",
      "-	S3 Glacier: Low-cost storage for archiving large amounts of data. Retrieval takes minutes to hours. (ex. Compliance/audit data) Includes controls such as Write Once Read Many (WORM) to lock the policy from future edits.",
      "-	S3 Glacier Deep Archive: Low-cost, archival storage. Retrieves objects within 12 hours."

    ]
  },
  {
    "What is Amazon EFS?": [
      "Amazon Elastic File System is a scalable managed file system and data storage service that allows you to have multiple instances accessing (reading and/or writing) the data in EFS at the same time.",
      "EFS can be used as a shared file system across a business. It scales as needed and stores across multiple Availability Zones."
    ]
  },
  {
    "What is Amazon Aurora?": [
      "Amazon Aurora is a managed relational database service that is compatible with MySql and PostgreSQL.",
      "It also provides automated backups."
    ]
  },
  {
    "What is DynamoDB?": [
      "DynamoDB is a serverless database, meaning Amazon manages underlying infrastructure.",
      "Dynamo DB is a non-relational database, meaning is has flexible schemas and can lay out multiple tables with items that have unmatched attributes.",
      "DynamoBD scales automatically to meet required throughput capacity."
    ]
  },
  {
    "What is Amazon Redshift?": [
      "Amazon Redshift is a scalable data warehousing service."
    ]
  },
  {
    "What is AWS DMS?": [
      "AWS Database Migration Service helps customers migrate existing databases onto AWS without disabling the source database.",
      "Homogeneous Migrations: migration between databases of the same type.",
      "Heterogeneous Migrations: migration between databases of differing types, meaning the schemas, data types, and database code all differ. The source schema is converted to the target schema using the AWS Schema Conversion Tool and then migrated over to the target database."
    ]
  },
  {
    "What is Amazon DocumentDB?": [
      "Amazon Document DB is a document database service that supports MongoDB workloads."
    ]
  },
  {
    "What is Amazon Neptune?": [
      "Amazon Neptune is a graph database service engineered for highly connected applications like social networking and recommendation engines."
    ]
  },
  {
    "What is Amazon Quantum Ledger Database (QLDB)?": [
      "Amazon Quantum Ledger Database (QLDB) is a ledger database service that acts as a centralized immutable record system, the complete history of all data changes."
    ]
  },
  {
    "What is Amazon Managed Blockchain?": [
      "Amazon Managed Blockchain is a service that creates and manages blockchain networks with open-source frameworks. A distributed ledger system that lets multiple parties run transactions."
    ]
  },
  {
    "What is Amazon ElastiCache?": [
      "Amazon ElastiCache is a service that provides caching layers to improve read time for common requests. It supports Redis and Memcached data stores.",
      "ElastiCache is an in-memory data storage service."
    ]
  },
  {
    "What is the Shared Responsibility Model?": [
      "AWS controls data centers, infrastructure security, cloud security, while AWS customers control their workloads.",
      "The overall responsibility of security is shared between the two."
    ]
  },
  {
    "What is Identity and Access Management (IAM)?": [
      "Identity and Access Management is a service that allows an AWS customer to set access in a granular way such that not every user has maximum access.",
      "A given IAM user represents a person or app that interacts with AWS services and resources. When an IAM user is created they default to having no permissions, and each permission must be given explicitly by applying an IAM policy to the user or group."
    ]
  },
  {
    "What is an IAM Group?": [
      "An IAM group is a collection of IAM users. When you assign an IAM policy to a group, all users in the group are granted permissions specified by the policy."
    ]
  },
  {
    "What are IAM Roles?": [
      "IAM roles are identities that users can assume to gain temporary access to permissions. When a user assumes a role they abandon all permissions they had under their previously assigned role.",
      "A user must have permission to assume the role they are adopting."
    ]
  },
  {
    "What is an AWS Organizations?": [
      "An AWS Organizations is a central location for managing multiple AWS accounts. It allows you to group accounts hierarchically to meet regulatory requirements.",
      "Organizational accounts are groupings of accounts which inherit their Organizational Unit's security policies.",
      "AWS Organizations automatically create a root parent container for all of the organization accounts.",
      "AWS Organizations has five main benefits:",
      "1) Centrally manage access polices across multiple AWS accounts.",
      "2) Automate AWS account creation and management.",
      "3) Control access to AWS services.",
      "4) Consolidate billing across multiple AWS accounts.",
      "5) Configure AWS services across multiple accounts."
    ]
  },
  {
    "What is AWS Artifact?": [
      "AWS is a service that provides on-demand access to AWS security and compliance reports and select online agreements.",
      "AWS Artifact Agreements allow you to review, accept, and manage your agreements with AWS for an individual account or for all accounts in AWS Organizations.",
      "AWS Artifact Reports provide compliance reports from third-party auditors who have tested and verified AWS' compliance with security standards/regulations."
    ]
  },
  {
    "What is a Denial of Service Attack (DoS)?": [
      "A Denial of Service Attack (DoS) is an attack on enterprise's infrastructure whose objective is to shut down your application's ability to function by overwhelming its ability to function.",
      "This attack can be distributed, meaning it is sourced from more than one machine."
    ]
  },
  {
    "What is AWS Shield?": [
      "AWS Shield is a service that protects applications against Denial of Service Attacks.",
      "Standard AWS Shield automatically protects all AWS customers at no cost from the most frequently occurring types of DDoS attacks. It detects malicious traffic and automatically mitigates it.",
      "AWS Shield Advanced is a paid service that provides detailed attack diagnostics and the ability to detect and mitigate sophisticated DDoS attacks. It can also integrate with AWS Web Application Firewalls by writing custom rules to mitigate complex DDoS attacks. "
    ]
  },
  {
    "What is encryption?": [
      "Encryption means securing a message such that it can only be accessed by authorized parties.",
      "-	At rest: when data is idle, ex. In a database.",
      "-	In transit: when data is traveling between services/clients."

    ]
  },
  {
    "What is Amazon Inspector?": [
      "Amazon Inspector runs automated security assessments against your infrastructure to detect deviations from security best practices."
    ]
  },
  {
    "What is Amazon Guard Duty?": [
      "Amazon Guard Duty uses integrated threat intelligence such as known malicious IP addresses, anomaly detection, and machine learning to identify security threats. "
    ]
  },
  {
    "What is Amazon KMS?": [
      "Amazon Key Management Service enables you to create, manage, and use cryptographic keys, random strings of digits used for locking (encrypting) and unlocking (decrypting) data."
    ]
  },
  {
    "What is AWS Web Application Firewall?": [
      "AWS web application firewall works together with Amazon Cloudfront and Application Load Balancer to block or allow traffic using an access control list (ACL)."
    ]
  },
  {
    "What is Amazon Cloudwatch?": [
      "Amazon Cloudwatch is a web service that allows you to monitor your AWS infrastructure and apps in real time by tracking metrics on the CloudWatch dashboard. It can also integrate custom alarms for different metric triggers/thresholds."
    ]
  },
  {
    "What is AWS CloudTrail?": [
      "AWS CloudTrail is a comprehensive API auditing tool that logs every API request made to your AWS account including: ",
      "-	What happened (what was requested, response, changes made, new state)",
      "-	Who made the request, which operator",
      "-	When & where (location & IP address) did they make the request",
      "-	How was the request made"
    ]
  },
  {
    "What is AWS Trusted Advisor? What are the Five Pillars?": [
      "AWS Trusted Advisor is a service that evaluates your AWS environment & applications and provides recommendations (no problems, recommended investigations, recommended actions) for best practives based on the Five Pillars:",
      "-	Cost optimization",
      "-	Performance",
      "-	Security",
      "-	Fault tolerance",
      "-	Service limits"
    ]
  },
  {
    "What are the types of AWS Free Tier?": [
      "-	Always free: do not expire, available to all",
      "-	12 months free: free for 12 months after your initial sign-up date to AWS",
      "-	Trials: short-term free trials start from the date you activate the service"
    ]
  },
  {
    "What are the three AWS Pricing Concepts?": [
      "-	Pay for what you use: pay for the resources you use, no long-term contracts or licensing",
      "-	Pay less when you reserve: discounted reservation option compared to on-demand pricing",
      "-	Pay less with volume-based discounts: tiered pricing so when you use more the per-unit cost is incrementally lower"
    ]
  },
  {
    "What is the AWS Pricing Calculator?": [
      "The AWS Pricing Calculator lets you estimate the cost of your use case on AWS."
    ]
  },
  {
    "What is the AWS Cost Explorer?": [
      "The AWS Cost Explorer is a console-based service that analyzes & creates reports on AWS cost & usage.",
      "It allows you to view your costs and usage for up to the past 13 months, and forecasts the next 12."
    ]
  },
  {
    "What is the AWS Billing and Cost Management Dashboard?": [
      "The AWS Billing and Cost Management Dashboard allows you to pay your bill, monitor your usage, and control and analyze costs."
    ]
  },
  {
    "What is Consolidated Billing?": [
      "Consolidated Billing allows you to view and pay for all of your organization’s various AWS accounts in one bill. (Default max is 4 accts.) You can also use this to share bulk discount pricing between your various accounts."
    ]
  },
  {
    "What is AWS Budgets?": [
      "AWS Budgets allows you to set custom budgets for a variety of scenarios like cost and usage, and sends alerts when costs or usage exceed or are forecasted to exceed the budgeted amount."
    ]
  },
  {
    "Describe the four AWS Support Plans.": [
      "-	Basic Support: Free to all AWS customers, includes: 24/7 customer service access, documentation, whitepapers, support forums, AWS Trusted Advisor, and the AWS Personal Health Dashboard.",
      "-	Developer Tier: Includes all of AWS Basic Support, as well as: emails with customer support and a 24 hour response time, 12 hours if systems are impaired, best practice guidance, client-side diagnostic tools, architecture/AWS tool planning support.",
      "-	Business Tier: Includes previous tier services, plus: Trusted Advisor now opens up the entire suite of checks for your account, direct phone access to support team with a 4 hour response time, 1 hour if prod systems are impaired. Support for infrastructure events. Use-case guidance for AWS offerings, features & services best suited to your needs.",
      "-	Enterprise Tier: Includes previous tier services, plus 15 minute response time, a dedicated technical account manager (TAM). Application architecture guidance, infrastructure event management."
    ]
  },
  {
    "What is the AWS Personal Health Dashboard?": [
      "AWS Personal Health Dashboard provides alerts and remediation guidance when AWS is experiencing events that may impact you."
    ]
  },
  {
    "What is AWS Marketplace?": [
      "AWS Marketplace is a digital catalog of software from independent software vendors that allows you to find, test, and buy third party software that runs on AWS."
    ]
  },
  {
    "What are the six perspectives that the AWS Cloud Adoption Framework describes for migration?": [
      "Business Capabilities:",
      "-	Business: ensures IT aligns with business needs, that IT investments link to business results. (Business managers, finance managers, budget owners, strategy stakeholders.)",
      "-	People: supports development of an organization-wide change management strategy for cloud adoption. This perspective helps to evaluate organizational structures, roles, and skill gaps/requirements. (HR, staffing, people managers.)",
      "-	Governance: the skills and processes to align IT strategy with business strategy—maximizes business value while minimizing risks. (Chief information officer (CIO), program manager, enterprise architect, business analyst, portfolio manager.)",
      "Technical Capabilities:",
      "-	Platform: principles and patterns for implementing new solutions on the cloud, and migrating on-premises workloads to the cloud. Use architectural models to understand and communicate IT structures. (CTO, IT Managers, Solutions architects.)",
      "-	Security: ensures that the organization meets security objectives for visibility, control, and agility. (Chief Information Security Officer (CIFO), IT security managers, IT security analysts.)",
      "-	Operations: helps you to enable, run, use, operate, and recover IT workloads to the level agreed upon with business stakeholders. (IT operations managers, IT support managers.)"
    ]
  },
  {
    "List and Describe the Six Migration Strategies (The Six R's).": [
      "-	Rehosting: “lift-and-shift,” involves moving applications without changes. In a large legacy migration where the company is looking to implement its migration and scale quickly to meet a business case, the majority of applications are rehosted.",
      "-	Replatforming: “lift, tinker, and shift,” involves making a few cloud optimizations to realize a tangible benefit. Optimization is achieved without changing the core architecture of the application.",
      "-	Refactoring/Rearchitecting: involves reimagining how an application is architected and developed using cloud-native features. Refactoring is driven by a strong business need to add features, scale, or performance.",
      "-	Repurchasing: involves moving from a traditional license to a software-as-a-service model. This involves moving to a different product.",
      "-	Retaining: keeping applications that are critical for the business in the source environment.",
      "-	Retiring: removing applications that are no longer needed."
    ]
  },
  {
    "What is AWS Snow Family of Devices? Describe the three Snow Family services.": [
      "AWS Snow Family of Devices helps to copy large scale data to AWS.",
      "-	AWS Snowcone: (2CPUs, 4GB of memory, and 8 TB of storage) is an edge computing and data transfer device that is shipped to you, you load in your data, and send it back to AWS where they copy it into your account.",
      "-	AWS Snowball Edge: AWS Snowball is a petabyte-scale data transport solution that uses secure appliances to transfer large amounts of data into and out of the AWS cloud. AWS Snowball allows yout to caccess the compute power of the cloud locally in places where connecting to the internet might not be an option.",
      "-	AWS Snowmobile: (<100 petabytes of information) an exabyte-scale data transfer service for moving large amounts of data. Arrives in a truck."
    ]
  },
  {
    "What are the Five Pillars of a well-architected framework?": [
      "Operational Excellence: Perform operations as code, make small reversible changes, refine operations frequently, anticipate & learn from failure.",
      "Security: Implement a strong & centralized identity foundation, enable traceability, apply security at all layers (network security, compute instances, apps, code), automate security best practices, protect data in transit and at rest, prepare for security events.",
      "Reliability: Automate recovery from failure, test recovery procedures, scale horizontally, stop guessing capacity, manage changes usign automation, minimize data loss after interruption of service (Recovery Point Objective).",
      "Performanze Efficiency: Delegate complex tasks to SaaS, globalize to minimize latency, use serverless architecture, automate resources, consider mechanical sympathy (technological approach should align with goals).",
      "Cost Optimization: Trade upfront expense for variable expense, utilize cloud data centers, stop guessing capacity, benefit from economies of scale, increase speed and agility, go global."
    ]
  },
  {
    "What are AWS Cost & Usage Reports?": [
      "AWS Cost and Usage Reports provide detailed information about your AWS cost and usage."
    ]
  },
  {
    "What is the AWS Abuse team?": [
      "The AWS Abuse team can assist you when AWS resources are being used to engage in any of the following types of behaviors:",
      "1. Spam",
      "2. Port Scanning",
      "3. Denial of Service Attacks",
      "4. Intrusion Attempts",
      "5. Hosting objectionable or copyrighted content",
      "6. Distributing malware"
    ]
  },
  {
    "What is the AWS Concierge team": [
      "The AWS Concierge team can assist with billing and account management issues."
    ]
  },
  {
    "What is Infrastructure Event Management?":[
      "AWS Infrastructure Event Management is a short-term engagement with AWS Support, included in the Enterprise-level Support product offering, and available for additional purchase for Business-level Support subscribers.",
      "AWS Infrastructure Event Management partners with your technical project resources to provide architectural and scaling guidance for an event. "
    ]
  },
  {
    "What is Amazon RDS?": [
      "Amazon Relational Database Service can help save time on relational database maintenance by providing cost-efficient, resizable capacity while automating time-consuming administration tasks such as hardware provisioning, operating system maintenance, database setup, patching and backups.",
      "DB instances for Amazon RDS for MySQL, MariaDB, PostgreSQL, Oracle, and Microsoft SQL Server use Amazon Elastic Block Store (Amazon EBS) volumes for database and log storage."
    ]
  },
  {
    "AWS Quick Start Reference Deployments": [
      "AWS Quick Start Reference Deployments outline the architectures for popular enterprise solutions on AWS and provide AWS CloudFormation templates to automate their deployment."
    ]
  },
  {
    "What is Amazon EMR?": [
      "Amazon Elastic map reduce processes vast amounts of data, making it easy to set up, operate, and scale big data environments."
    ]
  },
  {
    "How are EC2 instances launched in Linux or Ubuntu billed? Launched from Windows?": [
      "Per-second billing is available for instances launched in Amazon Linux or Ubuntu.",
      "For other instances, including Windows, each partial instance-hour consumed will be billed as a full hour."
    ]
  },
  {
    "What is an AMI?": [
      "An Amazon Machine Image (AMI) is a template that contains a software configuration (for example, an operating system, an application server, and applications). This pre-configured template save time and avoid errors when configuring settings to create new instances. You specify an AMI when you launch an instance, and you can launch as many instances from the AMI as you need. You can also launch instances from as many different AMIs as you need."
    ]
  },
  {
    "What is patching?": [
      "A patch is a set of changes to a computer program or its suppourint data designed to update, fix, or improve it."
    ]
  },
  {
    "What is AWS WAF?": [
      "AWS Web Application Firewall helps protect your web apps or APIs against common web attacks that may compromise availability or security."
    ]
  },
  {
    "What is AWS Lightsail?": [
      "Lightsail is a virtual private server that offers everything you need to build an application or website on a cost-effective monthly plan."
    ]
  },
  {
    "What is the AWS Simple Monthly Calculator?": [
      "The AWS Simple Monthly Calculator helps you estimate your monthly AWS bill more efficiently. The calculator can be used to determine your best and worst case scenarios and identify areas of development to reduce your monthly costs."
    ]
  },
  {
    "What is AWS Chef?": [
      "Chef is an automation patform that helps you automate operational tasks at scale. You can use Chef to manage both Amazon Elastic Compute Cloud (Amazon EC2) instances and on-premises servers running Linux or Windows."
    ]
  },
  {
    "What is AWS OpsWorks?": [
      "AWS OpsWorks is a configuration management service that manages tools like Chef and Puppet that automate operational tasks."
    ]
  },
  {
    "What is MFA?": [
      "MFA is Multi-Factor Authentication."
    ]
  },
  {
    "What is a U2F Security Key?": [
      "Universal 2nd Factor (U2F) security keys are a type of MFA device that you can use to protect your AWS resources. To use, tap the key when prompted to securely complete the sign-in process."
    ]
  },
  {
    "What is a hypervisor?": [
      "A hypervisor, also known as a virtual machine monitor or VMM, is software that creates and runs virtual machines (VMs). A hypervisor allows one host computer to support multiple guest VMs by virtually sharing its resources, such as memory and processing.",
      "Creating hypervisors is the responsibility of AWS."
    ]
  },
  {
    "Describe the two main disaster recovery options.": [
      "- Active-Active: An active-active, or stretched clustering, configuration is the deployment of a second identical live infrastructure which continually replicates with the first site.",
      "- Active-Passive: An active-passive DR solution creates an environment that is not intended to be live for IT production until a disaster is declared by the business."
    ]
  },
  {
    "What is Right-Sizing?": [
      "Right-Sizing is the process of matching instance types and sizes to your workload performance and capacity requirements at the lowest possible cost. By right-sizing before migration, you can significantly reduce your infrastructure costs."
    ]
  },
  {
    "What is AWS Batch?": [
      "AWS Batch dynamically provisions the optimal quantity and type of compute resources (e.g., CPU or memory optimized instances) based on the volume and specific resource requirements of the batch jobs submitted.",
      "AWS Batch plans, schedules, and executes your batch computing workloads across the full range of AWS compute services and features."
    ]
  },
  {
    "What is AWS X-Ray?": [
      "AWS X-Ray helps developers analyze and debug distributed applications in production or under development, such as those built using microservice architecture.",
      "X-Ray provides an end-to-end view of requests as they travel through your application, and shows a map of your application’s underlying components. It can be used to identify and troubleshoot the root cause of performance issues and errors."
    ]
  },
  {
    "What are Read Replicas?": [
      "Amazon RDS Read Replicas provide enhanced performance and durability for RDS database (DB) instances.",
      "You can create one or more replicas of a given source DB Instance and serve high-volume application read traffic from multiple copies of your data, thereby increasing aggregate read throughput."
    ]
  },
  {
    "What is AWS TCO?": [
      "The AWS TCO (Total Cost of Ownership) Calculator is a free tool that provides directional guidance on possible realized savings when deploying AWS."
    ]
  },
  {
    "What is AWS Transit Gateway?": [
      "AWS Transit Gateway is a network transit hub that simplifies how customers interconnect all of their VPCs, across thousands of AWS accounts and into their on-premises networks."
    ]
  },
  {
    "What is AWS Service Catalog?": [
      "AWS Service Catalog allows organizations to create and manage catalogs of IT services that are approved for use on AWS.",
      "AWS Service Catalog allows you to centrally manage commonly deployed IT services, and helps you achieve consistent governance and meet your compliance requirements, while enabling users to quickly deploy only the approved IT services they need."
    ]
  },
  {
    "What is Application Discovery Service?": [
      "AWS Application Discovery Service helps systems integrators quickly and reliably plan application migration projects by automatically identifying applications running in on-premises data centers, their associated dependencies, and their performance profiles."
    ]
  },
  {
    "What is Amazon Cognito?": [
      "Amazon Cognito lets customers add user sign-up, sign-in, and access control to their web and mobile apps quickly and easily. Amazon Cognito scales to millions of users and supports sign-in with social identity providers, such as Facebook, Google, and Amazon, and enterprise identity providers via SAML 2.0."
    ]
  },
  {
    "What are Security Bulletins?": [
      "AWS publishes security bulletins about the latest security and privacy events with AWS services on the Security Bulletins page."
    ]
  },
  {
    "What are AWS Resource Groups?": [
      "If you work with multiple resources in multiple environments, you might find it useful to manage all the resources in each environment as a group rather than move from one AWS service to another for each task. With the Resource Groups tool, you can create a custom console that organizes and consolidates information based on your project and the resources that you use."
    ]
  },
  {
    "What is AWS CloudHSM?": [
      "AWS CloudHSM is a cloud-based hardware security module (HSM) that enables you to easily generate and use your own encryption keys on the AWS Cloud."
    ]
  },
  {
    "What is AWS Control Tower?": [
      "You can use AWS Control Tower or AWS Organizations to set up and manage a secure, well-architected, multi-account AWS environment. With AWS Organizations, you build your environment from the ground up, which requires more upfront effort with full control over every aspect of your environment. AWS Control Tower provides built-in best-practice blueprints, guardrails, and automation features that help you build your multi-account environment quickly and easily."
    ]
  },
  {
    "What is Federation?": [
      "With Federation, you can use single sign-on (SSO) to access your AWS accounts using credentials from your corporate directory. Federation uses open standards, such as Security Assertion Markup Language 2.0 (SAML), to exchange identity and security information between an identity provider (IdP) and an application."
    ]
  },
  {
    "What is AWS Cloud9?": [
      "AWS Cloud9 is a cloud-based integrated development environment (IDE) that lets you write, run, and debug your code with just a browser. It includes a code editor, debugger, and terminal."
    ]
  },
  {
    "What is AWS Config?": [
      "AWS Config and AWS CloudTrail are change management tools that help AWS customers audit and monitor all resource and configuration changes in their AWS environment.",
      "Customers can use AWS Config to answer 'What did my AWS resource look like?' at a point in time. Customers can use AWS CloudTrail to answer 'Who made an API call to modify this resource?'"
    ]
  },
  {
    "What is AWS Storage Gateway?": [
      'AWS Storage Gateway is a hybrid storage service that enables on-premises applications to seamlessly use AWS cloud storage. Enterprises can use the service for backup and archiving, disaster recovery, cloud data processing, storage tiering, and migration.'
    ]
  },
  {
    "What is Amazon Cloud Directory": [
      "Amazon Cloud Directory allows the organization of hierarchies of data across multiple dimensions."
    ]
  }
]

export default cards