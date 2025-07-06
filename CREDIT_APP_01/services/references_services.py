from ..dal.reference_dal import ReferenceDal_Supabase


class NewDebtorReferenceService:
    def __init__(self):
        self.reference_dal = ReferenceDal_Supabase()

    def get_references(self):
        return self.reference_dal.get_all_references()
