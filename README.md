# act03-contenedores-k8s
Actividad 03 grupal en la materia de contenedores en UNIR.

## Estructura
Este monorepo tiene la siguiente estructura
### Node App
Aplicación de NodeJS reusada de la actividad 2. Expone una simple API con métodos GET y POST sobre una "lista TODO:" y sirve un html básico.
Se conecta a MongoDB mediante variable de entorno MONGO_URL.

Contiene un Dockerfile para ser construida y expuesta en el puerto 3000.

### Terraform
TODO: estructura inicial de TF en AWS, usando EKS

### Kubernetes K8S
Ficheros declarativos de K8S con todos sus workloads.

## Participantes
Facundo
Javier
Aleks

