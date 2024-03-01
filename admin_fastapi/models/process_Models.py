from typing import Optional

from pydantic import BaseModel

from sqlmodel import SQLModel, Relationship, Field


class Process(SQLModel, table=True):
    __tablename__ = "processes"

    id: Optional[int] = Field(default=None, nullable=False, primary_key=True)
    user_id: Optional[int] = Field(default=None, foreign_key="users.id")

    customer_name: str
    customer_surname: str
    process_name: str
    process_quantity: int
    process_price: float

    user: "User" = Relationship(back_populates="process", sa_relationship_kwargs={'lazy': 'selectin'})


## SCHEMAS
class process_log(BaseModel):
    customer_name: str
    customer_surname: str
    process_name: str
    process_quantity: str
    process_price: str