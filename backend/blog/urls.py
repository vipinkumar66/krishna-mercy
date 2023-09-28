from django.urls import path
from .views import BlogModelFuncListView, BlogModelListView, BlogDetailView


urlpatterns = [
    path("", BlogModelListView.as_view(), name="all-blogs"),
    path("<int:pk>/", BlogDetailView.as_view(), name="detail-view")
]