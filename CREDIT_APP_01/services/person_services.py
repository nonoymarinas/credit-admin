from ..dal.person_dal import PersonDAL
from ..models.person import Person


class PersonService:
    def __init__(self):
        self.person_dal = PersonDAL()

    def get_all_persons(self):
        return self.person_dal.get_all()
