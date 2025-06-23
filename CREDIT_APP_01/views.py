from django.shortcuts import render

# Create your views here.
def home(request):
    try:
        return render(request, 'CREDIT_APP_01/home.html')
    except Exception as e:
        # Log the exception or handle it as needed
        print(f"An error occurred: {e}")
        return render(request, 'CREDIT_APP_01/error.html', {'error': str(e)})
    
def newcredit(request):
    try:
        return render(request, 'CREDIT_APP_01/newcredit.html')
    except Exception as e:
        # Log the exception or handle it as needed
        print(f"An error occurred: {e}")
        return render(request, 'CREDIT_APP_01/error.html', {'error': str(e)})