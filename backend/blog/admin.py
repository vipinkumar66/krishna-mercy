from django.contrib import admin
from .models import BlogModel
from django_summernote.admin import SummernoteModelAdmin


@admin.register(BlogModel)
class BlogAdmin(SummernoteModelAdmin):
    list_display = ["title", "created_at"]
    summernote_fields = ["content"]
