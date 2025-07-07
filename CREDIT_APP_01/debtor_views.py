from django.http import JsonResponse
from django.shortcuts import render
from .services.references_services import NewDebtorReferenceService


def health_check(request):
    return JsonResponse({"status": "ok"})


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


def get_new_debtor_references(request):
    try:
        service = NewDebtorReferenceService()
        references = service.get_references()
        return JsonResponse(
            references.to_dict(), safe=False
        )  # ensure compatibility with list-based top-level JSON
    except Exception as e:
        print(f"Error in get_new_debtor_references: {e}")
        return JsonResponse({"error": str(e)}, status=500)
    finally:
        if "service" in locals():
            service.reference_dal.close()
