lines?=1000

compose=sudo docker compose

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
	sudo docker compose logs -f --tail=$(lines) node

logs-dws:
	sudo docker compose logs -f --tail=$(lines) dws