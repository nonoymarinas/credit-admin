import pyodbc
from ..models.person import Person


class PersonDAL:
    def __init__(self):
        self.conn = pyodbc.connect(
            "DRIVER={ODBC Driver 17 for SQL Server};"
            "SERVER=tcp:speedxserver.database.windows.net,1433;"
            "DATABASE=ERP_SPEEDX_DB_TEST;"
            "UID=nonoymarinas;"
            "PWD=Nonoy10@;"
            "MultipleActiveResultSets=False;"
            "Encrypt=yes;"  # ✅ FIXED
            "TrustServerCertificate=no;"  # ✅ updated to match encrypt=yes
            "Connection Timeout=30;"
        )

    def get_all(self):
        cursor = self.conn.cursor()
        cursor.execute("EXEC [speedx.hrms.master].[spGetAllCurrentCleanEmployee_v2]")

        persons = []
        for row in cursor.fetchall():
            p = Person(
                person_id=row.PersonID,
                first_name=row.FirstName,
                middle_name=row.MiddleName,
                last_name=row.LastName,
                suffix_id=row.SuffixID,
                suffix_name=row.Suffix,
                gender_id=row.GenderID,
                gender_name=row.Gender,
            )
            persons.append(p)
        return persons
