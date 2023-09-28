from rest_framework import serializers
from .models import BlogModel
from bs4 import BeautifulSoup as bs

class BlogModelListSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogModel
        fields = ("title", "image", "created_at",)

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

