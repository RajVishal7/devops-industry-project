# 🚀 DevOps Industry-Level Project

## 📌 Project Overview

This project demonstrates a complete **end-to-end DevOps workflow** by building, containerizing, and deploying a full-stack application using modern DevOps tools.

It covers real-world practices including Docker, Kubernetes, Helm, CI/CD, and AWS deployment.

---

## 🛠️ Tech Stack

* **Frontend**: React
* **Backend**: Node.js
* **Containerization**: Docker
* **Orchestration**: Kubernetes (Minikube)
* **Package Manager**: Helm
* **CI/CD**: Jenkins
* **Cloud**: AWS EC2
* **Registry**: DockerHub

---


## 📂 Project Structure

```
devops-industry-project/
│
├── app/                 # Application source code (frontend + backend)
├── docker/              # Dockerfiles and related configs
├── k8s/                 # Kubernetes manifests / Helm chart
│   └── devops-chart/
├── Jenkinsfile          # CI/CD pipeline
├── docker-compose.yml   # Local development setup
├── README.md
└── .dockerignore
```

---

## ⚙️ DevOps Workflow

### 1️⃣ Containerization (Docker)

* Created Docker images for frontend & backend
* Pushed images to DockerHub

---

### 2️⃣ CI/CD Pipeline (Jenkins)

* Automated:

  * Code pull from GitHub
  * Docker build & push
  * Deployment trigger

---

### 3️⃣ Kubernetes Deployment

* Used **Minikube** cluster on AWS EC2
* Created:

  * Deployment
  * Service (NodePort)

---

### 4️⃣ Helm Integration

* Created custom Helm chart
* Managed configurations using `values.yaml`
* Deployed using:

```bash
helm install devops-release ./k8s/devops-chart
helm upgrade devops-release ./k8s/devops-chart
```

---

### 5️⃣ Application Access

Since Minikube runs in an internal Docker network, the service is accessed using SSH tunneling:

```bash
ssh -i key.pem -L 8080:192.168.49.2:30007 ubuntu@<EC2-IP>
```

👉 Open in browser:

```
http://localhost:8080
```

---

## 🚧 Challenges & Solutions

### 🔹 Low Resource (2GB RAM EC2)

* Minikube failed due to memory limits
* Solution:

  * Optimized memory usage
  * Stopped unnecessary containers

---

### 🔹 Docker Storage Issue

* Error: `no space left on device`
* Solution:

```bash
docker system prune -a -f
```

---

### 🔹 Helm YAML Errors

* Faced multiple YAML parsing errors
* Fixed:

  * Indentation issues
  * Missing values (ingress, autoscaling, image fields)

---

### 🔹 NodePort Not Accessible

* Could not access via EC2 public IP
* Solution:

  * Used SSH port forwarding

---

## 📚 Key Learnings

* Real-world Kubernetes deployment
* Helm chart customization
* CI/CD pipeline integration
* Debugging production-level issues
* Handling resource-constrained environments

---

## 🔥 Future Improvements

* Deploy on **AWS EKS**
* Implement **Blue-Green Deployment**
* Add **Ingress + Domain**
* Monitoring using **Prometheus & Grafana**

---

## 🎯 Conclusion

This project provided hands-on experience with real DevOps tools and workflows including containerization, orchestration, CI/CD automation, and cloud deployment.

---

## 🙌 Author

**Vishal Kumar**

