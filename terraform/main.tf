resource "google_container_cluster" "gke_cluster" { 
  project            = "diorama-cloud"
  name               = var.cluster_name
  location           = var.location
  node_locations     = ["us-west1-c"]
  initial_node_count = 1
  remove_default_node_pool = true
  node_config {
    machine_type = "e2-medium"
  }
  # Set `deletion_protection` to `true` will ensure that one cannot
  # accidentally delete this instance by use of Terraform.
  deletion_protection = false
}
resource "google_container_node_pool" "primary_preemptible_nodes" {
  project    = google_container_cluster.gke_cluster.project
  name       = "my-node-pool"
  location   = google_container_cluster.gke_cluster.location
  cluster    = google_container_cluster.gke_cluster.name
  node_count = 2

  node_config {
    preemptible  = true
    machine_type = "e2-medium"

  }
}