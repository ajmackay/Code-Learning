# Install "librarian" not already installed
if(!"librarian" %in% installed.packages()){
  install.packages("librarian")
}

packages <- c("dcutilities", "rforce")

# Automatically install any packages that are required that are not already installed
librarian::shelf(packages)

message(crayon::green(str_c(glue::glue_collapse(packages,sep = ", ", last = " and "), " have been loaded")))


