from rest_framework import serializers
from .models import BlogModel
from bs4 import BeautifulSoup as bs
from PIL import Image
from io import BytesIO
from django.core.files.uploadedfile import InMemoryUploadedFile

class BlogModelListSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogModel
        fields = ("title", "image", "created_at",)

    def to_representation(self, instance):
        representation =  super().to_representation(instance)
        representation["created_at"] = instance.created_at.strftime('%Y-%m-%d')

        # if instance.image:
        #     representation['image'] = self.resize_image(instance.image)
        return representation

    # def resize_image(self, image_instance):
    #     img = Image.open(image_instance.path)
    #     resized_image = img.resize((472, 354))
    #     buffer = BytesIO()
    #     resized_image.save(buffer, format="PNG")
    #     resized_image = InMemoryUploadedFile(
    #         buffer, None, image_instance.name, 'image/png', buffer.getbuffer().nbytes, None
    #     )
    #     return resized_image

class SingleBlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogModel
        fields = "__all__"

    def modify_content(self, content):
        soup = bs(content, "lxml")
        all_h1_tags = soup.find_all("h1")
        for h1_tag in all_h1_tags:
            if "class" in h1_tag.attrs:
                h1_tag["className"] = "text-4xl mb-2 md:text-5xl dark:text-slate-200"
                del h1_tag['class']

        body_content = soup.find("body")
        if body_content:
            return ''.join(map(str, body_content.contents))
        else:
            return ("No content inside the body tag")

    def to_representation(self, instance):
        data = super().to_representation(instance)
        data['content'] = self.modify_content(data['content'])
        return data

