if(!exists("packages")){
  source("scripts/load-packages.R")
}

# query.list = load.queries()
force.dwnld = TRUE

cases.q <- pull.data(query.list$cases, force.dwnld)
rach.q <- pull.data(query.list$rach.q, force.dwnld)
npi.q <- pull.data(query.list$npi, force.dwnld)
