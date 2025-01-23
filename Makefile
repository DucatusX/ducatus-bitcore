lines?=1000

compose=sudo docker compose

start:
	$(compose) up --build -d

stop:
	$(compose) stop node
	$(compose) stop dws
	
stop-db:
	$(compose) stop -t=180 node-db
	$(compose) stop -t=180 dws-db

restart:
	$(compose) stop node
	$(compose) stop dws
	$(compose) up --build -d node
	$(compose) up --build -d dws

logs-node:
	$(compose) logs -f --tail=$(lines) node

logs-dws:
	$(compose) logs -f --tail=$(lines) dws