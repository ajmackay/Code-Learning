library(purrr)
library(tibble)
# map_vec()
  # To be used on vectors that have unique variable types to give you the output in that same type
  # Length of output must equal length of input (alternative is to use map() which returns a list so you can have multiple elements in each item)

## Dates
map_vec(1:3, \(i) Sys.Date() + 1)
map_vec(1:3, function(i) Sys.Date() + 1)

## Factors
map_vec(letters[1:3], \(l) factor(l))
map_vec(letters[1:3], function(l) factor(l))


# list...() functions

## Concatenate List
  ## Usually map returns a list with separate elements
map(1:3, \(x) c(x, x))
map(1:3, \(x) c(x, x)) %>% class()

  ## Now you can easily turn it into a vector
map(1:3, \(x) c(x, x)) %>% list_c()
map(1:3, \(x) c(x, x)) %>% list_c() %>% class()

## list_rbind() and list_cbind() have superseded map_dfr() and map_dfc()
x.df <- tibble(x = runif(100),
       y = runif(100),
       z = runif(100))

y.df <- tibble(x = runif(100),
               y = runif(100),
               z = runif(100))

z.df <- tibble(x = runif(100),
               y = runif(100),
               z = runif(100))

list.df <- list(
  x.df,
  y.df,
  z.df
)

map_dfr(list.df, \(x) x + 1) # Should now be
map(list.df, \(x) x + 1) %>% list_rbind()

# Flattening and Simplification
## list_flatten()
x <- list(1, list(2, list(3, 4), 5))
str(x)
x %>% list_flatten() %>% list_flatten() %>% list_simplify()
