macos ile hazırlandı
env aşağıdaki kod ile oluşturduk
1 - python3 -m venv env
2 - source env/bin/activate


asyncpg           0.29.0
fastapi           0.110.0
greenlet          3.0.3
sqlmodel          0.0.9
uvicorn           0.27.1
alembic

bunları kurduktan sonra

docker_postgresql içerisindeki 
1 - local_pgdata
2 - pgadmin_data 
klasörlerini oluşturduk

sonrasında docker-compose up ile başlatıldı.

uvicorn main:app --reload
uygulamayı çalıştırdık.
localhost:8000/docs  adresine gittiğimizde swagger sayfasını görebiliyoruz.

yeni bir şey oluşturulduğu zaman 
alembic revision --autogenerate -m "init" 
revizyon atılır 
alembic upgrade head
veri tabanı güncellenir