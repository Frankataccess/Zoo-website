from django.shortcuts import render
from rest_framework import viewsets, permissions 
from .serializers import * 
from .models import * 
from rest_framework.response import Response 
from django.contrib.auth import get_user_model, authenticate
from knox.models import AuthToken

User = get_user_model()

class LoginViewset(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    serializer_class = LoginSerializer

    def create(self, request): 
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid(): 
            email = serializer.validated_data['email']
            password = serializer.validated_data['password']
            user = authenticate(request, email=email, password=password)
            if user: 
                _, token = AuthToken.objects.create(user)
                return Response(
                    {
                        "user": self.serializer_class(user).data,
                        "token": token
                    }
                )
            else: 
                return Response({"error":"Invalid credentials"}, status=401)    
        else: 
            return Response(serializer.errors,status=400)



class RegisterViewset(viewsets.ViewSet):
    permission_classes = [permissions.AllowAny]
    queryset = User.objects.all()
    serializer_class = RegisterSerializer

    def create(self,request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else: 
            return Response(serializer.errors,status=400)


class UserViewset(viewsets.ViewSet):
    permission_classes = [permissions.IsAuthenticated]
    queryset = User.objects.all()
    serializer_class = RegisterSerializer

    def list(self,request):
        queryset = User.objects.all()
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)

class TicketViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = TicketSerializer
    queryset = Ticket.objects.all()

    def get_queryset(self):
        # Only return tickets for the logged-in user
        return self.queryset.filter(user=self.request.user.email)

    def perform_create(self, serializer):
        # Automatically set the logged-in user's email as the ticket's user
        serializer.save(user=self.request.user.email)

    def create(self, request, *args, **kwargs):
        print('Received payload:', request.data)  # Debugging
        
        # Extract the tickets from the request data
        tickets_data = request.data.get('tickets', [])
        
        if not tickets_data:
            return Response({"error": "No tickets provided"}, status=400)

        # Create tickets for each entry in the tickets array
        for ticket_data in tickets_data:
            ticket_type = ticket_data.get('ticket_type')
            ticket_date = ticket_data.get('ticket_date')
            quantity = ticket_data.get('quantity', 1)  # Default to 1 if not specified

            # Validate ticket type and date
            if not ticket_type or ticket_type not in dict(Ticket.TICKET_CHOICES).keys():
                return Response({"error": "Invalid ticket type"}, status=400)
            if not ticket_date:
                return Response({"error": "Ticket date is required"}, status=400)

            # Create the tickets based on the quantity
            for _ in range(quantity):
                Ticket.objects.create(
                    user=request.user.email,
                    ticket_type=ticket_type,
                    ticket_date=ticket_date
                )

        return Response({"message": "Tickets created successfully."}, status=201)

