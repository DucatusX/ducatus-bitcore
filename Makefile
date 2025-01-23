lines?=1000

compose=sudo docker compose

start:
	$(compose) up --build -d

stop:
	$(compose) down node
	$(compose) down dws
	
stop-db:
	$(compose) down -t=60 node-db
	$(compose) down -t=60 dws-db

restart:
	$(compose) restart node
	$(compose) restart dws

logs-node:
	$(compose) logs -f --tail=$(lines) node

logs-dws:
	$(compose) logs -f --tail=$(lines) dws