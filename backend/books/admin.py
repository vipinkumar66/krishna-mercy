from django.contrib import admin
from .models import Book


# Register your models here.
@admin.register(Book)
class BookAdminArea(admin.ModelAdmin):
    list_display = ("name", "uploaded_at",)