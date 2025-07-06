from typing import List
from .suffix import Suffix
from .gender import Gender
from .country import Country
from .region import Region
from .province import Province
from .city import City
from .civil_status import CivilStatus


class Reference:
    def __init__(self):
        self.suffixes: List[Suffix] = []
        self.genders: List[Gender] = []
        self.countries: List[Country] = []
        self.regions: List[Region] = []
        self.provinces: List[Province] = []
        self.cities: List[City] = []
        self.civil_statuses: List[CivilStatus] = []
        self.status_code_number: int = None

    def to_dict(self):
        return {
            "suffixes": [s.to_dict() for s in self.suffixes],
            "genders": [g.to_dict() for g in self.genders],
            "countries": [c.to_dict() for c in self.countries],
            "regions": [r.to_dict() for r in self.regions],
            "provinces": [p.to_dict() for p in self.provinces],
            "cities": [c.to_dict() for c in self.cities],
            "civil_statuses": [cs.to_dict() for cs in self.civil_statuses],
            "statusCodeNumber": self.status_code_number,
        }
