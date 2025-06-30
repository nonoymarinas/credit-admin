import pyodbc
import os
from typing import List
from dotenv import load_dotenv

from ..models.suffix import Suffix
from ..models.gender import Gender
from ..models.references import Reference


class ReferenceDAL:

    def __init__(self):
        # Load environment variables from .env
        load_dotenv()

        self.conn = pyodbc.connect(
            f"DRIVER={{ODBC Driver 17 for SQL Server}};"
            f"SERVER={os.getenv('DB_SERVER')};"
            f"DATABASE={os.getenv('DB_NAME')};"
            f"UID={os.getenv('DB_USER')};"
            f"PWD={os.getenv('DB_PASS')};"
            "Encrypt=yes;"
            "TrustServerCertificate=no;"
            "Connection Timeout=30;"
        )

    def get_all(self):
        self.reference = Reference()
        cursor = self.conn.cursor()
        cursor.execute("EXEC [dtms.references].[spGetNewDebtorReferences]")

        # First result set: Suffixes
        for row in cursor.fetchall():
            suffix = Suffix(
                suffix_id=row.SuffixID,
                suffix_name=row.SuffixName,
            )
            self.reference.suffixes.append(suffix)

        # Second result set: Genders
        if cursor.nextset():
            for row in cursor.fetchall():
                gender = Gender(
                    gender_id=row.GenderID,
                    gender_name=row.GenderName,
                )
                self.reference.genders.append(gender)

        # Third result set: Status Code
        if cursor.nextset():
            row = cursor.fetchone()
            if row:
                self.reference.status_code_number = row.StatusCodeNumber

        return self.reference
