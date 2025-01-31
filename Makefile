lines?=1000

compose=sudo docker compose

start:
	$(compose) up --build -d

stop:
	$(compose) stop node dws
	
stop-db:
	$(compose) stop -t=300 node-db
	$(compose) stop -t=300 dws-db

restart:
	$(compose) stop node dws
	$(compose) up --build -d node dws

logs-node:
	$(compose) logs -f --tail=$(lines) node

logs-dws:
	$(compose) logs -f --tail=$(lines) dws