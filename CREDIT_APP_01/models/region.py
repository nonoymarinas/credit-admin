class Region:
    def __init__(
        self,
        country_id: int = None,
        region_id: int = None,
        region_name: str = None,
    ):
        self.country_id = country_id
        self.region_id = region_id
        self.region_name = region_name

    def to_dict(self):
        return {
            "country_id": self.country_id,
            "region_id": self.region_id,
            "region_name": self.region_name,
        }
