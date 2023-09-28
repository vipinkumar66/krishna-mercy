from rest_framework.generics import ListAPIView, RetrieveAPIView
from .models import BlogModel
from .serializers import BlogModelListSerializer, SingleBlogSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view

@api_view(["GET"])
def BlogModelFuncListView(request):
    all_models = BlogModel.objects.all()
    serializer = BlogModelListSerializer(all_models, many=True)
    return Response(serializer.data)

class BlogModelListView(ListAPIView):
    queryset = BlogModel.objects.all()
    serializer_class = BlogModelListSerializer

class BlogDetailView(RetrieveAPIView):
    queryset = BlogModel.objects.all()
    serializer_class = SingleBlogSerializer
