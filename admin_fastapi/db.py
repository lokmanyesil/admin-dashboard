from sqlmodel import SQLModel, create_engine
from sqlmodel.ext.asyncio.session import AsyncSession, AsyncEngine

from sqlalchemy.orm import sessionmaker


engine = AsyncEngine(create_engine('postgresql+asyncpg://root:root@localhost:5432/postgres', future=True))

## Veri tabanı tablo işlemleri
async def init_db():
    async with engine.begin() as conn:
        await conn.run_sync(SQLModel.metadata.create_all)


## Veri tabanı işlemleri (CRUDS) için session oluşturuyor. 
async def get_session() -> AsyncSession:
    async_session = sessionmaker(
        engine, class_=AsyncSession, expire_on_commit=False
    )
    async with async_session() as session:
        yield session