class Gender:
    def __init__(
        self,
        gender_id: int = None,
        gender_name: str = None,
    ):
        self.gender_id = gender_id
        self.gender_name = gender_name

    def to_dict(self):
        return {"gender_id": self.gender_id, "gender_name": self.gender_name}
