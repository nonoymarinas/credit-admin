class Province:
    def __init__(
        self,
        region_id: int = None,
        province_id=None,
        province_name: str = None,
    ):
        self.region_id = region_id
        self.province_id = province_id
        self.province_name = province_name

    def to_dict(self):
        return {
            "region_id": self.region_id,
            "province_id": self.province_id,
            "province_name": self.province_name,
        }
