class CivilStatus:
    def __init__(
        self,
        civil_status_id: int = None,
        civil_status_name: str = None,
    ):
        self.civil_status_id = civil_status_id
        self.civil_status_name = civil_status_name

    def to_dict(self):
        return {
            "civil_status_id": self.civil_status_id,
            "civil_status_name": self.civil_status_name,
        }
