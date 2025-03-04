from rest_framework import serializers 
from .models import * 
from django.contrib.auth import get_user_model 
from datetime import date
from django.utils import timezone
User = get_user_model()

class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()

    def to_representation(self, instance):
        ret = super().to_representation(instance)
        ret.pop('password', None)
        return ret


class RegisterSerializer(serializers.ModelSerializer):
    class Meta: 
        model = User
        fields = ('id','email','password')
        extra_kwargs = { 'password': {'write_only':True}}
    
    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user

class TicketSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ticket
        fields = ['id', 'user', 'ticket_type', 'ticket_date', 'ticket_id']
        read_only_fields = ['ticket_id']

def validate_ticket_date(self, value):
        # Ensure the ticket_date is not in the past
        today = timezone.localdate()  # Get the current date (aware of timezone)
        if value < today:
            raise serializers.ValidationError("The ticket date cannot be in the past.")
        return value