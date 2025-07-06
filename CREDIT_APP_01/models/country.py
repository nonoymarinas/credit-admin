class Country:
    def __init__(
        self,
        country_id: int = None,
        country_name: str = None,
    ):
        self.country_id = country_id
        self.country_name = country_name

    def to_dict(self):
        return {
            "country_id": self.country_id,
            "country_name": self.country_name,
        }
