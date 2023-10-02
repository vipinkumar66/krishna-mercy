from rest_framework import serializers
from .models import Book


class BookListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ("name", "uploaded_at")

    def to_representation(self, instance):
        representation =  super().to_representation(instance)
        representation["uploaded_at"] = instance.uploaded_at.strftime('%Y-%m-%d')
        return representation

class BookRetrieveSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = "__all__"


    def to_representation(self, instance):
            representation =  super().to_representation(instance)
            representation["uploaded_at"] = instance.uploaded_at.strftime('%Y-%m-%d')
            return representation
