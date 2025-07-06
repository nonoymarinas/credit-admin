from django.urls import path
from . import debtor_views

urlpatterns = [
    path("home", debtor_views.home, name="home"),
    path("newcredit", debtor_views.newcredit, name="newcredit"),
    path("newdebtor", debtor_views.newdebtor, name="newdebtor"),
    path(
        "debtorreferences",
        debtor_views.get_new_debtor_references,
        name="debtorreferences",
    ),
]
