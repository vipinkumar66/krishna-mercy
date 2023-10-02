from django.urls import path
from .views import RetrieveBook

urlpatterns = [
    path("all_books/<int:pk>/", RetrieveBook.as_view(), name="books-list")
]