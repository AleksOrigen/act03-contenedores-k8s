variable "subnet_ids" {
  description = "IDs de las subredes para el clúster EKS"
  type        = list(string)
}

variable "region" {
  description = "AWS region, defaults to N.Virginia"
  type        = string
  default     = "us-east-1"
}

variable "profile" {
  description = "AWS profile"
  type        = string
  default     = "default"
}

variable "environment" {
  description = "The environment name"
  type        = string
  default     = "dev"
}
