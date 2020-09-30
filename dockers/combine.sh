docker-compose \
  -f ./dockers/docker-compose.yml \
  -f dockers/docker-compose.rabbitmq.yml \
  -f dockers/docker-compose.monitor.yml \
  ${@}
