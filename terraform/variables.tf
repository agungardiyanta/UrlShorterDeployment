variable "project_id" {
  description = "project_id"
  type        = string
  default = "diorama-cloud"
}

variable "cluster_name" {
    description = "cluster name"
    type = string
    default = "sandboxgke"
  
}
variable "location" {
    description = "cluster location"
    type = string
    default = "us-west1"
}
