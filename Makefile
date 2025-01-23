lines?=1000

compose=sudo docker compose

start:
	$(compose) up --build -d

stop:
	$(compose) down node
	$(compose) down dws
	
stop-db:
	$(compose) down -t=180 node-db
	$(compose) down -t=180 dws-db

restart:
	$(compose) down node
	$(compose) down dws
	$(compose) up --build -d node
	$(compose) up --build -d dws

logs-node:
	$(compose) logs -f --tail=$(lines) node

logs-dws:
	$(compose) logs -f --tail=$(lines) dws