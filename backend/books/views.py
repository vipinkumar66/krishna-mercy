from django.shortcuts import render
from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework.views import APIView
from .models import Book
from django.http import HttpResponse
from .serializers import BookListSerializer, BookRetrieveSerializer
# Create your views here.

class ListAllBooks(ListAPIView):
    queryset = Book.objects.all()
    serializer_class = BookListSerializer

class RetrieveBook(RetrieveAPIView):
    queryset = Book.objects.all()
    serializer_class = BookRetrieveSerializer
    lookup_field = "pk"

# views.py

def container_xml(request):
    # Basic content for container.xml
    content = '<?xml version="1.0" encoding="UTF-8"?>\n<container version="1.0" xmlns="urn:oasis:names:tc:opendocument:xmlns:container">\n</container>'

    # Set the content type to XML
    response = HttpResponse(content, content_type='application/xml')

    return response
