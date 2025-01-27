from django.contrib import admin
from .models import *
# Register your models here.

admin.site.register(CustomUser)

@admin.register(Ticket)
class TicketAdmin(admin.ModelAdmin):
    list_display = ('user', 'ticket_type', 'ticket_date', 'ticket_id')
    search_fields = ('user', 'ticket_id')
    list_filter = ('ticket_type', 'ticket_date')