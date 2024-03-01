# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

#Backend İçin

1 - Kullanılan kütüphaneler
  * asyncpg           
  * fastapi           
  * greenlet          
  * sqlmodel  0.0.9 sürüm olarak kurulum gerçekleştirilecek.
  * uvicorn           
  * alembic

2 - Env kurulu gerçekleştirildi.
  * python3 -m venv env
  * source env/bin/activate

3 - docker_postgresql içerisindeki 
  * local_pgdata
  * pgadmin_data  
  * klasörlerini oluşturduk.
  * sonrasında docker-compose up ile başlatıldı.

4 - uvicorn main:app --reload uygulamayı çalıştırdık.

5 - localhost:8000/docs  adresine gittiğimizde swagger sayfasını görebiliyoruz.

6 - http://localhost:8080/ veritabanı adresi.
