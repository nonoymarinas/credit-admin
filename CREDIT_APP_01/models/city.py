class City:
    def __init__(
        self,
        province_id=None,
        city_id: int = None,
        city_name: str = None,
    ):
        self.province_id = province_id
        self.city_id = city_id
        self.city_name = city_name

    def to_dict(self):
        return {
            "province_id": self.province_id,
            "city_id": self.city_id,
            "city_name": self.city_name,
        }
