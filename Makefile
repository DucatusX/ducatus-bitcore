lines?=1000

compose=sudo docker compose -f docker-compose.yml

start:
	$(compose) up --build -d

pause:
	$(compose) stop

stop:
	$(compose) down

restart:
	$(compose) stop
	$(compose) up -d

logs:
	$(compose) logs -f --tail=$(lines)