import { ICard } from './card'

const cards: ICard[] = [
  {
    "What is cloud computing?": [
      "Cloud computing is the on-demand delivery of IT resources over the internet with pay-as-you-go pricing.",
      "Instead of buying, owning, & maintaining physical data centers and servers, you can access computing power, storage, and databases on an as-needed basis from a cloud provider."
    ]
  },
  {
    "What are the three benefits of cloud computing?": [
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
    "What is Elastic Compute Cloud, or EC2?": [
      "EC2 is a service for spinning up instances of virtual machines (with provisions such as OS, software, and DBs) that allows you to access virtual servers.",
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
    "What is Elastic Load Balancing?": [
      "Elastic Load Balancing is the AWS service that automatically distributes incomin application traffic across multiple resources such as EC2 instances.",
      "A load balancer is a single point of contact that routes all web traffic incoming to your Auto Scaling group."
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
    "What is a Docker Container": [
      "Docker is a platform that uses OS level virtualizatin to deliver software in containers.",
      "A Container is a package for your application, dependencies, and configurations that runs on top of an EC2 instance, giving you full access to the underlynig OS."
    ]
  },
  {
    "What is a serverles environment?": [
      "A serverless environment is a compute option in which AWS manages the underlying infrastructure (provisioning, scaling, availability, maintenance) to your application. ",
      "Ex. AWS Lambda allows you to upload your code into a Lambda function and configure a trigger event. The function will run but AWS will maintain the environment."
    ]
  },
  {
    "What is Elastic Container Service (ECS)?": [
      "Elastic Container Service is a scalable, high performance container management system (CMS) that enables you to run and scale containerized AWS applications."
    ]
  },
  {
    "What is Elastic Kubernetes Service (EKS)?": [
      "Elastic Kubernetes Service is a managed service that can be used to run Kubernetes, an open source software that enables deployment and management or containerized apps at scale."
    ]
  },
  {
    "What is AWS Fargate?": [
      "AWS Fargate is a serverless compute engine for containers which manages server infrastructure.",
      "AWS Fargate works with both Elastic Container Service and Elastic Kubernetes Service."
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
      "An Availability Zone is a discretedata center or group of data centers within a Region. It is a fully isolated portion of the AWS global infrastructure."
    ]
  },
  {
    "What is an Edge Location?": [
      "An Edge Location is a location far from an AWS Region. An AWS customer can push content from inside a region to a collection of Edge Locations to accelerate content delivery to users."
    ]
  },
  {
    "What is a Amazon Cloudfront?": [
      "Amazon Cloudfront is Amazon's Content Delivery Network (CDN), which helps deliver data, video, applications, and APIs to customers around the world with low latency.",
      "Content Delivery Networks allow you to locally cashe data being requested by users far from either the Region where data is hosted or any other Region."
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
      "AWS Management Console is a web-based interface for accessing and managing AWS services.",
      "AWS Management Console allows you to monitor resources, view alarms, and access billing information."
    ]
  },
  {
    "What is AWS Command Line Interface?": [
      "AWS Command Line Interface allows you to control multiple AWS services directly from the command line.",
      "It also allows you to write scripts to automate service actions."
    ]
  },
  {
    "What are Software Development Kits (SDKs)?": [
      "Software Development Kits make it easier to use AWS services through an API designed for relevant languages/platforms."
    ]
  },
  {
    "What is AWS Elastic Beanstalk?": [
      "The AWS customer provides AWS Elastic Beanstalk the code and configuration, then AWS Elastic Beanstalk deploys the resources necessary to do the following: ",
      "•	Adjust capacity",
      "•	Load balance",
      "•	Automatically scale",
      "•	Monitor application health"
    ]
  },
  {
    "What is AWS CloudFormation?": [
      "AWS CloudFormation allows you to treat your infrastructure as code.",
      "You define what you want to build without specifying the edact details of how to build it. CloudFormation will complete the details on API calls to build it out."
    ]
  },
  {
    "What is Amazon Virtual Private Cloud (VPC)?": [
      "Amazon Virtual Private Cloud is a private, logically isolated network provisioned in AWS",
      "You control what traffic gets into your VPC by provisioning your private IP range.",
      "VPC resources can be public/user facing subnets or private subnets with no internet access."
    ]
  },
  {
    "What is a subnet?": [
      "A subnet is a seciton of a VPC that allows you to control whether a group of resources apr privately or publicly available.",
      "A Public Subnet contains resources that need to be accessible to the public such as an online store's website.",
      "A Private Subnet contains resources that should  be accessible only through your private network, such as a database that contains customers personal information."
    ]
  },
  {
    "What is an Internet Gateway (IGW)? Virtual Private Gateway?": [
      "An Internet Gatewat is a doorway to your VPC that is open to the public. It allows you to regulate traffic from the public internet in & out of your VPC.",
      "A Virtual Provate Gateway is an access point to private VPC roseources  that only allows users in if they have a Virtual Private Network connection (VPN)."
    ]
  },
  {
    "What is AWS Direct Connect?": [
      "AWS Direct Connect allows you to establish a dedicated, private, direct physical fiber connection from your data center to AWS."
    ]
  },
  {
    "What is a Network Access Control List (ACL)?": [
      "Every packet that crosses the boundaries of a subnet gets checked against the network's Access Control List to see if it has permissions to either leave or enter the subnet based on whence it was sent and how it is trying to communicate.",
      "By default an ACL allows all inbound and outbound traffic.",
      "Network Access Control Lists perform stateless packet filtering, meaning they remember nothing and check every packet passing in and out."
    ]
  },
  {
    "What is a Security Group?": [
      "A Security Group is a v irtual firewall that evaluates permissions for the resources within a subnet that a package is requesting.",
      "At its instantiation, a Security Group denies all inbound traffic to and denies all outbound traffic from the EC2 instance, but it should be modified to allow specific types of traffic.",
      "Security Groups are stateful, meaning they rememver previous decisions made for incoming packets."
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
      "Amazon Route 53 is a DNS web service that gives developers and businesses a reliable way to route end users to internet apps/infrastructure hosted in AWS."
    ]
  },
  {
    "What is Amazon Elastic Block Store (EBS)?": [
      "Elastic Block Store allows you to create virtual hard drives called EBS volumes that can be attached to EC2 instances but aren't directly tied to the host your EC2 is running on. Thie means that the data persists even if you terminate the EC2 instance.",
      "Upon change, block storage only updates the blocks where changed elements live.",
      "EBS Volumtes allow for incremental backups called EBS snapshots of only the data that has been changed."
    ]
  },
  {
    "What is an Instance Store?": [
      "An Instance Store provides temporary block-level storage for an EC2 instance. Disc storage is physically attached to the host computer and therefore is lost when the instance is terminated."
    ]
  },
  {
    "What is Amazon Simple Storage Service (S3)?": [
      "Amazon Simple Storage Service is a service that allows you to store and retrieve an unlimited amount of object-level data of any type as objects in buckets. It also allows you to set permissions for visibility and access.",
      "Data in S3 are stored as objects -- data, metadata, and keys with a max size of 5 terabytes -- in buckets which can be assigned permissions tiers.",
      "S3 treates any file as a complete, discrete object, meaning any change to stored files is expensive"
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
    "What is Amazon Elastic File System (EFS)?": [
      "Amazon Elastic File System is a scalable managed file system and data storage service that allows you to have multiple instances accessing (reading and/or writing) the data in EFS at the same time.",
      "EFS can be used as a shared file system across a business. It scales as needed and stores across multiple Availability Zones."
    ]
  },
  {
    "What is Amazon Aurora?": [
      "Amazon Aurora is a managed relational database service that is compatible with MySql and PostgreSQL."
    ]
  },
  {
    "What is DynamoDB?": [
      "DynamoDB is a serverless database, meaning Amazon manages underlying infrastructure.",
      "Dynamo DB is a non-relatopnal database, meaning is has flexible schemas and can lay out multiple tables with items that have unmatched attributes."
    ]
  },
  {
    "What is Amazon Redshift?": [
      "Amazon Redshift is a scalable data warehousing service."
    ]
  },
  {
    "AWS Database Migration Service": [
      "AWS Database Migration Service helos customers migrate existing databases onto AWS without disabling the source database.",
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
      "Amazon ElastiCache is a service that provides caching layers to improve read time for common requests. It supports Redis and Memcached data stores."
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
      "A given IAM user represents a person or app that inteacts with AWS services and resources. When an IAM user is created they default to having no permissions, and each permission must be given explicitly by applying an IAM policy to the user or group."
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
    "What is an AWS Organization?": [
      "An AWS Organization is a central location for managing multiple AWS accounts. It allows you to group accounts hierarchically to meet regulatory requirements.",
      "Organizational accounts are groupings of accounts which inherit their Organizational Unit's security policies.",
      "AWS Organizations automatically create a root parent container for all of the organization accounts."
    ]
  },
  {
    "What is AWS Artifact?": [
      "AWS is a service that provides on-demand access to AWS security and compliance reports and select online agreements.",
      "AWS Artifact Agreements allow you to review, accept, and manage agreements for an individual account or for all accounts in AWS Organizations.",
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
      "AWS Shield Advanced is a paid service that provides detailed attack diagnostics and the ability to detect and mitigate sophisticated DDoS attacks. It can also integrate with AWS WAF by writing custom rules to mitigate complex DDoS attacks. "
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
    "What is Amazon Key Management Service?": [
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
    "What is AWS Marketplace?": [
      "AWS Marketplace is a digital catalog of software from independent software vendors that allows you to find, test, and buy software that runs on AWS."
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
    "List and Describe the Six Migration Strategies.": [
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
      "-	AWS Snowball Edge: Customers usually ship these to remote locations where it’s hard to have a lot if computer power. They come in two versions:",
      "    -	Compute Optimized: Well suited to machine learning, video analysis, and local computing stacks.",
      "      	Storage: 42 TB HDD for storage, and 7.68 for block volumes",
      "      	Compute: 52 vCPUs, 208 GiB of memory.",
      " 	 - Storage Optimized: Well suited for large scale data migrations and recurring transfer workflows.",
      "      	Storage: 80TB of hard disk drive, 1TB of SATA solid state drive.",
      "      	Compute: 40vCPUs, 80 GiB of memory.",
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
]

export default cards