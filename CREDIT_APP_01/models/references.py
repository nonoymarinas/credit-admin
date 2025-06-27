from typing import List


class Suffix:
    def __init__(self, suffix_name=None, suffix_id=None):
        self.suffix_name = suffix_name
        self.suffix_id = suffix_id


class NewApplicantReference:
    def __init__(self):
        self.suffixes: List[Suffix] = []
