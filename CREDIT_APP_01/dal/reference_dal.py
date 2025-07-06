import os
import psycopg2
from dotenv import load_dotenv
from typing import List
from ..models.references import Reference
from ..models.suffix import Suffix
from ..models.gender import Gender
from ..models.country import Country
from ..models.region import Region
from ..models.province import Province
from ..models.city import City
from ..models.civil_status import CivilStatus


class ReferenceDal_Supabase:
    def __init__(self):
        load_dotenv()
        self.conn = psycopg2.connect(os.getenv("CREDIT_DB_URL"))

    def get_all_references(self) -> Reference:
        ref = Reference()
        ref.suffixes = self.get_suffixes()
        ref.genders = self.get_genders()
        ref.countries = self.get_countries()
        ref.regions = self.get_regions()
        ref.provinces = self.get_provinces()
        ref.cities = self.get_cities()
        ref.civil_statuses = self.get_civil_statuses()
        ref.status_code_number = 200
        return ref

    def get_suffixes(self) -> List[Suffix]:
        results = []
        try:
            with self.conn.cursor() as cur:
                cur.execute("SELECT * FROM global_references.get_all_suffixes();")
                for row in cur.fetchall():
                    results.append(Suffix(id=row[0], suffix_name=row[1]))
        except Exception as e:
            print(f"Error fetching suffixes: {e}")
        return results

    def get_genders(self) -> List[Gender]:
        results = []
        try:
            with self.conn.cursor() as cur:
                cur.execute("SELECT * FROM global_references.get_all_genders();")
                for row in cur.fetchall():
                    results.append(Gender(id=row[0], gender_name=row[1]))
        except Exception as e:
            print(f"Error fetching genders: {e}")
        return results

    def get_countries(self) -> List[Country]:
        results = []
        try:
            with self.conn.cursor() as cur:
                cur.execute("SELECT * FROM global_references.get_all_countries();")
                for row in cur.fetchall():
                    results.append(Country(country_id=row[0], country_name=row[1]))
        except Exception as e:
            print(f"Error fetching countries: {e}")
        return results

    def get_regions(self) -> List[Region]:
        results = []
        try:
            with self.conn.cursor() as cur:
                cur.execute("SELECT * FROM global_references.get_all_regions();")
                for row in cur.fetchall():
                    # Assuming country_id is not returned by the function, set to None
                    results.append(
                        Region(region_id=row[0], region_name=row[1], country_id=None)
                    )
        except Exception as e:
            print(f"Error fetching regions: {e}")
        return results

    def get_provinces(self) -> List[Province]:
        results = []
        try:
            with self.conn.cursor() as cur:
                cur.execute("SELECT * FROM global_references.get_all_provinces();")
                for row in cur.fetchall():
                    results.append(
                        Province(
                            region_id=row[0], province_id=row[1], province_name=row[2]
                        )
                    )
        except Exception as e:
            print(f"Error fetching provinces: {e}")
        return results

    def get_cities(self) -> List[City]:
        results = []
        try:
            with self.conn.cursor() as cur:
                cur.execute("SELECT * FROM global_references.get_all_cities();")
                for row in cur.fetchall():
                    results.append(
                        City(province_id=row[0], city_id=row[1], city_name=row[2])
                    )
        except Exception as e:
            print(f"Error fetching cities: {e}")
        return results

    def get_civil_statuses(self) -> List[CivilStatus]:
        results = []
        try:
            with self.conn.cursor() as cur:
                cur.execute("SELECT * FROM global_references.get_all_civil_statuses();")
                for row in cur.fetchall():
                    results.append(
                        CivilStatus(civil_status_id=row[0], civil_status_name=row[1])
                    )
        except Exception as e:
            print(f"Error fetching civil statuses: {e}")
        return results

    def close(self):
        if self.conn:
            self.conn.close()
