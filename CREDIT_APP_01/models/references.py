from typing import List
from .suffix import Suffix
from .gender import Gender


class Reference:
    def __init__(self):
        self.suffixes: List[Suffix] = []
        self.genders: List[Gender] = []
        self.status_code_number = None  # Add this if missing

    def to_dict(self):
        return {
            "suffixes": [s.to_dict() for s in self.suffixes],
            "genders": [g.to_dict() for g in self.genders],
            "statusCodeNumber": self.status_code_number,  # ✅ Add this
        }
