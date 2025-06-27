class Person:
    def __init__(
        self,
        person_id=None,
        first_name=None,
        middle_name=None,
        last_name=None,
        suffix_id=None,
        suffix_name=None,
        date_of_birth=None,
        gender_id=None,
        gender_name=None,
        civil_status=None,
    ):
        self.person_id = person_id
        self.first_name = first_name
        self.middle_name = middle_name
        self.last_name = last_name
        self.suffix_id = suffix_id
        self.suffix_name = suffix_name
        self.date_of_birth = date_of_birth
        self.gender_id = gender_id
        self.gender_name = gender_name
        self.civil_status = civil_status
        self.full_name_cap = self.full_name_caps()
        self.full_name_title = self.full_name_titles()

    def full_name(self):
        parts = [self.first_name]

        if self.middle_name:  # Only add if not None or empty
            parts.append(self.middle_name)

        parts.append(self.last_name)

        if self.suffix_name:  # Only add if not None or empty
            parts.append(self.suffix_name)

        return " ".join(parts)

    def full_name_caps(self):
        return self.full_name().upper()

    def full_name_titles(self):
        return self.full_name().title()
