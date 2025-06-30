class Suffix:
    def __init__(
        self,
        suffix_id: int = None,
        suffix_name: str = None,
    ):
        self.suffix_id = suffix_id
        self.suffix_name = suffix_name

    def to_dict(self):
        return {"suffix_id": self.suffix_id, "suffix_name": self.suffix_name}
