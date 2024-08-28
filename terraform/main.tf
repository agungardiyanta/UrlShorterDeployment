resource "google_container_cluster" "gke_cluster" {
  project            = "diorama-cloud"
  name               = var.cluster_name
  location           = var.location
  node_locations     = ["us-west1-c"]
  initial_node_count = 1
  deletion_protection = false

  # Remove default node pool
  remove_default_node_pool = true
}

resource "google_container_node_pool" "second_preemptible_nodes" {
  project    = google_container_cluster.gke_cluster.project
  name       = "second-node-pool"
  location   = google_container_cluster.gke_cluster.location
  cluster    = google_container_cluster.gke_cluster.name
  node_count = 2

  node_config {
    preemptible  = true
    machine_type = "e2-highcpu-4"
  }
}
