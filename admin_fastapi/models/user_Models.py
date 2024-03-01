from typing import Optional, List

from pydantic import BaseModel

from sqlmodel import SQLModel, Relationship, Field

from models.process_Models import Process


class User(SQLModel, table=True):
    __tablename__ = "users"

    id: Optional[int] = Field(default=None, nullable=False, primary_key=True)

    user_name: str
    user_surname: str
    user_mail: str

    user_password: str

    process: List[Process] = Relationship(back_populates="user", sa_relationship_kwargs={'lazy': 'selectin'})

    
## SCHEMAS
class user_log(BaseModel):
    id: Optional[int]
    
    user_name: str
    user_surname: str   
    user_mail: str

    process: List[Process]
