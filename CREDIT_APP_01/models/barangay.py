class Barangay:
    def __init__(
        self,
        city_id: int = None,
        barangay_id: int = None,
        barangay_name: str = None,
    ):
        self.city_id = city_id
        self.barangay_id = barangay_id
        self.barangay_name = barangay_name

    def to_dict(self):
        return {
            "city_id": self.city_id,
            "barangay_id": self.barangay_id,
            "barangay_name": self.barangay_name,
        }
