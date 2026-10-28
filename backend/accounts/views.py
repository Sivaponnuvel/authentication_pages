from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import RegisterSerializer
from .models import Register

# Create your views here.

@api_view(['POST'])
def register_user(request):
    serializer = RegisterSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message":"Registration successful"}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def login_user(request):
    username = request.data.get("username")
    password = request.data.get("password")

    try:
        user = Register.objects.get(username=username)
    except Register.DoesNotExist:
        return Response({"message": "Invalid Username"}, status=status.HTTP_400_BAD_REQUEST)

    if user.password != password:
        return Response({"message": "Invalid Password"}, status=status.HTTP_400_BAD_REQUEST)

    return Response({"message": "Login Successful"}, status=status.HTTP_200_OK)