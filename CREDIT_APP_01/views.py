from django.http import JsonResponse
from django.shortcuts import render
from .services.person_services import PersonService


# Create your views here.
def home(request):
    try:
        return render(request, "CREDIT_APP_01/home.html")
    except Exception as e:
        # Log the exception or handle it as needed
        print(f"An error occurred: {e}")
        return render(request, "CREDIT_APP_01/error.html", {"error": str(e)})


def newcredit(request):
    try:
        return render(request, "CREDIT_APP_01/newcredit.html")
    except Exception as e:
        # Log the exception or handle it as needed
        print(f"An error occurred: {e}")
        return render(request, "CREDIT_APP_01/error.html", {"error": str(e)})


def newdebtor(request):
    try:
        return render(request, "CREDIT_APP_01/newdebtor.html")
    except Exception as e:
        # Log the exception or handle it as needed
        print(f"An error occurred: {e}")
        return render(request, "CREDIT_APP_01/error.html", {"error": str(e)})


def get_all_persons(request):
    service = PersonService()
    persons = service.get_all_persons()
    data = [p.__dict__ for p in persons]
    return JsonResponse(data, safe=False)
