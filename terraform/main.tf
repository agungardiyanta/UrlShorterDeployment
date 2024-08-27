resource "google_container_cluster" "gke_cluster" { 
  project            = "diorama-cloud"
  name               = var.cluster_name
  location           = var.location
  node_locations     = ["us-west1-c"]
  initial_node_count = 1
  node_config {
    machine_type = "e2-medium"
  }
  # Set `deletion_protection` to `true` will ensure that one cannot
  # accidentally delete this instance by use of Terraform.
  deletion_protection = false
}