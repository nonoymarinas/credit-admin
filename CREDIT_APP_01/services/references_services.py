from ..dal.reference_dal import ReferenceDAL


class NewDebtorReferenceService:
    def __init__(self):
        self.reference_dal = ReferenceDAL()

    def get_references(self):
        return self.reference_dal.get_all()
