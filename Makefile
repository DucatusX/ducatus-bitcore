lines?=1000

compose=sudo docker-compose

start:
	$(compose) up --build -d

pause:
	$(compose) stop

stop:
	$(compose) down

restart:
	$(compose) down
	$(compose) up --build -d

logs-node:
	$(compose) logs -f --tail=$(lines) node

logs-dws:
	$(compose) logs -f --tail=$(lines) dws