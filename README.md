# Rabbitmq Playground

## env file

`dockers/.env` 檔案是使用 docker-compose 可以參考的 env 檔，要使用時請改名 `.env` 且移動到專案根目錄

## Services

`dockers` 底下有五個 services：

### 1. rabbitmq

* docker-file: `dockers/Dockerfile.rabbitmq`
* docker-compose: `dockers/docker-compose.rabbitmq.yml`
* conf.d: `dockers/rabbitmq/conf.d`

### 2. consumer

* rabbitmq message consumer
* docker-file: `dockers/Dockerfile.consumer`
* docker-compose: `dockers/docker-compose.yml`
* env
    - `RABBITMQ_HOST`
    - `RABBITMQ_PORT`
    - `RABBITMQ_USERNAME`
    - `RABBITMQ_PASSWORD`
    - `RABBITMQ_QUEUE_NAME`
    - `RABBITMQ_PREFETCH_COUNT`

### 3. producer

* rabbitmq message producer
* docker-file: `dockers/Dockerfile.producer`
* docker-compose: `dockers/docker-compose.yml`
* env
    - `RABBITMQ_HOST`
    - `RABBITMQ_PORT`
    - `RABBITMQ_USERNAME`
    - `RABBITMQ_PASSWORD`
    - `RABBITMQ_QUEUE_NAME`
* endpoints:
    * `/send`
        * `message=<message>`
        * `numberOfMessages=<number>`: 要發幾個訊息進去 rabbitmq queue
        * `processTimeMin=<number, ms>`: 每個訊息在 comsumer 要處理多久的下限（模擬 task 處理時間）
        * `processTimeMax=<number, ms>`: 每個訊息在 comsumer 要處理多久的上限（模擬 task 處理時間）
        * `/send?message=hello&numberOfMessages=100&processTimeMin=20&processTimeMax=220`

### 4. prometheus

* docker-compose: `dockers/docker-compose.monitor.yml`
* conf: `dockers/prometheus/prometheus.yml`

### 5. grafana

* docker-compose: `dockers/docker-compose.monitor.yml`
* conf/dashboard: `dockers/grafana`
    * dashboard 是從 https://grafana.com/grafana/dashboards/10991 下載來的
* 如果是用 docker compose，在設定 dataSource 的時候 url 記得用 compose 的 domain
